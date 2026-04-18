export const title = "Cosmic Rift";
export const routepoint = "cosmicrift";

export const description =
  "A WebGL-powered animated cosmic background featuring a procedural starfield with twinkling effects and flowing nebula-like wave distortions, rendered in real time using shaders.";

export const cliscript = "add @forgeui/cosmicrift";

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

export const cosmicriftProps = [
  {
    prop: "height",
    type: "string",
    default: "100vh",
    description: "Sets the height of the canvas container.",
  },
  {
    prop: "density",
    type: "number",
    default: "1",
    description:
      "Controls how many stars are rendered. Higher = denser star field.",
  },
  {
    prop: "speed",
    type: "number",
    default: "1",
    description: "Controls the animation speed of the stars.",
  },
  {
    prop: "colorBackground",
    type: "string",
    default: "#020106",
    description: "Background color of the space canvas.",
  },
  {
    prop: "colorStars",
    type: "string",
    default: "#ffffff",
    description: "Color of the stars.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes for the container.",
  },
];
export const democode = `import CosmicRift from @/components/forgeui/cosmicrift;

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <CosmicRift
        height="70vh"
        density={1.2}
        speed={1}
        colorBackground="#020106"
        colorStars="#ffffff"
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
uniform vec3 u_colorBackground;
uniform vec3 u_colorStars;
uniform float u_density;
uniform float u_speed;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  
  vec2 p = uv;
  p.x *= aspect;

  float t = u_time * u_speed * 0.5;

  vec3 color = u_colorBackground;

  float gridSize = 35.0 * u_density; 
  vec2 gridPos = floor(p * gridSize);
  vec2 localUV = fract(p * gridSize) - 0.5;
  
  float r = hash(gridPos);
  float threshold = 0.85; // Low threshold = dense stars
  
  if (r > threshold) {
    vec2 offset = vec2(hash(gridPos + 12.0), hash(gridPos + 24.0)) - 0.5;
    float dist = length(localUV - offset * 0.7);
    
    float size = 0.025 + (r - threshold) * 0.6;
    float brightness = smoothstep(size, 0.0, dist);
    
    float twinkleSpeed = 1.0 + hash(gridPos + 100.0) * 3.0;
    float twinkle = sin(t * twinkleSpeed * 2.0 + hash(gridPos + 200.0) * 6.28) * 0.5 + 0.5;
    brightness *= (0.3 + twinkle * 0.7); 
    
    vec3 starCol = mix(u_colorStars, vec3(0.6, 0.8, 1.0), hash(gridPos + 300.0));
    
    color += starCol * brightness * (r - threshold) * 7.0;
  }

  vec2 cuv = uv * 2.0 - 1.0;
  cuv.x *= aspect;
  
  vec3 waveColor = vec3(0.0);
  
  for(float i = 1.0; i <= 4.0; i++) {
      float xDistort = sin(cuv.y * 2.0 * i + t * (0.5 + i * 0.15)) * 0.2;
      float yDistort = cos(cuv.x * 2.0 * i - t * 0.4) * 0.15;
      
      vec2 distortedUV = cuv + vec2(xDistort, yDistort);
      float dist = abs(distortedUV.y);
      
      float glow = 0.015 / (dist + 0.015);
      
      vec3 c1 = vec3(0.1, 0.02, 0.3); 
      vec3 c2 = vec3(0.0, 0.9, 1.0);  
      vec3 c3 = vec3(0.9, 0.1, 0.7); 
      
      vec3 layerCol = mix(c1, c2, sin(cuv.x * 2.5 + t + i) * 0.5 + 0.5);
      layerCol = mix(layerCol, c3, cos(cuv.y * 3.0 - t) * 0.5 + 0.5);
      
      waveColor += layerCol * glow * (1.5 / i);
  }
  
  float mask = smoothstep(1.0, 0.05, abs(cuv.y));
  
  color += waveColor * mask;

  float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y) * 15.0;
  color *= pow(vignette, 0.15);

  gl_FragColor = vec4(color, 1.0);
}
\`;

interface CosmicRiftProps extends React.HTMLAttributes<HTMLDivElement> {
  colorBackground?: string;
  colorStars?: string;
  density?: number;
  speed?: number;
  height?: string;
}

const DEFAULT_COLOR_DARK = "#020106";
const DEFAULT_COLOR_STARS = "#ffffff";

const COLOR_HEX_PATTERN = /^#?[0-9a-fA-F]{6}$/;

function normalizeHexColor(value: string, fallback: string) {
  const trimmed = value.trim();
  if (!COLOR_HEX_PATTERN.test(trimmed)) {
    return fallback;
  }
  return trimmed.startsWith("#") ? trimmed : \`#\${trimmed}\`;
}

function hexToRgbNormalized(hex: string): [number, number, number] {
  const normalized = normalizeHexColor(hex, DEFAULT_COLOR_DARK).replace(
    "#",
    "",
  );
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const CosmicRift = ({
  colorBackground = DEFAULT_COLOR_DARK,
  colorStars = DEFAULT_COLOR_STARS,
  density = 1.2,
  speed = 1,
  height = "100vh",
  className,
  style,
  ...props
}: CosmicRiftProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const settings = useMemo(
    () => ({
      colorBackground,
      colorStars,
      density,
      speed,
    }),
    [colorBackground, colorStars, density, speed],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
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
      bg: gl.getUniformLocation(program, "u_colorBackground"),
      stars: gl.getUniformLocation(program, "u_colorStars"),
      density: gl.getUniformLocation(program, "u_density"),
      speed: gl.getUniformLocation(program, "u_speed"),
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

    let frameId: number;
    const render = (time: number) => {
      const bgRGB = hexToRgbNormalized(settings.colorBackground);
      const starRGB = hexToRgbNormalized(settings.colorStars);

      gl.uniform2f(locs.res, canvas.width, canvas.height);
      gl.uniform1f(locs.time, time * 0.001);
      gl.uniform3f(locs.bg, bgRGB[0], bgRGB[1], bgRGB[2]);
      gl.uniform3f(locs.stars, starRGB[0], starRGB[1], starRGB[2]);
      gl.uniform1f(locs.density, settings.density);
      gl.uniform1f(locs.speed, settings.speed);

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
        "relative flex w-full items-center overflow-hidden bg-[#020106]",
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

export default CosmicRift;
`;
