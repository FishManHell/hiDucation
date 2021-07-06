import React from 'react';
import styled from "styled-components";
import AvatarProfile from "./AvatarProfile";
import SignUp from "../Modal/SignUp";

const MainBlockProfileAndImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Profile = ({email, password, userName, userLastName, learning, study, repeatPassword, showPassword, setShowPassword}) => {
    return (
        <MainBlockProfileAndImgProfile>
            <AvatarProfile/>
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
    );
};

export default Profile;