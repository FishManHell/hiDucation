import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperFooter = styled.footer`
  width: 100%;
  max-width: 100%;
  background: #ffffff;
  padding: 50px 0 20px 0;
`

export const TextFooter = styled.p`
  color: #000000;
  text-align: ${props => props.text_align};
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
`

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;
  margin: 40px auto 0 auto;

  @media all and ${device.tabletS} {
    width: 100%;
  }
  
`

export const MainBlockInputs = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media all and ${device.tabletS} {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`

export const BlockInputTextarea = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};

  @media all and ${device.tabletS} {
    width: 80%;
    margin-top: 20px;
  }
`

export const InputFooter = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 15px;
  border-radius: 10px;
  outline: none;
  border: 3px solid #40E0D0;
  box-shadow: 0 0 4px #fff;
  
  &::placeholder {
    color: #000;
    font-weight: 600;
  }
`

export const TextareaFooter = styled.textarea`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-left: 15px;
  outline: none;
  border: 3px solid #40E0D0;
  resize: none;
  box-shadow: 0 0 4px #fff;
  
  &::placeholder {
    color: #000;
    font-weight: 600;
  }
`

export const ButtonSendFooter = styled.button`
  width: 170px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: 2px solid #fff;
  font-weight: 600;
  font-size: 1.2rem;
  background: #40E0D0;
  box-shadow: 0 0 4px #fff;
  color: #ffffff;
  
  &:hover {
    opacity: 0.8;
    color: #000;
  }
  
  @media all and ${device.tabletS} {
    margin-top: 20px;
    width: 50%;
  }
`

export const EndBlockFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media all and ${device.tabletS} {
   flex-direction: column-reverse;
  }
`

export const LinkFooter = styled.a`
  color: #40E0D0;
  font-size: 1.5rem;
  margin-left: 20px;
  
  &:hover {
    transform: scale(1.3);
    transition: all 0.4s linear;
    color: #000000;
  }
`

export const MainBlockLinkFooter = styled.div`
  @media all and ${device.tabletS} {
    margin-bottom: 10px;
  }
`