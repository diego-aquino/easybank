import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateStoredWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateStoredWindowSize);
    updateStoredWindowSize();

    return () => window.removeEventListener('resize', updateStoredWindowSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
