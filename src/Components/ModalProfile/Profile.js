import React from 'react';
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import SignUp from "../Modal/SignUp";
import {funcCheckYup} from "../../Utils/YupCheck";
import {editProfileInform, editUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";
import {useDispatch, useSelector} from "react-redux";

const MainBlockProfileAndImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Profile = ({handleBooleanForms}) => {
    const dispatch = useDispatch()
    const edit = useSelector(state => state.getUserInform.userProfile);

    const requestChangeProfile = (value, resetForm) => {
        const userProfile = {
            degree: value.study,
            email: value.email,
            firstName: value.firstName,
            institute: value.learning,
            lastName: value.lastName,
            password: value.password,
        }
        if (handleBooleanForms().changeTextButtonProfile) {
            dispatch(editProfileInform({userProfile}))
            handleBooleanForms().setChangeTextButtonProfile(false)
        } else {
            dispatch(editUserProfile(edit))
            resetForm()
            handleBooleanForms().setChangeTextButtonProfile(true)

        }
    }


    return (
        <MainBlockProfileAndImgProfile>
            <AvatarProfile/>
            <SignUp
                handleBooleanForms={handleBooleanForms}
                funcCheckYup={funcCheckYup('profile')}
                requestSend={requestChangeProfile}
            />
        </MainBlockProfileAndImgProfile>
    );
};

export default Profile;