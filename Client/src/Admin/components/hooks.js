import { useEffect, useState } from "react";

export const useStateWithLocalStorage = (
  localStorageKey,
  localStorageValue
) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey)
      ? localStorage.getItem(localStorageKey)
      : localStorageValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};
