import { useState } from "react";

function usePersistState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const returnVal = sessionStorage.getItem(key);
    if (returnVal) {
      return JSON.parse(returnVal);
    } else {
      sessionStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  return [
    value,
    (newValue) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
  ];
}

export default usePersistState;
