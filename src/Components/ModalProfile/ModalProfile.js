import React from 'react';
import {BlockHeaderModal, CloseModal, ModalBlock, WelcomeBeck, WrapperModal} from "../../StyledComponents/SrtyledModal";
import {LogoBlock, LogoSpanFirst, LogoSpanLittleSpan, LogoSpanSecond} from "../../StyledComponents/Styled";
import {times} from "../../Utils/Font Awesome/Solid";
import Profile from "./Profile";
import FooterModalProfile from "./FooterModalProfile";
import {useInput} from "../../Utils/Hook/HookFormModal";
import {useDispatch, useSelector} from "react-redux";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";

const ModalProfile = ({openModal, setOpenModal}) => {
    const dispatch = useDispatch()
    const emailProfile = useSelector(state => state.getUserInform.userProfile.email);
    const passwordProfile = useSelector(state => state.getUserInform.userProfile.password);
    const editProfile = useSelector(state => state.getUserInform.userProfile)

    const email = useInput(emailProfile || '', {isEmpty: true, isEmail: true});
    const password = useInput(passwordProfile || '', {isEmpty: true, isPassword: true});
    const userName = useInput('', {isEmpty: true, isName: true});
    const lastName = useInput('', {isEmpty: true, isLastName: true})
    const institute = useInput('', {isEmpty: true});
    const degree = useInput('', {isEmpty: true});



    const handleCloseModal = () => {
        setOpenModal(false)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }

    const handleCollectInform = () => {
        const userProfile = {
            firstName: userName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            institute: institute.value,
            degree: degree.value,
        }
        dispatch(editProfileInform({userProfile}))
        dispatch(editUserProfile(editProfile))
    }

    const handleClearState = () => {
        email.onClear()
        password.onClear()
        userName.onClear()
        lastName.onClear()
        institute.onClear()
        degree.onClear()
    }

    return (
        <WrapperModal
            openModal={openModal}
            closeModal={!openModal}
            className={!openModal ? 'openModal' : 'closeModal'}>
            <ModalBlock width={'1000px'}>
                <BlockHeaderModal>
                    <LogoBlock>
                        <LogoSpanFirst font_size={'2rem'} line_height={'1.8rem'}>
                            <LogoSpanLittleSpan font_size={'1.875rem'}>hi</LogoSpanLittleSpan>Math
                        </LogoSpanFirst>
                        <LogoSpanSecond font_size={'1.125rem'} line_height={'1.5rem'}>
                            Gaming
                        </LogoSpanSecond>
                    </LogoBlock>
                    <WelcomeBeck color={'#fff'} font_size={'1.8rem'}>
                        This is your Profile
                    </WelcomeBeck>
                    <CloseModal onClick={() => handleCloseModal()}>{times}</CloseModal>
                </BlockHeaderModal>
                <Profile email={email}
                         password={password}
                         userName={userName}
                         lastName={lastName}
                         institute={institute}
                         degree={degree}/>
                <FooterModalProfile
                    handleCollectInform={handleCollectInform}
                    CloseModal={handleCloseModal}
                    ClearState={handleClearState}
                />
            </ModalBlock>
        </WrapperModal>
    );
};

export default ModalProfile;