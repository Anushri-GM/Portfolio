import { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1; // Solid small dots
    this.speedX = (Math.random() - 0.5) * 5; // Much wider spacing (velocity)
    this.speedY = (Math.random() - 0.5) * 5; 
    this.maxLife = Math.random() * 25 + 15;
    this.life = this.maxLife;
    this.color = '#ffffff';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.size *= 0.98; // Slower shrink for more "solid" feel
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = (this.life / this.maxLife) * 0.7; // Higher opacity for "solid" look
    
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Don't spawn particles if inside a glass-panel block
      const target = e.target as HTMLElement;
      if (target.closest('.glass-panel')) return;

      // Significantly more particles for a dense trail
      for (let i = 0; i < 12; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.update();
        p.draw(ctx);
        
        if (p.life <= 0 || p.size <= 0.1) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
        zIndex: 9999,
      }}
    />
  );
}
