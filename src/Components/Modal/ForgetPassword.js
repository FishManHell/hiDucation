import React from 'react';
import {
    BlockForgetPasswordTextBackSignIn,
    BlockInput,
    BlockSignInSignUp, ForgetPasswordSignInText,
    Input,
    LabelInput,
    MainBlockInput,
    TextChangeType
} from "./SignIn";
import {envelope} from "../../Utils/Font Awesome/Solid";
import styled from "styled-components";

const MessageChangePasswordBlock = styled.div`
  text-align: center;
`

const TextMessage = styled.span`
  font-weight: 600;
  color: #A72537;
`

const ForgetPassword = ({setForgetPassword}) => {
    return (
        <BlockSignInSignUp>
            <MessageChangePasswordBlock>
                <TextMessage>
                    Lost your password? Please enter your email address. You will receive a link to create a new
                    password.
                </TextMessage>
            </MessageChangePasswordBlock>
            <MainBlockInput>
                <BlockInput>
                    <LabelInput>{envelope}</LabelInput>
                    <Input type={'text'} placeholder={'E-mail'}/>
                </BlockInput>
            </MainBlockInput>
            <BlockForgetPasswordTextBackSignIn>
                <ForgetPasswordSignInText onClick={() => setForgetPassword(false)}>
                    Back to Log-in
                </ForgetPasswordSignInText>
            </BlockForgetPasswordTextBackSignIn>
        </BlockSignInSignUp>
    );
};

export default ForgetPassword;