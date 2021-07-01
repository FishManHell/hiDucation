import styled, {css} from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperNavHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(to left, #FF5652, #861653, #A61E1B);
  z-index: 50;
  -webkit-box-shadow: 0 2px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0 2px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 0 2px 15px 1px rgba(0,0,0,0.75);
`

export const WrapperBurgerMenu = styled.div`
  position: fixed;
  display: none;
  width: 30%;
  height: 100%;
  top: 70px;
  bottom: 0;
  background: rgba(0,0,0, 0.9);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
  right: 0;

  @media all and ${device.tabletS} {
    width: 35%;
  }

 @media all and ${device.desktopLMin} {
   display: none;
 } 
  
  @media all and ${device.mobile} {
    width: 60%;
  }

  ${props => props.open && css`
    display: block;
  `}
  
`

export const BlockBurgerMenu = styled.div`
  cursor: pointer;
  display: none;
  position: relative;
  width: 30px;
  height: 20px;
  top: 35px;
  left: 100%;
  
  &:before, ::after {
    content: '';
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    z-index: 11;
    transition: all 0.3s ease 0s;
  }
  
  &:before {
     top: 0;
  }
  
  &:after {
    bottom: 0;
  }
  
  ${props => props.open && css`
    &:before {
      content: '';
      transform: rotate(45deg);
      top: 8px;
    }
    
    &:after {
      content: '';
      transform: rotate(-45deg);
      bottom: 9px;
    }
  `}
  
  @media all and ${device.laptopM} {
    display: block;
    left: 0;
    top: 0;
  }
`

export const BurgerMenu = styled.span`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #000;
  top: 8px;
  z-index: 11;
  transition: all 0.3s ease 0s;
  
  ${props => props.open && css`
    transform: scale(0);
  `}
`