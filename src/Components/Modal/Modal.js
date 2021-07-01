import React, {useState} from 'react';
import {times} from "../../Utils/Font Awesome/Solid";
import {LogoBlock, LogoSpanFirst, LogoSpanSecond} from "../../StyledComponents/Styled";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
    BlockHeaderModal,
    BlockSignUpButton, ButtonSignUp,
    CloseModal,
    ModalBlock, SpanSignUpButton,
    WelcomeBeck,
    WrapperModal
} from "../../StyledComponents/SrtyledModal";
import {useInput} from "../../Utils/Hook/HookFormModal";

const Modal = ({openModal, setOpenModal}) => {
    const [form, setForm] = useState(true)
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, isPassword: true});
    const userName = useInput('', {isEmpty: true, isName: true});
    const learning = useInput('', {isEntry: true});
    const study = useInput('', {isEntry: true});


    const clearState = () => {
        email.onClear()
        password.onClear()
        userName.onClear()
        learning.onClear()
        study.onClear()
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    return (
        <WrapperModal
            openModal={openModal}
            closeModal={!openModal}
            className={!openModal ? 'openModal' : 'closeModal'} >
            <ModalBlock width={'650px'}>
                <BlockHeaderModal>
                    <LogoBlock>
                        <LogoSpanFirst font_size={'2rem'}>
                            hiMath
                        </LogoSpanFirst>
                        <LogoSpanSecond font_size={'1.5rem'}>
                            Gaming
                        </LogoSpanSecond>
                    </LogoBlock>
                    <WelcomeBeck font-size={'1.3rem'}>
                        Welcome Back
                    </WelcomeBeck>
                    <CloseModal onClick={() => handleCloseModal()}>{times}</CloseModal>
                </BlockHeaderModal>
                {form ? <SignIn
                        email={email}
                        password={password}
                        setOpenModal={setOpenModal}
                        clearState={clearState}
                        handleCloseModal={handleCloseModal}
                    />
                    :
                    <SignUp
                        email={email}
                        password={password}
                        userName={userName}
                        learning={learning}
                        study={study}
                        setOpenModal={setOpenModal}
                        clearState={clearState}
                        handleCloseModal={handleCloseModal}

                    />
                }
                <BlockSignUpButton>
                    <SpanSignUpButton>
                        New to Coursera?
                    </SpanSignUpButton>
                    <ButtonSignUp onClick={() => {
                        setForm(!form)
                        clearState()
                    }}>
                        {form ? 'Sign up' : 'Sign In'}
                    </ButtonSignUp>
                </BlockSignUpButton>
            </ModalBlock>
        </WrapperModal>
    );
};

export default Modal;