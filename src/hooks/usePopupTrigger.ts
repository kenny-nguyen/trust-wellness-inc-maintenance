import { useEffect, useState } from 'react';

export function usePopupTrigger(delay: number = 10000, scrollThreshold: number = 40) {
  const [shouldShow, setShouldShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setShouldShow(true);
        setHasShown(true);
      }
    }, delay);

    const handleScroll = () => {
      if (hasShown) return;

      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent >= scrollThreshold) {
        setShouldShow(true);
        setHasShown(true);
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay, scrollThreshold, hasShown]);

  return { shouldShow, setShouldShow };
}
