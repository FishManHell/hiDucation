import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const Container = styled.div`
  width: ${props => props.width};
  max-width: 100%;
  margin: 0 auto;
  
  @media all and ${device.laptopL} {
    width: 95%
  }
`

export const LogoSpanLittleSpan = styled.span`
  font-size: ${props => props.font_size};
  font-weight: 500;
  text-transform: none;
  letter-spacing: -4px;

  @media all and ${device.laptopM} {
    font-size: 1.87rem;
  }
  
`

export const LogoSpanFirst = styled.span`
  font-size: ${props => props.font_size};
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  line-height: ${props => props.line_height};

  @media all and ${device.laptopM} {
    font-size: 2rem;
  }
  
`
export const LogoSpanSecond = styled.span`
  font-size: ${props => props.font_size};
  font-weight: 500;
  text-transform: uppercase;
  line-height: ${props => props.line_height};
  letter-spacing: 7px;
  color: #fff;

  @media all and ${device.laptopM} {
    font-size: 1.2rem;
    line-height: 1rem;
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