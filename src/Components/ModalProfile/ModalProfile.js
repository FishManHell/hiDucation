import React from 'react';
import {BlockFormRegLog, SignInSignUp, Switcher, WrapperModal} from "../../StyledComponents/SrtyledModal";
import {useSelector} from "react-redux";
import LoadingProfile from "../Loading/LoadingProfile";
import Profile from "./Profile";
import Statistics from "./Statistics";

const ModalProfile = ({handleBooleanForms}) => {
    const loaderProfile = useSelector(state => state.getUserInform.loading);
    const handleProfileChangeStatistic = (formik) => handleBooleanForms().setForm(formik)

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
                    <Profile handleBooleanForms={handleBooleanForms}/>
                    :
                    <Statistics/>
                }
            </BlockFormRegLog>
        </WrapperModal>
    );
};

export default ModalProfile;