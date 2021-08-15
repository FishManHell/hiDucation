import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {getUserInform, postLogin} from "../../ReduxToolkit/ReducerUserAuth";
import {Button} from "@material-ui/core";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";

const TestSignInFormik = () => {
    const dispatch = useDispatch()

    const yupHandle = () => {
       return  Yup.object({
            email: Yup.string()
                // .email('Invalid email address')
                .required('Required')
                .trim()
                .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, "Invalid email address")
            ,
            password: Yup.string()
                .required('Required')
                // .trim()
                .min(3, 'Password is too short - should be 3 chars minimum.')
                .matches(/[a-zA-Z0-9]/, "Password can only number and latter's")
            ,
        })
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={yupHandle}
            onSubmit={(values, {setSubmitting}) => {
                dispatch(postLogin({...values}))
                dispatch(getUserInform({...values}))
                dispatch(getUserProfile(values.email))
                setSubmitting(false)
                console.log(values.email)
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <input type="email" id={'email'} {...formik.getFieldProps('email')}/>
                    <label htmlFor={'email'}>Email</label>
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <input type="password" id={'password'} {...formik.getFieldProps('password')}/>
                    <label htmlFor={'password'}>Password</label>
                    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <Button
                        color="primary"
                        disabled={formik.isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default TestSignInFormik;