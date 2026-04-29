import { useEffect, useRef } from "react";

type Sparkle = { x: number; y: number; life: number; vx: number; vy: number; size: number; hue: number };

export function SparkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const sparkles: Sparkle[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      for (let k = 0; k < 2; k++) {
        sparkles.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          size: 1.5 + Math.random() * 2.5,
          hue: Math.random() > 0.5 ? 330 : 50,
        });
      }
      if (sparkles.length > 120) sparkles.splice(0, sparkles.length - 120);
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.02;
        if (s.life <= 0) {
          sparkles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = s.life;
        ctx.fillStyle = `hsl(${s.hue}, 90%, 70%)`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsl(${s.hue}, 90%, 70%)`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      aria-hidden
    />
  );
}
