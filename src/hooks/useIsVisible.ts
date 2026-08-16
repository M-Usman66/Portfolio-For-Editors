"use client";

import { RefObject, useEffect, useState } from "react";

export function useIsVisible<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit = { threshold: 0.3 }
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return isVisible;
}
