import React from 'react';
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import SignUp from "../Modal/SignUp";

const MainBlockProfileAndImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Profile = ({showPassword, setShowPassword, handleUseValue}) => {
    return (
        <MainBlockProfileAndImgProfile>
            <AvatarProfile/>
            <SignUp showPassword={showPassword} setShowPassword={setShowPassword} handleUseValue={handleUseValue}/>
        </MainBlockProfileAndImgProfile>
    );
};

export default Profile;