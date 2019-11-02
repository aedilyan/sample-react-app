import { useState, useCallback } from "react";
import validate from '../utils/validation-rules';

//const functionsCounter = new Set() // eslint-disable-line no-undef
//functionsCounter.add(handleOnChange)

const useInput = (initialValue, fieldName) => {
    const [value, setValue] = useState(initialValue);
    const [warning, setWarning] = useState(null);

    const handleOnChange = useCallback(event => {
        setWarning(validate(fieldName, event.target.value));
        setValue(event.target.value);
    }, [setValue, setWarning, fieldName])

    const reset = useCallback(() => {
        setWarning(validate(fieldName, ""));
        setValue("")
    }, [setValue, setWarning, fieldName])

    return {
        value,
        setValue,
        reset,
        bind: {
            value,
            onChange: handleOnChange,
            warning: warning
        }
    };
};

export default useInput;