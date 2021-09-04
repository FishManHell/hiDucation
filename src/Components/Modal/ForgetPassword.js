import React from 'react';
import {eye, key, passport, repeat} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import ErrorBlockModal from "./ErrorBlockModal";
import {Formik} from 'formik';
import {funcCheckYup} from "../../Utils/YupCheck";
import {useDispatch} from "react-redux";
import {changePassword} from "../../ReduxToolkit/ReducerUserAuth";
import {
    BlockForgetPasswordTextBackSignIn,
    BlockInput,
    BlockSignInSignUp,
    ButtonSend,
    ForgetPasswordSignInText,
    Input,
    LabelInput,
    MainBlockInput,
    MainBlockWithSubmitButtons,
    MessageChangePasswordBlock,
    TextChangeType,
    TextMessage
} from "../../StyledComponents/SrtyledModal";


const ForgetPassword = ({handleForgetPassword, handleBooleanForms, handleCloseModal}) => {
    const dispatch = useDispatch()
    const valueForgetPassword = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }

    const modalClose = (value) => {
        value.handleReset()
        handleCloseModal()
    }

    const handleShowPassword = () => {
        handleBooleanForms().setShowPassword(!handleBooleanForms().showPassword)
    }

    return (
        <BlockSignInSignUp>
            <MessageChangePasswordBlock>
                <TextMessage>
                    Lost your password? Please enter your email address. You will receive a link to create a new
                    password.
                </TextMessage>
            </MessageChangePasswordBlock>
            <MainBlockInput>
                <Formik
                    initialValues={valueForgetPassword}
                    validationSchema={funcCheckYup('forgetPassword')}
                    onSubmit={(values, {setSubmitting}) => {
                        //TODO запрос должен быть другой - параметры передал как для нового но запрос старый
                        dispatch(changePassword({oldPassword: values.oldPassword, newPassword: values.newPassword}))
                        setSubmitting(false)
                        console.log(`Forget-Password - oldPassword: ${values.oldPassword} newPassword: ${values.newPassword}`)
                    }}
                >
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <BlockInput>
                                <LabelInput htmlFor={'oldPassword'}>{passport}</LabelInput>
                                <Input
                                    type={'text'}
                                    id={'oldPassword'}
                                    placeholder={'Old passport'}
                                    {...formik.getFieldProps('oldPassword')}
                                />
                                <ErrorBlockModal
                                    valueOne={formik.touched.oldPassword}
                                    valueTwo={formik.errors.oldPassword}
                                    text={formik.errors.oldPassword}
                                    left={'0'}
                                    bottom={'-35px'}
                                />
                            </BlockInput>
                            <BlockInput>
                                <LabelInput htmlFor={'newPassword'}>{key}</LabelInput>
                                <Input
                                    type={handleBooleanForms().showPassword ? 'password' : 'text'}
                                    placeholder={'New password'}
                                    id={'newPassword'}
                                    {...formik.getFieldProps('newPassword')}
                                />
                                <TextChangeType
                                    onClick={() => handleShowPassword()}>
                                    {handleBooleanForms().showPassword ? eye_slash : eye}
                                </TextChangeType>
                                <ErrorBlockModal
                                    valueOne={formik.touched.newPassword}
                                    valueTwo={formik.errors.newPassword}
                                    text={formik.errors.newPassword} left={'0'} bottom={'-35px'}
                                />
                            </BlockInput>
                            <BlockInput>
                                <LabelInput htmlFor={'confirmPassword'}>{repeat}</LabelInput>
                                <Input
                                    type={handleBooleanForms().showPassword ? 'password' : 'text'}
                                    placeholder={'Repeat Password'}
                                    id={'confirmPassword'}
                                    {...formik.getFieldProps('confirmPassword')}
                                />
                                <ErrorBlockModal
                                    valueOne={formik.touched.confirmPassword}
                                    valueTwo={formik.errors.confirmPassword}
                                    text={formik.errors.confirmPassword} left={'0'} bottom={'-35px'}
                                />
                            </BlockInput>
                            <MainBlockWithSubmitButtons>
                                <ButtonSend onClick={() => modalClose(formik)} type={'reset'}>Close</ButtonSend>

                                <ButtonSend
                                    type={'submit'}
                                    disabled={!formik.values.confirmPassword || !formik.isValid}>
                                    Change Password
                                </ButtonSend>
                            </MainBlockWithSubmitButtons>

                        </form>
                    )}
                </Formik>
            </MainBlockInput>
            <BlockForgetPasswordTextBackSignIn>
                <ForgetPasswordSignInText onClick={() => handleForgetPassword(false)}>
                    Back to Log-in
                </ForgetPasswordSignInText>
            </BlockForgetPasswordTextBackSignIn>
        </BlockSignInSignUp>
    );
};

export default ForgetPassword;