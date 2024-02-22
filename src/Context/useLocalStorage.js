import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem, loading, error };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALALALA", completed: false },
  { text: "Usar estados derivados", completed: true },
];

localStorage.setItem('ToDos_V1', JSON.stringify(defaultTodos)) */
/* localStorage.removeItem('ToDos_V1') */
