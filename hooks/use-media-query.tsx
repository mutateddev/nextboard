import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [query]);

  // prevent ssr mismatch
  if (!mounted) return false;

  return matches;
}
