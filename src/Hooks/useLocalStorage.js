import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue, localStorageName) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageName)) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(state));
  }, [state, localStorageName]);
  return [state, setState];
}
