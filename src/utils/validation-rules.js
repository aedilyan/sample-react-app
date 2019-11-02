const validationRules = {
    common: {
        message: {
            empty: 'Field is required',
            invalid: 'Value is invalid'
        }
    },
    username: {
        pattern: /^[a-z0-9_-]{3,16}$/, //Alphanumeric string that may include _ and – having a length of 3 to 16 characters.
        required: false,
        message: {
            empty: 'Username is required',
            invalid: 'Username is invalid'
        }
    },
    password: {
        pattern: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        required: true
    },
    email: {
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        required: true
    }
}

export default function (fieldName, value) {
    let message = null, valid = true, required = false;
    if (validationRules[fieldName]) {
        let defaultConstraints = validationRules.common;
        let constraints = validationRules[fieldName];

        valid = constraints.pattern.test(value);
        required = constraints.required;
        if (value) {
            message = (constraints.message && constraints.message.invalid) || defaultConstraints.message.invalid;
        } else {
            message = (constraints.message && constraints.message.empty) || defaultConstraints.message.empty;
        }
    }

    return {
        message: message,
        valid: valid,
        required: required
    }
}