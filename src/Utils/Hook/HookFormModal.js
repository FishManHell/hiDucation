import {useEffect, useState} from "react";

const regEmail = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const regPassword = /^([A-Z]{1})[a-zA-Z0-9]{8,19}$/;
const regJustLettersNumbers = /^[a-zA-Z0-9]{3,20}$/;

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for(const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    regEmail.test((value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'isPassword':
                    regPassword.test((value)) ? setPasswordError(false) : setPasswordError(true)
                    break;
                case 'isName':
                    regJustLettersNumbers.test((value)) ? setNameError(false) : setNameError(true)
                    break;
                case 'isLastName':
                    regJustLettersNumbers.test((value)) ? setLastNameError(false) : setLastNameError(true)
                    break;
                default :
                    return - 1
            }
        }
    },[value])

    useEffect(() => {
        if (isEmpty || emailError || passwordError || nameError || lastNameError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, emailError, passwordError, nameError, lastNameError])

    return {
        isEmpty,
        emailError,
        passwordError,
        nameError,
        lastNameError,
        inputValid,
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => setValue(e.target.value);

    const onBlur = (e) => setDirty(true);

    const onClear = () => {
        if (value || value === '') {
            setValue('')
            setDirty(false)
        }
    }

    return {
        value,
        onChange,
        onBlur,
        onClear,
        isDirty,
        ...valid,
    }
}
