import React, {useState} from 'react';
import {CloseModal, WrapperModal} from "../../StyledComponents/SrtyledModal";
import {BlockCloseModal, BlockFormRegLog, SignInSignUp, Switcher} from "../Modal/Modal";
import SignUp from "../Modal/SignUp";
import {times} from "../../Utils/Font Awesome/Solid";
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import FooterModalProfile from "./FooterModalProfile";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";

const MainBlockProfileAndImgProfile = styled.div`
  display: flex;
  justify-content: space-between;
`

const ModalProfileTwo = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, email, password, userName, userLastName, learning, study, repeatPassword, clearState}) => {
    const dispatch = useDispatch()
    const editProfile = useSelector(state => state.getUserInform.userProfile)
    const [avatarOne, setAvatar] = useState('');
    const [src, setSrc] = useState('');

    const handleProfileChangeStatistic = (formik) => {
        setForm(formik)
    }

    const handleCollectInform = () => {
        const userProfile = {
            firstName: userName.value,
            lastName: userLastName.value,
            email: email.value,
            password: password.value,
            institute: learning.value,
            degree: study.value,
        }
        dispatch(editProfileInform({userProfile}))
        dispatch(editUserProfile(editProfile))
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setShowPassword(true)
        setForm(true)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    return (
        <WrapperModal
            openModal={openModal}
            closeModal={!openModal}
            className={!openModal ? 'openModal' : 'closeModal'}>
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
                <MainBlockProfileAndImgProfile>
                    <SignUp
                        widthTwo={'50%'}
                        email={email}
                        password={password}
                        userName={userName}
                        learning={learning}
                        study={study}
                        repeatPassword={repeatPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    <AvatarProfile
                        avatarOne={avatarOne}
                        setAvatar={setAvatar}
                        src={src}
                        setSrc={setSrc}
                    />
                </MainBlockProfileAndImgProfile>
                <FooterModalProfile
                    clearState={clearState}
                    handleCloseModal={handleCloseModal}
                    handleCollectInform={handleCollectInform}
                />
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default ModalProfileTwo;