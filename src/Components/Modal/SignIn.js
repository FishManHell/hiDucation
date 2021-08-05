import React from 'react';
import styled, {css} from "styled-components";
import {apple, envelope, eye, facebook, google, key} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {BlockError, ErrorTextModalForm} from "../../StyledComponents/SrtyledModal";
import {device} from "../../Utils/MediaSize";
import ErrorBlockModal from "./ErrorBlockModal";

export const BlockSignInSignUp = styled.div`
  width: ${props => props.width};
  padding: 1em 2em 0 2em;
  margin: ${props => props.margin};
`

const BlockConnectLink = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonConnectLink = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 2rem;
  line-height: 2rem;
  color: #ffffff;
  
  &:first-child {
    background: #EB4C42;
  }
  &:nth-child(2) {
    background: #455CAA;
  }
  &:last-child {
    background: #3D3737;
  }
  
  &:hover {
    transform: scale(1.3);
    transition: all 0.4s;
    background: black;
  }
`

const TextOr = styled.p`
  text-align: center;
  margin-top: 30px;
  position: relative;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #BD0452;
  
  &:before {
    content: '';
    position: absolute;
    width: 45%;
    height: 2px;
    background: black;
    top: 10px;
    left: 0;
  }

  &:after {
    content: '';
    position: absolute;
    width: 45%;
    height: 2px;
    background: black;
    top: 10px;
    right: 0;
  }
`

export const MainBlockInput = styled.div`
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;

  @media all and ${device.tabletS} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`

export const BlockInput = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 2.3em 0;
`

export const LabelInput = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-size: 1.5rem;
`

export const Input = styled.input`
  width: 100%;
  border: 2px solid #d2d8d8;
  padding: 16px 20px 16px 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25em;
`

export const TextChangeType = styled.span`
  display: inline-block;
  padding: 6px 15px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  border-left: 2px solid #d2d8d8;
`

export const ButtonSend = styled.button`
  position: relative;
  width: 100%;
  background: #2f889a;
  color: #FFF;
  font-weight: 600;
  padding: 16px 0;
  border-radius: 0.25em;
  border: none;
  
 ${props => props.disabled && css`
   background: #6E7F80;
 `}
 
  &:hover {
    opacity: 0.8;
  }
`

export const BlockForgetPasswordTextBackSignIn = styled.div`
  cursor: pointer;
  width: 100%;
  position: absolute;
  bottom: -30px;
  text-align: center;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s;
  }
`

export const ForgetPasswordSignInText = styled.span`
  color: #ffffff;
  font-weight: 500;
  
 
  &:hover {
    text-decoration: underline;
    transition: all 0.4s;
  }
`

const SignIn = ({showPassword, setShowPassword, handleForgetPassword, handleSwitchRequest, handleUseValue}) => {

    return (
        <BlockSignInSignUp width={'100%'}>
            <BlockConnectLink>
                <ButtonConnectLink>{google}</ButtonConnectLink>
                <ButtonConnectLink>{facebook}</ButtonConnectLink>
                <ButtonConnectLink>{apple}</ButtonConnectLink>
            </BlockConnectLink>
            <TextOr>Or</TextOr>
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
                    <ErrorBlockModal
                        valueOne={handleUseValue().email.isDirty}
                        valueTwo={handleUseValue().email.isEmpty}
                        text={'Field is empty'} left={'0'} bottom={'-35px'}
                    />
                    <ErrorBlockModal
                        valueOne={handleUseValue().email.isDirty}
                        valueTwo={handleUseValue().email.emailError}
                        right={'0'} bottom={'-35px'}
                        text={'Wrong email'}
                    />
                </BlockInput>
                <BlockInput>
                    <LabelInput>{key}</LabelInput>
                    <Input
                        name={'password'}
                        type={showPassword ? 'password' : 'text'}
                        placeholder={'Password'}
                        value={handleUseValue().password.value}
                        onChange={e => handleUseValue().password.onChange(e)}
                        onBlur={e => handleUseValue().password.onBlur(e)}
                    />
                    <TextChangeType
                        onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>
                    <ErrorBlockModal
                        valueOne={handleUseValue().password.isDirty}
                        valueTwo={handleUseValue().password.isEmpty}
                        text={'Field is empty'} left={'0'} bottom={'-35px'}
                    />
                    <ErrorBlockModal
                        valueOne={handleUseValue().password.isDirty}
                        valueTwo={handleUseValue().password.passwordError}
                        right={'0'} bottom={'-35px'}
                        text={'Wrong Password'}
                    />
                </BlockInput>
            </MainBlockInput>
            <BlockForgetPasswordTextBackSignIn>
                <ForgetPasswordSignInText onClick={() => handleForgetPassword(true)}>
                    Forgot your password ?
                </ForgetPasswordSignInText>
            </BlockForgetPasswordTextBackSignIn>
            <BlockInput>
                <ButtonSend
                    disabled={!handleUseValue().email.inputValid || !handleUseValue().password.inputValid}
                    onClick={() => handleSwitchRequest(handleUseValue().email.value, handleUseValue().password.value, 1)}
                >
                    Login
                </ButtonSend>
            </BlockInput>
        </BlockSignInSignUp>
    );
};

export default SignIn;