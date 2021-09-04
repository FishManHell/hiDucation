import React from 'react';
import {apple, envelope, eye, facebook, google, key} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import ErrorBlockModal from "./ErrorBlockModal";
import {Formik} from 'formik';
import {getUserInform, postLogin} from "../../ReduxToolkit/ReducerUserAuth";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch} from "react-redux";
import {funcCheckYup} from "../../Utils/YupCheck";
import {
    BlockConnectLink,
    BlockForgetPasswordTextBackSignIn, BlockInput,
    BlockSignInSignUp,
    ButtonConnectLink, ButtonSend, ForgetPasswordSignInText, Input, LabelInput,
    MainBlockInput, MainBlockWithSubmitButtons, TextChangeType,
    TextOr
} from "../../StyledComponents/SrtyledModal";

const SignIn = ({handleForgetPassword, handleBooleanForms, handleCloseModal}) => {
    const dispatch = useDispatch()

    const handleShowPassword = () => {
        handleBooleanForms().setShowPassword(!handleBooleanForms().showPassword)
    }

    const modalClose = (value) => {
        value.handleReset()
        handleCloseModal()
    }

    const handleRequest = (values) => {
        fetch('https://telran-hiducation.herokuapp.com/user/login', {
            method: 'POST',
            // headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({...values})
        })
            .then(response => {
                console.log(response.headers, response.headers.get('Authorization'), response.headers.get('Token'), response.headers.get('Content-Type'))
                for (let [key, value] of response.headers) {
                    console.log(`${key} = ${value}`);
                }
            })
            .catch(e => console.log(e.message))
        // dispatch(postLogin({...values}))
        dispatch(getUserInform({...values}))
        dispatch(getUserProfile(values.email))
    }

    return (
        <BlockSignInSignUp width={'100%'}>
            <BlockConnectLink>
                <ButtonConnectLink>{google}</ButtonConnectLink>
                <ButtonConnectLink>{facebook}</ButtonConnectLink>
                <ButtonConnectLink>{apple}</ButtonConnectLink>
            </BlockConnectLink>
            <TextOr>Or</TextOr>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={funcCheckYup('login')}
                onSubmit={(values, {setSubmitting}) => {
                    handleRequest(values)
                    setSubmitting(false)
                    console.log(`Login - ${values.email}`)
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <MainBlockInput>
                            <BlockInput>
                                <LabelInput htmlFor={'email'}>{envelope}</LabelInput>
                                <Input id={'email'} type={'email'}
                                       placeholder={'test@gmail.com'}{...formik.getFieldProps('email')}/>
                                <ErrorBlockModal valueOne={formik.touched.email} valueTwo={formik.errors.email}
                                                 text={formik.errors.email} left={'0'} bottom={'-35px'}
                                />
                            </BlockInput>
                            <BlockInput>
                                <LabelInput>{key}</LabelInput>
                                <Input id={'password'} {...formik.getFieldProps('password')}
                                       type={handleBooleanForms().showPassword ? 'password' : 'text'}
                                       placeholder={'Password'}
                                />
                                <TextChangeType onClick={() => handleShowPassword()}>
                                    {handleBooleanForms().showPassword ? eye_slash : eye}
                                </TextChangeType>
                                <ErrorBlockModal valueOne={formik.touched.password} valueTwo={formik.errors.password}
                                                 text={formik.errors.password} left={'0'} bottom={'-35px'}
                                />
                            </BlockInput>
                        </MainBlockInput>
                        <MainBlockWithSubmitButtons>
                            <ButtonSend onClick={() => modalClose(formik)} type={'reset'}>Close</ButtonSend>

                            <ButtonSend
                                disabled={!formik.values.email || !formik.values.password || !formik.isValid}
                                type="submit">
                                Login
                            </ButtonSend>
                        </MainBlockWithSubmitButtons>
                    </form>
                )}
            </Formik>
            <BlockForgetPasswordTextBackSignIn>
                <ForgetPasswordSignInText onClick={() => handleForgetPassword(true)}>
                    Forgot your password ?
                </ForgetPasswordSignInText>
            </BlockForgetPasswordTextBackSignIn>
        </BlockSignInSignUp>
    );
};

export default SignIn;