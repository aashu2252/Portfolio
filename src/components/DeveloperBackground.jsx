import { useEffect, useRef, useState } from 'react';

export default function DeveloperBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with interpolation
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      radius: 180,
    };

    // Canvas grid and node configuration
    const gridSize = 45;
    const nodes = [];
    const nodeCount = Math.min(75, Math.floor((width * height) / 18000));

    class Node {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 20;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 0.45 + 0.15); // gentle upward movement
        this.opacity = Math.random() * 0.6 + 0.2;
        
        // Theme hues: Cyan (185), Indigo (230), Purple (275)
        const hues = [185, 230, 275];
        this.hue = hues[Math.floor(Math.random() * hues.length)];
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.y < -20) this.reset();
        if (this.x < -20 || this.x > width + 20) {
          this.speedX = -this.speedX;
        }

        // Soft repulsion on cursor proximity
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 3;
          this.y += (dy / dist) * force * 3;
        }

        // Subtle pulsation
        this.currentSize = this.size + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.6;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.5, this.currentSize), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 75%, ${this.opacity})`;
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = `hsl(${this.hue}, 100%, 70%)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Spawn nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Data packets traveling between connected nodes
    const dataPackets = [];
    for (let i = 0; i < 8; i++) {
      dataPackets.push({
        nodeA: Math.floor(Math.random() * nodeCount),
        nodeB: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: Math.random() * 0.01 + 0.005,
      });
    }

    let time = 0;

    // Draw background grid lines and interactive crosshair coordinates
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
      ctx.lineWidth = 0.5;

      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.03;

      for (let x = (offsetX % gridSize); x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = (offsetY % gridSize); y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw crosshairs near cursor position
      const crossRadius = 250;
      const startX = Math.floor((mouse.x - crossRadius) / gridSize) * gridSize;
      const endX = Math.ceil((mouse.x + crossRadius) / gridSize) * gridSize;
      const startY = Math.floor((mouse.y - crossRadius) / gridSize) * gridSize;
      const endY = Math.ceil((mouse.y + crossRadius) / gridSize) * gridSize;

      for (let x = startX; x <= endX; x += gridSize) {
        for (let y = startY; y <= endY; y += gridSize) {
          const d = Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2);
          if (d < crossRadius && x > 0 && x < width && y > 0 && y < height) {
            const alpha = (1 - d / crossRadius) * 0.25;
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.8;
            
            // Draw small "+" marker
            ctx.beginPath();
            ctx.moveTo(x - 3, y);
            ctx.lineTo(x + 3, y);
            ctx.moveTo(x, y - 3);
            ctx.lineTo(x, y + 3);
            ctx.stroke();
          }
        }
      }
    };

    // Draw connecting lines and traveling data packets
    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const opacity = ((130 - dist) / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `hsla(${nodes[i].hue}, 100%, 70%, ${opacity})`);
            grad.addColorStop(1, `hsla(${nodes[j].hue}, 100%, 70%, ${opacity})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Render traveling data packets
      dataPackets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress > 1) {
          packet.progress = 0;
          packet.nodeA = Math.floor(Math.random() * nodes.length);
          packet.nodeB = Math.floor(Math.random() * nodes.length);
        }

        const nodeA = nodes[packet.nodeA];
        const nodeB = nodes[packet.nodeB];
        if (nodeA && nodeB) {
          const dist = Math.sqrt((nodeA.x - nodeB.x) ** 2 + (nodeA.y - nodeB.y) ** 2);
          if (dist < 180) {
            const px = nodeA.x + (nodeB.x - nodeA.x) * packet.progress;
            const py = nodeA.y + (nodeB.y - nodeA.y) * packet.progress;

            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#00f2fe';
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00f2fe';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });
    };

    // Animation loop
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      drawGrid();

      nodes.forEach((node) => {
        node.update(time);
        node.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Interactive canvas grid */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 bg-transparent"
      />

      {/* Cursor spotlight flare */}
      <div
        className="fixed pointer-events-none z-[1] transition-transform duration-75 ease-out rounded-full blur-[140px] opacity-25"
        style={{
          width: '550px',
          height: '550px',
          left: mousePos.x - 275,
          top: mousePos.y - 275,
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(127, 0, 255, 0.15) 45%, transparent 70%)',
        }}
      />

      {/* Grid overlay & ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
      
      {/* Corner ambient glow */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-nebula-cyan/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[30rem] h-[30rem] bg-nebula-purple/8 rounded-full blur-[150px] pointer-events-none z-0" />
    </>
  );
}
