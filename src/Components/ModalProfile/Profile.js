import React from 'react';
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import SignUp from "../Modal/SignUp";
import {funcCheckYup} from "../../Utils/YupCheck";

const MainBlockProfileAndImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Profile = ({handleUseValue, handleBooleanForms, handleShowPassword}) => {
    return (
        <MainBlockProfileAndImgProfile>
            <AvatarProfile/>
            <SignUp
                handleBooleanForms={handleBooleanForms}
                handleUseValue={handleUseValue}
                handleShowPassword={handleShowPassword}
                funcCheckYup={funcCheckYup('profile')}
            />
        </MainBlockProfileAndImgProfile>
    );
};

export default Profile;