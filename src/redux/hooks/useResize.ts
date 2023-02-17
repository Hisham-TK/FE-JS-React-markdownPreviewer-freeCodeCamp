import { useCallback, useEffect, useState } from 'react';

interface UseResizeProps {
  initialWidth: number;
}
interface UseResizeReturn {
  width: number;
  enableResize: () => void;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}
const useResize = ({ initialWidth }: UseResizeProps): UseResizeReturn => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(initialWidth);

  const enableResize = useCallback(() => {
    setIsResizing(true);
  }, [setIsResizing]);

  const disableResize = useCallback(() => {
    setIsResizing(false);
  }, [setIsResizing]);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = e.clientX; // You may want to add some offset here from props

        // if (newWidth >= minWidth: initialWidth ) {
        setWidth(newWidth);
        // }
      }
    },
    // [initialWidth, isResizing, setWidth]
    [isResizing, setWidth]
  );

  useEffect(() => {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', disableResize);

    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', disableResize);
    };
  }, [disableResize, resize]);

  return { width, enableResize, setWidth };
};

export default useResize;
