import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(storageKey);
        try {
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch {
            console.warn(`Error parsing localStorage value for key "${storageKey}". Falling back to default value.`);
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export default useLocalStorage;
