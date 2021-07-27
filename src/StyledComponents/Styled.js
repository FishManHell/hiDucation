import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const Container = styled.div`
  width: ${props => props.width};
  max-width: 100%;
  margin: 0 auto;
  
  @media all and ${device.laptopL} {
    width: 98%
  }

  @media all and ${device.mobileM} {
    width: 95%;
  }
  
`

export const LogoImg = styled.img`
  cursor: pointer;
  width: 100%;
  
  @media all and ${device.laptopM} {
    width: 70%;
  }
  
`

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadingTextSection = styled.h3`
  position: relative;
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 3rem;
  color: ${props => props.color};
  padding: ${props => props.padding};
  text-transform: uppercase;
  line-height: 5.063rem;
  z-index: 2;

  @media all and ${device.tablet} {
   font-size: 2.5rem;
  }

  @media all and ${device.tabletS} {
    font-size: 2rem;
  }

  @media all and ${device.mobile} {
    font-size: 1.5rem;
  }

`