import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal – Animates children into view using IntersectionObserver.
 * No external dependencies; relies purely on Tailwind transition utilities.
 *
 * @param {React.ReactNode} children  - Content to reveal
 * @param {string}          className - Extra Tailwind classes forwarded to the wrapper div
 * @param {number}          delay     - Transition delay in milliseconds (stagger effect)
 */
export function ScrollReveal({ children, className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      {
        threshold: 0.15,           // trigger when 15 % of element is visible
        rootMargin: '0px 0px -50px 0px', // fire slightly before fully on-screen
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  );
}
