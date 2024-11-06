import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeid = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(timeid);
    }, [value]);

    return debounceValue;
};

export default useDebounce;
