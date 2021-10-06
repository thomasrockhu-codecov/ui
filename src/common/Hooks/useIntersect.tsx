import { useEffect, useRef, useState } from 'react';

/**
 * This hook is used to check if a node is visible on the screen.
 * This is useful if you for example want to know when your element is scrolled into view.
 * The hook will return between 0 and 1 depending on how much of the referenced node that is visible on the screen.
 */

const defaultThreshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

function useIntersect<ElementType>(rootMargin: string = '0px') {
  const [ratio, updateRatio] = useState<number | null>(null);
  const [node, setNode] = useState<React.RefObject<ElementType> | null>(null);
  const observer: any = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => updateRatio(entry.intersectionRatio), {
      rootMargin,
      threshold: defaultThreshold,
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, rootMargin]);

  return [setNode, ratio] as [React.Ref<ElementType>, typeof ratio];
}

export default useIntersect;
