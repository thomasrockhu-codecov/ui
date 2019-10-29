import { useState, useEffect } from 'react';

const useOnScreen = (ref: React.RefObject<any>, rootMargin: string = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.log('running useOnScreen');
      return () => null;
    }

    console.log('running useOnScreen');

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
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
  }, [ref, rootMargin]); // Empty array ensures that effect gis only run on mount and unmount

  return isIntersecting;
};

export default useOnScreen;
