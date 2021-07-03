import React from 'react';
import {CloseModal, WrapperModal} from "../../StyledComponents/SrtyledModal";
import {BlockCloseModal, BlockFormRegLog, SignInSignUp, Switcher} from "../Modal/Modal";
import SignUp from "../Modal/SignUp";
import {times} from "../../Utils/Font Awesome/Solid";

const ModalProfileTwo = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, email, password, userName, learning, study, repeatPassword, clearState}) => {
    const handleProfileChangeStatistic = (formik) => {
        setForm(formik)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setShowPassword(true)
        setForm(true)
        clearState()
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    return (
        <WrapperModal
            openModal={openModal}
            closeModal={!openModal}
            className={!openModal ? 'openModal' : 'closeModal'}>>
            <BlockFormRegLog
                width={'1000px'}
                active={form}
                not_active={!form}
                className={form ? 'active' : 'not_active'}>
                <Switcher>
                    <SignInSignUp
                        active={form}
                        not_active={!form}
                        className={form ? 'active' : 'not_active'}
                        onClick={() => handleProfileChangeStatistic(true)}
                        >Profile</SignInSignUp>
                    <SignInSignUp
                        active={!form}
                        not_active={form}
                        className={!form ? 'active' : 'not_active'}
                        onClick={() => handleProfileChangeStatistic(false)}
                        >Statistic</SignInSignUp>
                </Switcher>
                <BlockCloseModal>
                    <CloseModal onClick={() => handleCloseModal()}>{times}</CloseModal>
                </BlockCloseModal>
                <SignUp
                    email={email}
                    password={password}
                    userName={userName}
                    learning={learning}
                    study={study}
                    repeatPassword={repeatPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default ModalProfileTwo;