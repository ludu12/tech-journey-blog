import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

// Be sure to memoize `fn`
export function useDebounce<T extends (...args: any[]) => any>(
    fn: T,
    delay = 300
): T {
  const [debouncedFunc] = useState(() =>
      debounce(async (...args: Parameters<T>) => {
        await fn(...args);
      }, delay)
  );

  useEffect(() => {
    return () => debouncedFunc.cancel();
  }, [debouncedFunc]);

  const callback = useCallback(
      async (...args: Parameters<T>) => {
        await debouncedFunc(...args);
      },
      [debouncedFunc]
  );

  return callback as T;
}
