import React from 'react';

type Callback<T> = (trap: T) => void;

export function useOnLoad<T>(onLoad: Callback<T>, onUnload?: Callback<T>) {
  const trap = React.useRef<T>(null);
  const isLoaded = React.useRef(false);

  React.useEffect(() => {
    if (!trap.current || isLoaded.current) return;

    isLoaded.current = true;
    onLoad(trap.current);

    return () => {
      onUnload?.(trap.current as T);
    };
  }, [trap]);

  return trap;
}
