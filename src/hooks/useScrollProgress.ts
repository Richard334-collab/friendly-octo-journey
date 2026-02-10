import { useEffect, useState } from 'react';

export const useScrollProgress = (containerId: string) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(containerId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollStart = -rect.top;
      const scrollEnd = elementHeight - viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  return progress;
};
