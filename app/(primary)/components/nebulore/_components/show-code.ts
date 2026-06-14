export const title = "Nebulore";
export const routepoint = "nebulore";
export const description =
  "A WebGL-powered animated nebula background featuring flowing aurora ribbons, domain-warped simplex noise, and customizable color glow with film grain.";

export const cliscript = "add @forgeui/nebulore";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const nebuloreProps = [
  {
    prop: "colors",
    type: "string[]",
    default: '["#312e81", "#9333ea", "#22d3ee"]',
    description: "Array of three hex colors for deep base, ribbon glow, and highlight accent.",
  },
  {
    prop: "speed",
    type: "number",
    default: "0.6",
    description: "Controls the animation speed of the nebula drift.",
  },
  {
    prop: "grain",
    type: "number",
    default: "0.5",
    description: "Intensity of the film grain overlay.",
  },
  {
    prop: "height",
    type: "string",
    default: "100vh",
    description: "Sets the height of the canvas container.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes for the container.",
  },
];

export const democode = `import Nebulore from @/components/forgeui/nebulore;

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <Nebulore
        colors={["#312e81", "#9333ea", "#22d3ee"]}
        speed={0.6}
        grain={0.5}
        height="100vh"
      />
  )
}
`;

export const code = `"use client";

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

const vertexShaderGLSL = \`
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragmentShaderGLSL = \`
precision highp float;

varying vec2 vUv;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_speed;
uniform float u_grain;
uniform vec3 u_colors[3];

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rot = mat2(0.87, 0.48, -0.48, 0.87);

  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(p);
    p = rot * p * 2.05;
    amplitude *= 0.5;
  }

  return value;
}

void main() {
  vec2 uv = vUv;
  float ratio = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(ratio, 1.0);
  float t = u_time * u_speed;

  vec2 warp = vec2(
    fbm(p * 1.4 + vec2(t * 0.08, t * 0.04)),
    fbm(p * 1.4 + vec2(-t * 0.06, t * 0.05) + 4.2)
  );
  vec2 q = p + warp * 0.35;

  float ribbonA = abs(snoise(vec2(q.x * 1.8 + t * 0.12, q.y * 2.4 - t * 0.08)));
  float ribbonB = abs(snoise(vec2(q.x * 2.6 - t * 0.1, q.y * 1.6 + t * 0.06 + ribbonA)));
  float nebula = pow(1.0 - smoothstep(0.0, 0.55, ribbonA + ribbonB * 0.6), 2.2);

  float drift = fbm(p * 0.9 + vec2(t * 0.05, -t * 0.03));
  nebula *= smoothstep(-0.4, 0.8, drift + 0.2);
  nebula *= smoothstep(0.05, 0.55, uv.y) * smoothstep(1.0, 0.35, uv.y);

  vec3 col = vec3(0.01, 0.005, 0.03);
  col = mix(col, u_colors[0] * 0.35, smoothstep(-0.2, 0.9, drift));
  col = mix(col, u_colors[1], nebula * 0.85);
  col += u_colors[2] * pow(nebula, 3.5) * 0.75;

  float vignette = smoothstep(1.15, 0.25, length(uv - 0.5));
  col *= vignette;

  float grain = fract(sin(dot(uv * u_resolution, vec2(12.9898, 78.233)) + u_time * 60.0) * 43758.5453);
  col += (grain - 0.5) * u_grain * 0.04;

  gl_FragColor = vec4(col, 1.0);
}
\`;

interface NebuloreProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  speed?: number;
  grain?: number;
  height?: string;
}

const DEFAULT_COLORS = ["#312e81", "#9333ea", "#22d3ee"];

const COLOR_HEX_PATTERN = /^#?[0-9a-fA-F]{6}$/;

function normalizeHexColor(value: string, fallback: string) {
  const trimmed = value.trim();
  if (!COLOR_HEX_PATTERN.test(trimmed)) {
    return fallback;
  }
  return trimmed.startsWith("#") ? trimmed : \`#\${trimmed}\`;
}

function hexToRgbNormalized(hex: string): [number, number, number] {
  const normalized = normalizeHexColor(hex, DEFAULT_COLORS[0]).replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const Nebulore = ({
  colors = DEFAULT_COLORS,
  speed = 0.6,
  grain = 0.5,
  height = "100vh",
  className,
  style,
  ...props
}: NebuloreProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(
    () => ({
      colors: colors.slice(0, 3).map((color, index) =>
        normalizeHexColor(color, DEFAULT_COLORS[index] ?? DEFAULT_COLORS[0]),
      ),
      speed,
      grain,
    }),
    [colors, speed, grain],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) {
      return;
    }

    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const compileGLSLShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) {
        return null;
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShaderObject = compileGLSLShader(
      gl.VERTEX_SHADER,
      vertexShaderGLSL,
    );
    const fragmentShaderObject = compileGLSLShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderGLSL,
    );
    if (!vertexShaderObject || !fragmentShaderObject) {
      return;
    }

    const glProgram = gl.createProgram();
    if (!glProgram) {
      return;
    }

    gl.attachShader(glProgram, vertexShaderObject);
    gl.attachShader(glProgram, fragmentShaderObject);
    gl.linkProgram(glProgram);

    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(glProgram));
      gl.deleteProgram(glProgram);
      gl.deleteShader(vertexShaderObject);
      gl.deleteShader(fragmentShaderObject);
      return;
    }

    gl.useProgram(glProgram);

    const vertexPositionAttribLocation = gl.getAttribLocation(
      glProgram,
      "position",
    );
    const screenQuadVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, screenQuadVertexBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(vertexPositionAttribLocation);
    gl.vertexAttribPointer(
      vertexPositionAttribLocation,
      2,
      gl.FLOAT,
      false,
      0,
      0,
    );

    const resolutionUniformLocation = gl.getUniformLocation(
      glProgram,
      "u_resolution",
    );
    const timeUniformLocation = gl.getUniformLocation(glProgram, "u_time");
    const speedUniformLocation = gl.getUniformLocation(glProgram, "u_speed");
    const grainUniformLocation = gl.getUniformLocation(glProgram, "u_grain");
    const colorsUniformLocation = gl.getUniformLocation(glProgram, "u_colors");

    if (
      !resolutionUniformLocation ||
      !timeUniformLocation ||
      !speedUniformLocation ||
      !grainUniformLocation ||
      !colorsUniformLocation
    ) {
      gl.deleteBuffer(screenQuadVertexBuffer);
      gl.deleteProgram(glProgram);
      gl.deleteShader(vertexShaderObject);
      gl.deleteShader(fragmentShaderObject);
      return;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = host.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let animationFrameId = 0;
    const start = performance.now();

    const render = (now: number) => {
      const elapsedSec = (now - start) / 1000;
      const rgbColors = settings.colors.flatMap(hexToRgbNormalized);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeUniformLocation, elapsedSec);
      gl.uniform1f(speedUniformLocation, settings.speed);
      gl.uniform1f(grainUniformLocation, settings.grain);
      gl.uniform3fv(colorsUniformLocation, new Float32Array(rgbColors));

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      gl.deleteBuffer(screenQuadVertexBuffer);
      gl.deleteProgram(glProgram);
      gl.deleteShader(vertexShaderObject);
      gl.deleteShader(fragmentShaderObject);
    };
  }, [settings]);

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative flex w-full items-center overflow-hidden bg-[#010103]",
        className,
      )}
      style={{ height, containerType: "size", ...style }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export default Nebulore;
\$`;
