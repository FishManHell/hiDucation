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

const ForgetPassword = ({setShowPassword, showPassword, handleForgetPassword, handleSwitchRequest, handleUseValue}) => {
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
                        value={handleUseValue().email.value}
                        placeholder={'E-mail'}
                        onChange={e => handleUseValue().email.onChange(e)}
                        onBlur={e => handleUseValue().email.onBlur(e)}
                    />
                    <BlockError left={'0'} bottom={'-35px'}>
                        {
                            (handleUseValue().email.isDirty && handleUseValue().email.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                        }
                    </BlockError>
                    <BlockError right={'0'} bottom={'-35px'}>
                        {(handleUseValue().email.isDirty && handleUseValue().email.emailError)
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
                        value={handleUseValue().password.value}
                        onChange={e => handleUseValue().password.onChange(e)}
                        onBlur={e => handleUseValue().password.onBlur(e)}
                    />
                    <TextChangeType
                        onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>

                    <BlockError left={'0'} bottom={'-35px'}>
                        {
                            (handleUseValue().password.isDirty && handleUseValue().password.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                        }
                    </BlockError>
                    <BlockError right={'0'} bottom={'-35px'}>
                        {
                            (handleUseValue().password.isDirty && handleUseValue().password.passwordError)
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
                    onClick={() => handleSwitchRequest(handleUseValue().email.value, handleUseValue().password.value, 3)}
                    disabled={!handleUseValue().password.inputValid}
                >
                    Change Password
                </ButtonSend>
            </BlockInput>
        </BlockSignInSignUp>
    );
};

export default ForgetPassword;