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
    MainBlockInput, TextChangeType,
    TextOr
} from "../../StyledComponents/SrtyledModal";

const SignIn = ({handleForgetPassword, handleBooleanForms}) => {
    const dispatch = useDispatch()

    const handleShowPassword = () => {
        handleBooleanForms().setShowPassword(!handleBooleanForms().showPassword)
    }

    const handleRequest = (values) => {
        dispatch(postLogin({...values}))
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

                        <ButtonSend
                            disabled={!formik.values.email || !formik.values.password || !formik.isValid}
                            type="submit">
                            Login
                        </ButtonSend>
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

// <MainBlockInput>
//     <BlockInput>
//         <LabelInput>{envelope}</LabelInput>
//         <Input
//             name={'email'}
//             type={'email'}
//             value={handleUseValue().email.value}
//             placeholder={'E-mail'}
//             onChange={e => handleUseValue().email.onChange(e)}
//             onBlur={e => handleUseValue().email.onBlur(e)}
//         />
//         <ErrorBlockModal
//             valueOne={handleUseValue().email.isDirty}
//             valueTwo={handleUseValue().email.isEmpty}
//             text={'Field is empty'} left={'0'} bottom={'-35px'}
//         />
//         <ErrorBlockModal
//             valueOne={handleUseValue().email.isDirty}
//             valueTwo={handleUseValue().email.emailError}
//             right={'0'} bottom={'-35px'}
//             text={'Wrong email'}
//         />
//     </BlockInput>
//     <BlockInput>
//         <LabelInput>{key}</LabelInput>
//         <Input
//             name={'password'}
//             type={handleBooleanForms().showPassword ? 'password' : 'text'}
//             placeholder={'Password'}
//             value={handleUseValue().password.value}
//             onChange={e => handleUseValue().password.onChange(e)}
//             onBlur={e => handleUseValue().password.onBlur(e)}
//         />
//         <TextChangeType
//             onClick={() => handleShowPassword()}>{handleBooleanForms().showPassword ? eye_slash : eye}</TextChangeType>
//         <ErrorBlockModal
//             valueOne={handleUseValue().password.isDirty}
//             valueTwo={handleUseValue().password.isEmpty}
//             text={'Field is empty'} left={'0'} bottom={'-35px'}
//         />
//         <ErrorBlockModal
//             valueOne={handleUseValue().password.isDirty}
//             valueTwo={handleUseValue().password.passwordError}
//             right={'0'} bottom={'-35px'}
//             text={'Wrong Password'}
//         />
//     </BlockInput>
// </MainBlockInput>