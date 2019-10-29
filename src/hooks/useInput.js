import { useState, useCallback } from "react";

//const functionsCounter = new Set() // eslint-disable-line no-undef
//functionsCounter.add(handleOnChange)

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleOnChange = useCallback(event => {
        setValue(event.target.value);
    }, [setValue])

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: handleOnChange
        }
    };
};

export default useInput;