"use client";

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

const vertexShaderGLSL = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = (position + 1.0) * 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderGLSL = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_flowStrength;
uniform float u_grain;
uniform float u_contrast;
uniform float u_speed;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; i++) { 
    v += a * noise(p);
    p = rot * p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float t = u_time * u_speed;
  vec2 p = (uv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0) * 2.0;

  float baseNoise = fbm(p * 0.8 + t * 0.2);
  float fluid = fbm(p * 1.2 + baseNoise * u_flowStrength + t * 0.3);
  
  float eps = 0.01;
  float nx = fbm(p + vec2(eps, 0.0) + baseNoise * u_flowStrength + t * 0.3) - fluid;
  float ny = fbm(p + vec2(0.0, eps) + baseNoise * u_flowStrength + t * 0.3) - fluid;
  vec3 normal = normalize(vec3(nx, ny, eps * 1.5));
  
  vec3 lightDir = normalize(vec3(1.0, 1.0, 0.8)); 
  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  vec3 halfVector = normalize(lightDir + viewDir);
  
  vec3 color = vec3(0.0); 
  
  float glintIntensity = 64.0; 
  
  float specR = pow(max(dot(normalize(vec3(nx + 0.005, ny, eps*1.5)), halfVector), 0.0), glintIntensity);
  float specG = pow(max(dot(normal, halfVector), 0.0), glintIntensity);
  float specB = pow(max(dot(normalize(vec3(nx - 0.005, ny, eps*1.5)), halfVector), 0.0), glintIntensity);
  
  vec3 specular = vec3(specR, specG, specB) * 1.5; 
  
  color += specular;

  color = mix(vec3(0.5), color, u_contrast);
  
  float vig = smoothstep(1.8, 0.2, length(uv - 0.5));
  color *= vig;

  float grainAmount = (hash(uv + t) - 0.5) * u_grain;
  color += grainAmount;

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;

interface ChromaticFluidProps extends React.HTMLAttributes<HTMLDivElement> {
  flowStrength?: number;
  grain?: number;
  contrast?: number;
  speed?: number;
  height?: string;
}

const ChromaticFluid = ({
  flowStrength = 0.8,
  grain = 0.04,
  contrast = 1.1,
  speed = 0.4,
  height = "100vh",
  className,
  style,
  ...props
}: ChromaticFluidProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(
    () => ({
      flowStrength,
      grain,
      contrast,
      speed,
    }),
    [flowStrength, grain, contrast, speed],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const gl = canvas.getContext("webgl", { antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShaderGLSL));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShaderGLSL));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const locs = {
      res: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      flow: gl.getUniformLocation(program, "u_flowStrength"),
      grain: gl.getUniformLocation(program, "u_grain"),
      contrast: gl.getUniformLocation(program, "u_contrast"),
      speed: gl.getUniformLocation(program, "u_speed"),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = host.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(locs.res, canvas.width, canvas.height);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let frameId: number;
    const startTime = performance.now();
    const render = (now: number) => {
      const elapsed = (now - startTime) / 1000;

      gl.uniform1f(locs.time, elapsed);
      gl.uniform1f(locs.flow, settings.flowStrength);
      gl.uniform1f(locs.grain, settings.grain);
      gl.uniform1f(locs.contrast, settings.contrast);
      gl.uniform1f(locs.speed, settings.speed);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [settings]);

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black",
        className,
      )}
      style={{ height, ...style }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 block h-full w-full"
      />

      <div className="relative z-10 w-full">{props.children}</div>
    </div>
  );
};

export default ChromaticFluid;
