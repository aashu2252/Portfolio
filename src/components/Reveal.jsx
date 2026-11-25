import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wrapper component for scroll-triggered reveal animations.
 */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
