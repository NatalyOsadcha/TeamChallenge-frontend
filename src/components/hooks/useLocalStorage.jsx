import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(getValueState);

  function getValueState() {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : initialValue;
  }

  useEffect(() => {
     if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    };
  }, [key, value]);
  return [value, setValue];
}
