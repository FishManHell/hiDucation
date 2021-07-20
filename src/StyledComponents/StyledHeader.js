import styled, {css} from "styled-components";
import background from "../img/one.png";
import {device} from "../Utils/MediaSize";

export const HeaderNav = styled.section`
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  margin-top: 70px;
`

export const BlockHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`

export const BlockList = styled.div`
    
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;

  @media all and ${device.desktopLMin} {
    display: flex;
  }

  @media all and ${device.laptopM} {
    position: absolute;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    z-index: 12;
  }
  ${props => props.open && css`
    display: flex;
  `}
  
  ${props => props.close && css`
    display: none;
  `}
`

export const BlockContentMain = styled.div`
  padding: 9.375rem 0 11.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MainHeaderTextOne = styled.h1`
    font-weight: 800;
    font-size: 5rem;
    color: #ffffff;

  @media all and ${device.tabletS} {
    font-size: 3.5rem;
  }

  @media all and ${device.mobile} {
    font-size: 3rem;
  }
`

export const MainHeaderTextTwo = styled.h2`
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: 2.4rem;
  
  @media all and ${device.tabletS} {
    font-size: 1.8rem;
  }

  @media all and ${device.mobile} {
    font-size: 1rem;
  }
  
`