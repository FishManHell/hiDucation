import * as Yup from "yup";

const regEmail = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const regPassword = /^([A-Z]{1})[a-zA-Z0-9]{8,19}$/;

export const yupHandle = () => {
    return Yup.object({
        email: Yup.string()
            .trim()
            .matches(regEmail, "Invalid email address")
            .required('Required')
        ,
        password: Yup.string()
            .required('No password provided.')
            .min(3, 'Password is too short - should be 3 chars minimum.')
            .matches(/[a-zA-Z0-9]/, "Password can only number and latter's")
        ,
    })
}