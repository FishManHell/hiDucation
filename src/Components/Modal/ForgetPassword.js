import React from 'react';
import {
    BlockForgetPasswordTextBackSignIn,
    BlockInput,
    BlockSignInSignUp, ButtonSend, ForgetPasswordSignInText,
    Input,
    LabelInput,
    MainBlockInput, TextChangeType,
} from "./SignIn";
import {envelope, eye, key} from "../../Utils/Font Awesome/Solid";
import styled from "styled-components";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {BlockError, ErrorTextModalForm} from "../../StyledComponents/SrtyledModal";

const MessageChangePasswordBlock = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

const TextMessage = styled.span`
  font-weight: 600;
  color: #A72537;
`

const ForgetPassword = ({email, password, setShowPassword, showPassword, handleForgetPassword, handleSwitchRequest}) => {
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
                    <Input
                        name={'email'}
                        type={'email'}
                        value={email.value}
                        placeholder={'E-mail'}
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                    />
                    <BlockError left={'0'} bottom={'-35px'}>
                        {
                            (email.isDirty && email.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                        }
                    </BlockError>
                    <BlockError right={'0'} bottom={'-35px'}>
                        {(email.isDirty && email.emailError)
                        &&
                        <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                    </BlockError>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{key}</LabelInput>
                    <Input
                        name={'password'}
                        type={showPassword ? 'password' : 'text'}
                        placeholder={'New password'}
                        value={password.value}
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                    />
                    <TextChangeType
                        onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>

                    <BlockError left={'0'} bottom={'-35px'}>
                        {
                            (password.isDirty && password.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                        }
                    </BlockError>
                    <BlockError right={'0'} bottom={'-35px'}>
                        {
                            (password.isDirty && password.passwordError)
                            &&
                            <ErrorTextModalForm>Wrong Password</ErrorTextModalForm>
                        }
                    </BlockError>
                </BlockInput>
            </MainBlockInput>
            <BlockForgetPasswordTextBackSignIn>
                <ForgetPasswordSignInText onClick={() => handleForgetPassword(false)}>
                    Back to Log-in
                </ForgetPasswordSignInText>
            </BlockForgetPasswordTextBackSignIn>
            <BlockInput>
                <ButtonSend
                    onClick={() => handleSwitchRequest(email.value, password.value, 3)}
                    disabled={!password.inputValid}
                >
                    Change Password
                </ButtonSend>
            </BlockInput>
        </BlockSignInSignUp>
    );
};

export default ForgetPassword;