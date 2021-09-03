import styled, {css} from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperModal = styled.div`
  cursor: pointer;
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background: rgba(52, 54, 66, 0.9);
  z-index: 60;
  left: 0;

  ${props => props.openModal && css`
    height: 100%;
    display: flex;
  `}

  ${props => props.closeModal && css`
    height: 0;
    display: none;
  `}
`

export const CloseModal = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 1.8rem;

  &:hover {
    transform: scale(1.6);
    transition: all 0.4s;
  }
`

export const BlockLeftModal = styled.div`
  width: 50%;
`

export const BlockError = styled.div`
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(215, 102, 102, 0.9);
  height: 33px;
  z-index: 2;
  font-size: 0.8125rem;
  border-radius: 0.25em;
  pointer-events: none;

`
export const ErrorTextModalForm = styled.span`
  color: #000000;
  font-weight: 600;
  font-size: ${props => props.font_size};
  padding: 10px;

  &:before {
    content: '';
    position: absolute;
    left: 22px;
    bottom: 100%;
    height: 0;
    width: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(215, 102, 102, 0.9);
  }
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

export const LabelInput = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-size: 1.5rem;
`



export const BlockFormRegLog = styled.div`
  max-width: ${props => props.width};
  background: #ffffff;
  position: relative;
  width: 90%;
  border-radius: 0.50em;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;

  ${props => props.active && css`
    margin: 4% auto auto auto;
  `}

  ${props => props.not_active && css`
    margin: 2% auto auto auto;
  `}
`

export const Switcher = styled.div`
  width: 100%;
  margin-bottom: 50px;
`

export const SignInSignUp = styled.button`
  width: 50%;
  border: none;
  background: #d2d8d8;
  height: 70px;

  &:first-child {
    border-top-left-radius: 0.50em;
  }

  &:last-child {
    border-top-right-radius: 0.50em;
  }

  ${props => props.active && css`
    background: #ffffff;
  `}

  ${props => props.not_active && css`
    background: #d2d8d8;
  `}
`

export const BlockCloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 1em 0 0;
`

export const Form = styled.form`
  display: ${props => props.display};
  justify-content: space-between;
  flex-wrap: wrap;
`


export const BlockSignInSignUp = styled.div`
  width: ${props => props.width};
  padding: 1em 2em 2em 2em;
  margin: ${props => props.margin};
`

export const BlockConnectLink = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonConnectLink = styled.button`
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

export const TextOr = styled.p`
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
  width: 200px;
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

export const BlockWithProfile = styled.div`
  width: ${props => props.width};

  @media all and ${device.tabletS} {
    width: 100%;
  }
`

export const MessageChangePasswordBlock = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

export const TextMessage = styled.span`
  font-weight: 600;
  color: #A72537;
`

export const MainBlockWithSubmitButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

`