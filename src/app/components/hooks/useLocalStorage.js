import { useState } from 'react'

// Hook
function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key); // eslint-disable-line no-undef
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue           
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore)); // eslint-disable-line no-undef
        } catch (error) {
            // A more advanced implementation would handle the error case            
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;