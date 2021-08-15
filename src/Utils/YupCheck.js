import * as Yup from "yup";

const regEmail = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const regPassword = /^([A-Z]{1})[a-zA-Z0-9]{8,19}$/;
const regJustLettersNumbers = /^[a-zA-Z0-9]{3,20}$/;

const loginObject = {
    email: Yup.string()
        .trim()
        .matches(regEmail, "Invalid email address")
        .required('Required')
    ,
    password: Yup.string()
        .required('No password provided.')
        .matches(regPassword, "Password must be at least 8 characters long, first letter is big")
}
const regObject = {
    firstName: Yup.string()
        .trim()
        .required('Required')
        .matches(regJustLettersNumbers, 'Just letters or number. Min 3 - Max 20')
    ,
    learning: Yup.string()
        .trim()
        .required('Required')
        .max(15, 'Must be 15 characters of less')
    ,
    study: Yup.string()
        .trim()
        .required('Required')
        .max(15, 'Must be 15 characters of less')
    ,
}
const fieldForProfile = {
    lastName: Yup.string()
        .trim()
        .required('Required')
        .matches(regJustLettersNumbers, 'Just letters or number. Min 3 - Max 20')
    ,
}
const checkPassword = {
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required('Password confirmation is required!')
    ,
}
const changePasswordObject = {
    oldPassword: Yup.string()
        .required('Field is empty')
        .matches(regPassword, "Password must be at least 8 characters long, first letter is big")
    ,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required('Password confirmation is required!')
    ,
}

export const funcCheckYup = (value) => {
    switch (value) {
        case 'login':
            console.log(value)
            return Yup.object({...loginObject})
        case 'reg':
            console.log(value)
            return Yup.object({...regObject, ...loginObject, ...checkPassword})
        case 'forgetPassword':
            console.log(value)
            return Yup.object({...changePasswordObject, newPassword: loginObject.password})
        case 'profile':
            console.log(value)
            return Yup.object({...regObject, ...fieldForProfile, ...loginObject, ...checkPassword})
        default:
            return console.log('Error - switch Yup')
    }
}