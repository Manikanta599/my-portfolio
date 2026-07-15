import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowDown } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__particles" />
      <div className="hero__bg-glow" />

      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__greeting animate-in">
            <span className="hero__wave">👋</span> Hello, I'm
          </p>
          <h1 className="hero__name animate-in animate-delay-1">
            Manikanta<br />
            <span className="hero__name-accent">Mutyala</span>
          </h1>
          <h2 className="hero__title animate-in animate-delay-2">
            Software Development Engineer
          </h2>
          <p className="hero__description animate-in animate-delay-3">
            Building scalable backend systems, distributed applications & microservices.
            Passionate about performance optimization, event-driven architectures, and
            creating reliable software that powers real-world manufacturing operations.
          </p>

          <div className="hero__actions animate-in animate-delay-4">
            <a href="#contact" className="hero__cta hero__cta--primary">
              Get In Touch
            </a>
            <a href="#projects" className="hero__cta hero__cta--secondary">
              View Projects
            </a>
          </div>

          <div className="hero__socials animate-in animate-delay-4">
            <a href="https://github.com/Manikanta599" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/manikantamutyala/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.hackerrank.com/profile/manikantamutyal1" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="HackerRank">
              <SiHackerrank />
            </a>
            <a href="mailto:manikantamutyala854@gmail.com" className="hero__social-link" aria-label="Email">
              <FiMail />
            </a>
            <a href="tel:+917893955734" className="hero__social-link" aria-label="Phone">
              <FiPhone />
            </a>
          </div>
        </div>

        <div className="hero__visual animate-in animate-delay-2">
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">developer.ts</span>
            </div>
            <pre className="hero__code-content">
              <code>
                {`interface Developer {
  name: string;
  role: string;
  skills: string[];
  passion: string;
}

const manikanta: Developer = {
  name: "Manikanta Mutyala",
  role: "Software Engineer",
  skills: [
    "NestJS", "TypeScript",
    "React", "MySQL", "Redis",
    "Microservices", "Docker"
  ],
  passion: "Building systems
    that scale"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to about">
        <span>Scroll Down</span>
        <FiArrowDown className="hero__scroll-arrow" />
      </a>
    </section>
  );
}
