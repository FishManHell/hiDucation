import React, {useState} from 'react';
import {BlockFormRegLog, SignInSignUp, Switcher, WrapperModal} from "../../StyledComponents/SrtyledModal";
import FooterModalProfile from "./FooterModalProfile";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";
import LoadingProfile from "../Loading/LoadingProfile";
import Profile from "./Profile";
import Statistics from "./Statistics";

const ModalProfile = ({clearState, handleUseValue, handleBooleanForms, handleShowPassword}) => {
    const dispatch = useDispatch()
    const edit = useSelector(state => state.getUserInform.userProfile);
    const loaderProfile = useSelector(state => state.getUserInform.loading);
    const [changeText, setChangeText] = useState(true)

    const handleProfileChangeStatistic = (formik) => handleBooleanForms().setForm(formik)

    const handleCollectInform = () => {
        const userProfile = {
            degree: handleUseValue().study.value,
            email: handleUseValue().email.value,
            firstName: handleUseValue().userName.value,
            institute: handleUseValue().learning.value,
            lastName: handleUseValue().userLastName.value,
            password: handleUseValue().password.value,
        }
        dispatch(editProfileInform({userProfile}))
        setChangeText(false)
    }

    const handleSendInform = () => dispatch(editUserProfile(edit))

    const handleCloseModal = () => {
        handleBooleanForms().setOpenModal(false)
        handleBooleanForms().setShowPassword(true)
        handleBooleanForms().setForm(true)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    return (
        <WrapperModal
            openModal={handleBooleanForms().openModal}
            closeModal={!handleBooleanForms().openModal}
            className={!handleBooleanForms().openModal ? 'openModal' : 'closeModal'}>
            <BlockFormRegLog
                width={'1000px'}
                active={handleBooleanForms().form}
                not_active={!handleBooleanForms().form}
                className={handleBooleanForms().form ? 'active' : 'not_active'}>
                {loaderProfile ? <LoadingProfile/> : null}
                <Switcher>
                    <SignInSignUp
                        active={handleBooleanForms().form}
                        not_active={!handleBooleanForms().form}
                        className={handleBooleanForms().form ? 'active' : 'not_active'}
                        onClick={() => handleProfileChangeStatistic(true)}
                    >Profile</SignInSignUp>
                    <SignInSignUp
                        active={!handleBooleanForms().form}
                        not_active={handleBooleanForms().form}
                        className={!handleBooleanForms().form ? 'active' : 'not_active'}
                        onClick={() => handleProfileChangeStatistic(false)}
                    >Statistic</SignInSignUp>
                </Switcher>

                {handleBooleanForms().form
                    ?
                    <Profile
                        handleBooleanForms={handleBooleanForms}
                        handleUseValue={handleUseValue}
                        handleShowPassword={handleShowPassword}
                    />
                    :
                    <Statistics/>
                }
                <FooterModalProfile
                    clearState={clearState}
                    handleCloseModal={handleCloseModal}
                    handleCollectInform={handleCollectInform}
                    handleSendInform={handleSendInform}
                    changeText={changeText}
                />
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default ModalProfile;