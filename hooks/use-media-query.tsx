import * as React from 'react';

export function useMediaQuery(query: string) {
  const getMatch = React.useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const [value, setValue] = React.useState(getMatch);

  React.useEffect(() => {
    const media = window.matchMedia(query);

    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    media.addEventListener('change', onChange);

    return () => {
      media.removeEventListener('change', onChange);
    };
  }, [query]);

  return value;
}
