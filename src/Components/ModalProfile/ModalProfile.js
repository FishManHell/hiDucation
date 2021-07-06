import React, {useState} from 'react';
import {WrapperModal} from "../../StyledComponents/SrtyledModal";
import {BlockFormRegLog, SignInSignUp, Switcher} from "../Modal/Modal";
import SignUp from "../Modal/SignUp";
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import FooterModalProfile from "./FooterModalProfile";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";
import {ClockLoader} from "react-spinners";

const MainBlockProfileAndImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const MainBlockForLoader = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.50em;
  z-index: 50;
`

const BlockForLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:inherit;
    height: inherit;
`

const ModalProfile = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, email, password, userName, userLastName, learning, study, repeatPassword, clearState}) => {
    const dispatch = useDispatch()
    const editProfile = useSelector(state => state.getUserInform.userProfile);
    const loaderProfile = useSelector(state => state.getUserInform.loading)
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
                {
                    loaderProfile
                        ?
                        <MainBlockForLoader>
                            <BlockForLoading>
                                <ClockLoader color={"#861653"} size={'200'}/>
                            </BlockForLoading>
                        </MainBlockForLoader>
                        :
                        null
                }
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
                        onClick={(e) => handleProfileChangeStatistic(false)}
                    >Statistic</SignInSignUp>
                </Switcher>

                <MainBlockProfileAndImgProfile>
                    <AvatarProfile
                        avatarOne={avatarOne}
                        setAvatar={setAvatar}
                        src={src}
                        setSrc={setSrc}
                    />

                    <SignUp
                        email={email}
                        password={password}
                        userName={userName}
                        userLastName={userLastName}
                        learning={learning}
                        study={study}
                        repeatPassword={repeatPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
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

export default ModalProfile;