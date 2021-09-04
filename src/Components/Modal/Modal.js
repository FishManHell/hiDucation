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
import {changePassword, regUser} from "../../ReduxToolkit/ReducerUserAuth";
import SignIn from "./SignIn";
import {funcCheckYup} from "../../Utils/YupCheck";

const Modal = ({handleBooleanForms}) => {
    const dispatch = useDispatch()

    const handleForgetPassword = (change) => {
        handleBooleanForms().setForgetPassword(change)
        handleBooleanForms().setShowPassword(true);
    }

    const handleCloseModal = () => {
        handleBooleanForms().setOpenModal(false)
        handleBooleanForms().setForgetPassword(false);
        handleBooleanForms().setShowPassword(true);
        handleBooleanForms().setForm(true);
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    const handleChangeFormSignInSignUp = (formik, forget) => {
        handleBooleanForms().setForm(formik)
        handleBooleanForms().setForgetPassword(forget)
        handleBooleanForms().setShowPassword(true);
    }

    const requestReg = (value) => {
        const regObj = {email: value.email, password: value.password}
        dispatch(regUser({...regObj}))
    }

    const requestForgetPass = (email, password) => dispatch(changePassword({email, password}))
    // TODO приепить позже это к форме forget

    const changeSignInSignUp = () => {
        if (handleBooleanForms().form) {
            return (
                <SignIn
                    handleBooleanForms={handleBooleanForms}
                    handleForgetPassword={handleForgetPassword}
                    handleCloseModal={handleCloseModal}
                />
            )
        } else {
            return (
                <SignUp
                    width={'100%'}
                    handleBooleanForms={handleBooleanForms}
                    funcCheckYup={funcCheckYup('reg')}
                    requestSend={requestReg}
                    handleCloseModal={handleCloseModal}
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
                            handleBooleanForms={handleBooleanForms}
                            handleForgetPassword={handleForgetPassword}
                            handleCloseModal={handleCloseModal}
                        />
                        :
                        changeSignInSignUp()
                }
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default Modal;