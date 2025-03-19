import { useCallback, useRef } from "react";

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 500
) {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
