import { useEffect, useState } from "react";
import excerpts from "./excerpts.model";
export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const getExcerpt = () => {
  return excerpts[Math.floor(Math.random() * excerpts.length)];
};
