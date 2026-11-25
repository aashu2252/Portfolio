import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="spotlight hidden md:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
