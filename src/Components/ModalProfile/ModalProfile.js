import React, {useState} from 'react';
import {WrapperModal} from "../../StyledComponents/SrtyledModal";
import {BlockFormRegLog, SignInSignUp, Switcher} from "../Modal/Modal";
import FooterModalProfile from "./FooterModalProfile";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";
import LoadingProfile from "../Loading/LoadingProfile";
import Profile from "./Profile";
import Statistics from "./Statistics";

const ModalProfile = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, clearState, handleUseValue}) => {
    const dispatch = useDispatch()
    const edit = useSelector(state => state.getUserInform.userProfile);
    const loaderProfile = useSelector(state => state.getUserInform.loading);
    const [changeText, setChangeText] = useState(true)

    const handleProfileChangeStatistic = (formik) => setForm(formik)

    const handleCollectInform = () => {
        const userProfile = {
            degree: handleUseValue().study.value,
            email: handleUseValue().email.value,
            firstName: handleUseValue().userName.value,
            institute: handleUseValue().learning.value,
            lastName: handleUseValue().userLastName.value,
            password: handleUseValue().password.value,
        }

        // if (userName.value && userLastName.value && email.value && password.value && learning.value && study.value) {
        dispatch(editProfileInform({userProfile}))
        setChangeText(false)
        // } else {
        //     return alert('Поля не заполнены')
        // }
    }

    const handleSendInform = () => dispatch(editUserProfile(edit))

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
                {loaderProfile ? <LoadingProfile/> : null}
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

                {form
                    ?
                    <Profile
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        handleUseValue={handleUseValue}
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