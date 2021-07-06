import React from 'react';
import {WrapperModal} from "../../StyledComponents/SrtyledModal";
import {BlockFormRegLog, SignInSignUp, Switcher} from "../Modal/Modal";
import FooterModalProfile from "./FooterModalProfile";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";
import LoadingProfile from "../Loading/LoadingProfile";
import Profile from "./Profile";
import Statistics from "./Statistics";



const ModalProfile = ({openModal, setOpenModal, form, setForm, showPassword, setShowPassword, email, password, userName, userLastName, learning, study, repeatPassword, clearState}) => {
    const dispatch = useDispatch()
    const editProfile = useSelector(state => state.getUserInform.userProfile);
    const loaderProfile = useSelector(state => state.getUserInform.loading)

    const handleProfileChangeStatistic = (formik) => setForm(formik)

    const handleCollectInform = () => {
        const userProfile = {
            firstName: userName.value,
            lastName: userLastName.value,
            email: email.value,
            password: password.value,
            institute: learning.value,
            degree: study.value,
        }
        if (userName.value && userLastName.value && email.value && password.value && learning.value && study.value) {
            dispatch(editProfileInform({userProfile}))
            dispatch(editUserProfile(editProfile))
        } else {
            return alert('Поля не заполнены')
        }
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
                    :
                    <Statistics/>
                }
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