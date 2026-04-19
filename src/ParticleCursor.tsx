import { useEffect, useRef } from 'react';

export default function DotGridCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const isOverBlock = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dots: { x: number; y: number; baseSize: number }[] = [];
    const spacing = 35; // Space between dots

    const initDots = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            baseSize: 1.5,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      const target = e.target as HTMLElement;
      isOverBlock.current = !!target.closest('.glass-panel');
    };

    const handleResize = () => {
      initDots();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    initDots();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot) => {
        const dx = mouse.current.x - dot.x;
        const dy = mouse.current.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let size = dot.baseSize;
        let opacity = 0.15;

        // Reactive effect if not over a content block
        if (!isOverBlock.current) {
          const maxDist = 120;
          if (dist < maxDist) {
            const factor = (1 - dist / maxDist);
            size = dot.baseSize + factor * 4;
            opacity = 0.15 + factor * 0.6;
          }
        }

        ctx.fillStyle = `rgba(166, 156, 144, ${opacity})`; // Using your Taupe color
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0, // Set to 0 to be behind blocks but above bg image
      }}
    />
  );
}
