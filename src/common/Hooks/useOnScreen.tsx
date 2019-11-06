import { useState, useEffect } from 'react';

/**
 * This hook is used to check if passed ref is visible on the screen.
 * This is useful if you for example want to know when your element is scrolled into view.
 * The hook will return true or false depending on if the ref is visible on the screen or not.
 */
const useOnScreen = (ref: React.RefObject<any>, rootMargin: string = '0px') => {
  const [isIntersecting, setIntersecting] = useState<boolean | null>(null);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      return () => null;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
