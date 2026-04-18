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
uniform vec3 u_colorBottom;
uniform vec3 u_colorMid;
uniform vec3 u_colorTop;
uniform float u_flowStrength;
uniform float u_grain;
uniform float u_speed;

varying vec2 vUv;

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  
  return mix(
    mix(mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), u.x),
        mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), u.x), u.y),
    mix(mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), u.x),
        mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z
  );
}

float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = (vUv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);
  
  float radius = length(uv);
  float angle = atan(uv.y, uv.x);
  
  float z = 1.0 / max(radius, 0.001);
  float t = u_time * u_speed * 5.0;
  
  float streakScale = 5.0 * u_flowStrength; 
  
  vec3 cylPos = vec3(
    cos(angle) * streakScale, 
    sin(angle) * streakScale, 
    (z - t) * 0.2 
  );
  
  float twist = sin(t * 0.1 + z * 0.05) * 2.5;
  float c = cos(twist);
  float s = sin(twist);
  cylPos.xy = mat2(c, -s, s, c) * cylPos.xy;
  
  float n = fbm(cylPos);
  
  float streak = smoothstep(0.4, 0.8, n);
  
  vec3 color = mix(u_colorBottom, u_colorMid, smoothstep(0.3, 0.6, n));
  color = mix(color, u_colorTop, smoothstep(0.6, 1.0, n));
  
  float centerFade = smoothstep(0.0, 0.25, radius);
  float edgeFade = smoothstep(1.5, 0.4, radius);
  
  vec3 finalColor = color * streak * centerFade * edgeFade * 3.0;

  finalColor += (fract(sin(dot(vUv + u_time, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * u_grain;

  gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}
`;

interface VeloraProps extends React.HTMLAttributes<HTMLDivElement> {
  colorBottom?: string;
  colorMid?: string;
  colorTop?: string;
  flowStrength?: number;
  grain?: number;
  speed?: number;
  height?: string;
}

const DEFAULT_COLOR_DARK = "#04050b";
const DEFAULT_COLOR_MID = "#4338ca";
const DEFAULT_COLOR_LIGHT = "#a5b4fc";

function hexToRgbNormalized(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const Velora = ({
  colorBottom = DEFAULT_COLOR_DARK,
  colorMid = DEFAULT_COLOR_MID,
  colorTop = DEFAULT_COLOR_LIGHT,
  flowStrength = 1.0,
  grain = 0.04,
  speed = 0.5,
  height = "100vh",
  className,
  style,
  ...props
}: VeloraProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(
    () => ({
      colorBottom,
      colorMid,
      colorTop,
      flowStrength,
      grain,
      speed,
    }),
    [colorBottom, colorMid, colorTop, flowStrength, grain, speed],
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
      cBottom: gl.getUniformLocation(program, "u_colorBottom"),
      cMid: gl.getUniformLocation(program, "u_colorMid"),
      cTop: gl.getUniformLocation(program, "u_colorTop"),
      flow: gl.getUniformLocation(program, "u_flowStrength"),
      grain: gl.getUniformLocation(program, "u_grain"),
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
      const cb = hexToRgbNormalized(settings.colorBottom);
      const cm = hexToRgbNormalized(settings.colorMid);
      const ct = hexToRgbNormalized(settings.colorTop);

      gl.uniform1f(locs.time, elapsed);
      gl.uniform3f(locs.cBottom, cb[0], cb[1], cb[2]);
      gl.uniform3f(locs.cMid, cm[0], cm[1], cm[2]);
      gl.uniform3f(locs.cTop, ct[0], ct[1], ct[2]);
      gl.uniform1f(locs.flow, settings.flowStrength);
      gl.uniform1f(locs.grain, settings.grain);
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
        "relative flex w-full items-center justify-center overflow-hidden bg-black",
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

export default Velora;
