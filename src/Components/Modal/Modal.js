import React, {useState} from 'react';
import {times} from "../../Utils/Font Awesome/Solid";
import {CloseModal, WrapperModal} from "../../StyledComponents/SrtyledModal";
import styled, {css} from "styled-components";
import SignUp from "./SignUp";
import SignIn, {BlockInput, ButtonSend} from "./SignIn";
import ForgetPassword from "./ForgetPassword";
import {useDispatch} from "react-redux";
import {changePassword, getUserInform, postLogin, regUser} from "../../ReduxToolkit/ReducerUserAuth";
import {BASE_URL} from "../../Utils/Url";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";

export const BlockFormRegLog = styled.div`
  max-width: ${props => props.width};
  background: #ffffff;
  position: relative;
  width: 90%;
  border-radius: 0.50em;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;

  ${props => props.active && css`
    margin: 4% auto auto auto;
  `}

  ${props => props.not_active && css`
    margin: 2% auto auto auto;
  `}
`

export const Switcher = styled.div`
  width: 100%;
`

export const SignInSignUp = styled.button`
  width: 50%;
  border: none;
  background: #d2d8d8;
  height: 70px;
  
  &:first-child {
    border-top-left-radius: 0.50em;
  }
  
  &:last-child {
    border-top-right-radius: 0.50em;
  }
  
  ${props => props.active && css`
      background: #ffffff; 
  `}

  ${props => props.not_active && css`
      background: #d2d8d8; 
  `}
`

const MainBlockButtonSend = styled.div`
  padding: 0 2em 2em 2em;
`

export const BlockCloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 1em 0 0;
`

const Modal = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, email, password, userName, learning, study, repeatPassword, clearState}) => {
    const dispatch = useDispatch()
    const [forgetPassword, setForgetPassword] = useState(false);

    const handleForgetPassword = (change) => {
        setForgetPassword(change)
        setShowPassword(true);
        clearState()
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setForgetPassword(false);
        setShowPassword(true);
        setForm(true);
        clearState()
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    const handleChangeFormSignInSignUp = (formik, forget) => {
        setForm(formik)
        setForgetPassword(forget)
        setShowPassword(true);
        clearState()
    }

    const handleSendLogin = (email, password) => {
        dispatch(postLogin({email, password}))
        dispatch(getUserInform({email, password}))
        dispatch(getUserProfile(`${BASE_URL}/user/${email}`))
        clearState()
        handleCloseModal()
        console.log('LOGIN')
    }

    const handleSendReg = (email, password) => {
        dispatch(regUser({email, password}))
        clearState()
        handleCloseModal()
        console.log('REGISTRATION')
    }

    const handleSendChangePassword = (email, password) => {
        dispatch(changePassword({email, password}))
        clearState()
        handleCloseModal()
        console.log('CHANGE_PASSWORD')
    }

    return (
        <WrapperModal
            openModal={openModal}
            closeModal={!openModal}
            className={!openModal ? 'openModal' : 'closeModal'}>
            <BlockFormRegLog
                width={'600px'}
                active={form}
                not_active={!form}
                className={form ? 'active' : 'not_active'}>
                <Switcher>
                    <SignInSignUp
                        active={form}
                        not_active={!form}
                        className={form ? 'active' : 'not_active'}
                        onClick={() => handleChangeFormSignInSignUp(true, false)}>{!forgetPassword ? 'SignIn' : 'Change password'}</SignInSignUp>
                    <SignInSignUp
                        active={!form}
                        not_active={form}
                        className={!form ? 'active' : 'not_active'}
                        onClick={() => handleChangeFormSignInSignUp(false, false)}>SignUp</SignInSignUp>
                </Switcher>
                <BlockCloseModal>
                    <CloseModal onClick={() => handleCloseModal()}>{times}</CloseModal>
                </BlockCloseModal>
                {form
                    ?
                    !forgetPassword
                        ?
                        <SignIn
                            email={email}
                            password={password}
                            clearState={clearState}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            setForgetPassword={setForgetPassword}
                            handleForgetPassword={handleForgetPassword}
                        />
                        :
                        <ForgetPassword
                            email={email}
                            password={password}
                            setShowPassword={setShowPassword}
                            showPassword={showPassword}
                            handleForgetPassword={handleForgetPassword}
                        />
                    :
                    <SignUp
                        width={'100%'}
                        email={email}
                        password={password}
                        repeatPassword={repeatPassword}
                        userName={userName}
                        learning={learning}
                        study={study}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                }
                <MainBlockButtonSend>
                    <BlockInput>
                        <ButtonSend onClick={() => {
                            form
                                ?
                                !forgetPassword
                                ?
                                handleSendLogin(email.value, password.value)
                                    :
                                    handleSendChangePassword(email.value, password.value)
                                :
                                handleSendReg(email.value, password.value)
                        }}
                                    disabled={
                                        form
                                            ?
                                            !forgetPassword
                                                ?
                                                !email.inputValid || !password.inputValid
                                                :
                                                !password.inputValid
                                            :
                                            !email.inputValid || !password.inputValid || !userName.inputValid || !repeatPassword.inputValid
                                    }
                        >{form ? !forgetPassword ? 'Login' : 'Send' : 'Registration'}</ButtonSend>
                    </BlockInput>
                </MainBlockButtonSend>
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default Modal;

// TODO баг с повторением пароля - устранить