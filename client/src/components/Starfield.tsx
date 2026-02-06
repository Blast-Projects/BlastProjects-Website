import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Star {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
  baseAlpha: number;
}

function generateStars(count: number, w: number, h: number): Star[] {
  const stars: Star[] = [];
  const cols = Math.ceil(Math.sqrt(count * (w / h)));
  const rows = Math.ceil(count / cols);
  const cellW = w / cols;
  const cellH = h / rows;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (stars.length >= count) break;
      stars.push({
        x: col * cellW + Math.random() * cellW,
        y: row * cellH + Math.random() * cellH,
        size: Math.random() < 0.85 ? 0.4 + Math.random() * 0.6 : 1 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 1.2,
        baseAlpha: 0.2 + Math.random() * 0.6,
      });
    }
  }
  return stars;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = generateStars(160, window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark = resolvedTheme === "dark";

      for (const star of starsRef.current) {
        const twinkle = Math.sin(time * 0.001 * star.speed + star.phase);
        const alpha = star.baseAlpha * (0.3 + 0.7 * ((twinkle + 1) / 2));

        if (isDark) {
          const purpleTint = star.size > 1;
          if (purpleTint) {
            ctx.fillStyle = `rgba(200, 170, 255, ${alpha * 0.6})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.55})`;
          }
        } else {
          const purpleTint = star.size > 0.8;
          if (purpleTint) {
            ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.55})`;
          } else {
            ctx.fillStyle = `rgba(100, 70, 160, ${alpha * 0.4})`;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (isDark && star.size > 1 && alpha > 0.6) {
          ctx.save();
          const glowAlpha = (alpha - 0.6) * 1.5;
          ctx.fillStyle = `rgba(200, 170, 255, ${glowAlpha * 0.08})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        if (!isDark && star.size > 0.8 && alpha > 0.5) {
          ctx.save();
          const glowAlpha = (alpha - 0.5) * 1.2;
          ctx.fillStyle = `rgba(139, 92, 246, ${glowAlpha * 0.06})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      data-testid="starfield-canvas"
    />
  );
}
