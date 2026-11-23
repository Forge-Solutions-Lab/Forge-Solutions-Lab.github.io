import { useEffect, useRef } from 'react';

/**
 * Custom hook to observe child elements with the `.reveal` class within a container
 * and trigger CSS transitions by attaching `.is-visible` upon entering viewport.
 *
 * @template T - The HTML element type of the container ref (defaults to HTMLDivElement)
 * @returns A ref object to attach to the container element containing `.reveal` items
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const children = element.querySelectorAll('.reveal');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
