export const title = "Cloudscape";
export const routepoint = "cloudscape";
export const description =
  "A WebGL-powered animated cloud gradient that creates a soft, flowing sky-like background using layered noise and color blending.";

export const cliscript = "add @forgeui/cloudscape";

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

export const screennotice = "*Currently available in light colors only.";

const packagescript = "clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const cloudscapeProps = [
  {
    prop: "colorTop",
    type: "string",
    default: "#ffffff",
    description: "Top gradient color of the sky.",
  },
  {
    prop: "colorMid",
    type: "string",
    default: "#f8f8f8",
    description: "Middle gradient color for soft blending.",
  },
  {
    prop: "colorBottom",
    type: "string",
    default: "#87ceeb",
    description: "Bottom gradient color, typically the horizon tone.",
  },
  {
    prop: "speed",
    type: "number",
    default: "1",
    description: "Controls the animation speed of the cloud movement.",
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

export const democode = `import Cloudscape from @/components/forgeui/cloudscape;

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <Cloudscape
        colorBottom="#87ceeb"
        colorMid="#f8f8f8"
        colorTop="#ffffff"
        speed={1}
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
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragmentShaderGLSL = \`
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colorBottom;
uniform vec3 u_colorMid;
uniform vec3 u_colorTop;
uniform float u_speed;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p, float t) {
  float v = 0.0;
  float a = 0.5;
  float fi = 0.0;
  mat2 rot = mat2(0.86, 0.51, -0.51, 0.86);
  
  for (int i = 0; i < 6; i++) {
    vec2 morph = vec2(sin(t * 0.5 + fi), cos(t * 0.3 - fi)) * 0.05;
    v += a * noise(p + morph);
    p = rot * p * 2.0;
    a *= 0.5;
    fi += 1.0;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * u_speed;
  vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
  vec2 p = (uv - 0.5) * aspect;

  vec2 wind = vec2(t * 0.1, t * 0.02);

  float pattern = fbm(p * 2.2 - wind, t);

  float bandLow = smoothstep(0.3, 0.65, pattern);
  float bandHigh = smoothstep(0.7, 0.95, pattern); 
  
  vec3 color = mix(u_colorBottom, u_colorMid, bandLow);
  color = mix(color, u_colorTop, bandHigh);

  gl_FragColor = vec4(color, 1.0);
}
\`;

interface CloudscapeProps extends React.HTMLAttributes<HTMLDivElement> {
  colorBottom?: string;
  colorMid?: string;
  colorTop?: string;
  speed?: number;
  height?: string;
}

const DEFAULT_COLOR = "#0d1117";

const COLOR_HEX_PATTERN = /^#?[0-9a-fA-F]{6}$/;

function normalizeHexColor(value: string, fallback: string) {
  const trimmed = value.trim();
  if (!COLOR_HEX_PATTERN.test(trimmed)) {
    return fallback;
  }
  return trimmed.startsWith("#") ? trimmed : \`#\${trimmed}\`;
}

function hexToRgbNormalized(hex: string): [number, number, number] {
  const normalized = normalizeHexColor(hex, DEFAULT_COLOR).replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const Cloudscape = ({
  colorBottom = "#87ceeb",
  colorMid = "#f8f8f8",
  colorTop = "#ffffff",
  speed = 1,
  height = "100vh",
  className,
  style,
  ...props
}: CloudscapeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(
    () => ({
      colorBottom,
      colorMid,
      colorTop,
      speed,
    }),
    [colorBottom, colorMid, colorTop, speed],
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
    const colorBottomUniformLocation = gl.getUniformLocation(
      glProgram,
      "u_colorBottom",
    );
    const colorMidUniformLocation = gl.getUniformLocation(
      glProgram,
      "u_colorMid",
    );
    const colorTopUniformLocation = gl.getUniformLocation(
      glProgram,
      "u_colorTop",
    );
    const speedUniformLocation = gl.getUniformLocation(glProgram, "u_speed");

    if (
      !resolutionUniformLocation ||
      !timeUniformLocation ||
      !colorBottomUniformLocation ||
      !colorMidUniformLocation ||
      !colorTopUniformLocation ||
      !speedUniformLocation
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

      const colorBottom = hexToRgbNormalized(settings.colorBottom);
      const colorMid = hexToRgbNormalized(settings.colorMid);
      const colorTop = hexToRgbNormalized(settings.colorTop);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeUniformLocation, elapsedSec);
      gl.uniform3f(
        colorBottomUniformLocation,
        colorBottom[0],
        colorBottom[1],
        colorBottom[2],
      );
      gl.uniform3f(
        colorMidUniformLocation,
        colorMid[0],
        colorMid[1],
        colorMid[2],
      );
      gl.uniform3f(
        colorTopUniformLocation,
        colorTop[0],
        colorTop[1],
        colorTop[2],
      );
      gl.uniform1f(speedUniformLocation, settings.speed);

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
        "relative flex w-full items-center overflow-hidden bg-black",
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

export default Cloudscape;
`;
