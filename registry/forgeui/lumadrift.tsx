"use client";

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

const vertexShaderGLSL = `
attribute vec2 position;
varying vec2 vUv;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  vUv = (position.xy + 1.0) * 0.5;
}
`;

const fragmentShaderGLSL = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

varying vec2 vUv;

vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                 dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
             mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                 dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  float t = u_time * 0.0004;

  float warp = noise(vec2(uv.x * 1.2 + t, t * 0.2));
  vec2 uvWarped = uv;
  uvWarped.x += warp * 0.1;

  float n1 = noise(vec2(uvWarped.x * 2.0 + t * 0.5, uvWarped.y * 0.2 - t * 0.1));
  float n2 = noise(vec2(uvWarped.x * 4.0 - t * 0.8, uvWarped.y * 0.5 + t * 0.2));
  
  float aurora = abs(n1 + n2);
  aurora = pow(1.0 - smoothstep(0.0, 0.4, aurora), 4.0);
  
  float mask = smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.5, uv.y);
  aurora *= mask;

  vec3 darkBlue = vec3(0.02, 0.04, 0.08);
  vec3 oceanBlue = vec3(0.05, 0.15, 0.35);
  vec3 skyBlue = vec3(0.1, 0.3, 0.6);
  vec3 cyan = vec3(0.2, 0.6, 0.9);
  vec3 brightGlow = vec3(0.4, 0.8, 1.0);

  vec3 col = darkBlue;
  col = mix(col, oceanBlue, aurora * 0.8);
  col = mix(col, skyBlue, pow(aurora, 2.0));
  col = mix(col, cyan, pow(aurora, 3.0));
  col += brightGlow * pow(aurora, 5.0) * 0.5;

  float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  col += grain * 0.02;

  gl_FragColor = vec4(col, 1.0);
}
`;

interface LumaDriftProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  height?: string;
}

const LumaDrift = ({
  speed = 1,
  height = "100vh",
  className,
  style,
  ...props
}: LumaDriftProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(() => ({ speed }), [speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertexShaderGLSL));
    gl.attachShader(
      program,
      compileShader(gl.FRAGMENT_SHADER, fragmentShaderGLSL),
    );
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const locs = {
      res: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = host.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const startTime = Date.now();
    let frameId: number;
    const render = () => {
      const elapsed = (Date.now() - startTime) * settings.speed;
      gl.uniform2f(locs.res, canvas.width, canvas.height);
      gl.uniform1f(locs.time, elapsed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      gl.deleteProgram(program);
    };
  }, [settings]);

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative flex w-full items-center overflow-hidden bg-black",
        className,
      )}
      style={{ height, ...style }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 block h-full w-full"
      />
    </div>
  );
};

export default LumaDrift;
