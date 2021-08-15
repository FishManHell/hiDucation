import React from 'react';
import {times} from "../../Utils/Font Awesome/Solid";
import {
    BlockCloseModal,
    BlockFormRegLog,
    CloseModal,
    SignInSignUp,
    Switcher,
    WrapperModal
} from "../../StyledComponents/SrtyledModal";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import {useDispatch} from "react-redux";
import {changePassword, getUserInform, postLogin, regUser} from "../../ReduxToolkit/ReducerUserAuth";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import SignIn from "./SignIn";

const Modal = ({clearState, handleBooleanForms, handleShowPassword}) => {
    const dispatch = useDispatch()

    const handleForgetPassword = (change) => {
        handleBooleanForms().setForgetPassword(change)
        handleBooleanForms().setShowPassword(true);
        clearState()
    }

    const handleCloseModal = () => {
        handleBooleanForms().setOpenModal(false)
        handleBooleanForms().setForgetPassword(false);
        handleBooleanForms().setShowPassword(true);
        handleBooleanForms().setForm(true);
        clearState()
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    const handleChangeFormSignInSignUp = (formik, forget) => {
        handleBooleanForms().setForm(formik)
        handleBooleanForms().setForgetPassword(forget)
        handleBooleanForms().setShowPassword(true);
        clearState()
    }

    const handleCloseClearAll = () => {
        clearState()
        handleCloseModal()
    }

    const requestLogin = (email, password) => {
        dispatch(postLogin({email, password}))
        dispatch(getUserInform({email, password}))
        dispatch(getUserProfile(email))
    }

    const requestReg = (email, password) => dispatch(regUser({email, password}))

    const requestForgetPass = (email, password) => dispatch(changePassword({email, password}))


    const changeSignInSignUp = () => {
        if (handleBooleanForms().form) {
            return (
                <SignIn
                    handleShowPassword={handleShowPassword}
                    handleBooleanForms={handleBooleanForms}
                    handleForgetPassword={handleForgetPassword}
                />
            )
        } else {
            return (
                <SignUp
                    width={'100%'}
                    handleShowPassword={handleShowPassword}
                    handleBooleanForms={handleBooleanForms}
                />
            )
        }
    }

    return (
        <WrapperModal
            openModal={handleBooleanForms().openModal}
            closeModal={!handleBooleanForms().openModal}
            className={!handleBooleanForms().openModal ? 'openModal' : 'closeModal'}
        >
            <BlockFormRegLog
                width={'600px'}
                active={handleBooleanForms().form}
                not_active={!handleBooleanForms().form}
                className={handleBooleanForms().form ? 'active' : 'not_active'}>
                <Switcher>
                    <SignInSignUp
                        active={handleBooleanForms().form}
                        not_active={!handleBooleanForms().form}
                        className={handleBooleanForms().form ? 'active' : 'not_active'}
                        onClick={() => handleChangeFormSignInSignUp(true, false)}>
                        {!handleBooleanForms().forgetPassword ? 'SignIn' : 'Change password'}
                    </SignInSignUp>
                    <SignInSignUp
                        active={!handleBooleanForms().form}
                        not_active={handleBooleanForms().form}
                        className={!handleBooleanForms().form ? 'active' : 'not_active'}
                        onClick={() => handleChangeFormSignInSignUp(false, false)}>SignUp</SignInSignUp>
                </Switcher>
                <BlockCloseModal>
                    <CloseModal onClick={() => handleCloseModal()}>{times}</CloseModal>
                </BlockCloseModal>
                {
                    handleBooleanForms().forgetPassword
                        ?
                        <ForgetPassword
                            handleShowPassword={handleShowPassword}
                            handleBooleanForms={handleBooleanForms}
                            handleForgetPassword={handleForgetPassword}
                        />
                        :
                        changeSignInSignUp()
                }
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default Modal;