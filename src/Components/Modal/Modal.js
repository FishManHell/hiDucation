import React, {useState} from 'react';
import {times} from "../../Utils/Font Awesome/Solid";
import {CloseModal, WrapperModal} from "../../StyledComponents/SrtyledModal";
import {useInput} from "../../Utils/Hook/HookFormModal";
import styled, {css} from "styled-components";
import SignUpTwo from "./SignUpTwo";
import SignIn, {BlockInput, ButtonSend} from "./SignIn";
import ForgetPassword from "./ForgetPassword";
import {useDispatch} from "react-redux";
import {getUserInform, postLogin} from "../../ReduxToolkit/ReducerUserAuth";
import {BASE_URL} from "../../Utils/Url";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";

const BlockFormRegLog = styled.div`
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

const Switcher = styled.div`
  width: 100%;
`

const SignInSignUp = styled.button`
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

const BlockCloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 1em 0 0;
`

const Modal = ({openModal, setOpenModal}) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(false);

    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, isPassword: true});
    const userName = useInput('', {isEmpty: true, isName: true});
    const learning = useInput('', {isEmpty: true});
    const study = useInput('', {isEmpty: true});
    const repeatPassword = useInput('', {isEmpty: true});

    const clearState = () => {
        email.onClear()
        password.onClear()
        userName.onClear()
        learning.onClear()
        study.onClear()
        repeatPassword.onClear()
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setForgetPassword(false);
        setShowPassword(false);
        setForm(true);
        clearState()
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    const handleChangeFormSignIn = () => {
        setForm(true)
        clearState()
    }

    const handleChangeFormSignUp = () => {
        setForm(false)
        setForgetPassword(false)
        clearState()
    }

    const handleSendInquiry = (email, password) => {
        dispatch(postLogin(`${BASE_URL}/user/login?userEmail=${email}&password=${password}`))
        dispatch(getUserInform({email, password}))
        dispatch(getUserProfile(`${BASE_URL}/user/${email}`))
        clearState()
        handleCloseModal()
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
                        onClick={() => handleChangeFormSignIn()}>{!forgetPassword ? 'SignIn' : 'Change password'}</SignInSignUp>
                    <SignInSignUp
                        active={!form}
                        not_active={form}
                        className={!form ? 'active' : 'not_active'}
                        onClick={() => handleChangeFormSignUp()}>SignUp</SignInSignUp>
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
                            setForgetPassword={setForgetPassword}/>
                        :
                        <ForgetPassword setForgetPassword={setForgetPassword}/>
                    :
                    <SignUpTwo
                        email={email}
                        password={password}
                        repeatPassword={repeatPassword}
                        userName={userName}
                        learning={learning}
                        study={study}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}/>
                }
                <MainBlockButtonSend>
                    <BlockInput>
                        <ButtonSend onClick={() => {
                            handleSendInquiry(email.value, password.value)
                        }}
                            disabled={
                                form
                                    ?
                                    !forgetPassword
                                        ?
                                        !email.inputValid || !password.inputValid
                                        :
                                        !email.inputValid
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