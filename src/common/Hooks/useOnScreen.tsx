import { useState, useEffect } from 'react';

const useOnScreen = (ref: React.RefObject<any>, rootMargin: string = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      console.log('IntersectionObserver undefined');
      return () => null;
    }

    console.log('IntersectionObserver found');

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
