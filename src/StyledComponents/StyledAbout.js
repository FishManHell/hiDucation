import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperSectionAbout = styled.section`
  width: 100%;
  max-width: 100%;
  position: relative;
  background: #fff;
  padding: 50px 0;
`

export const BlockBackgroundImg = styled.div`
  position: absolute;
  top: -14%;
  left: -25%;
  transform: rotate(-5deg);
`

export const MainBlockBestTeacher = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media all and ${device.tablet} {
   flex-direction: column;  
    align-items: center;
  }
`

export const BlockImgBestTeacher = styled.div`
  position: relative;
  z-index: 3;
  width: 250px;
  border-radius: 9px;
`

export const ImgBestTeacher = styled.img`
  width: 100%;
  border-radius: inherit;
  height: 100%;
  border: 3px solid #40E0D0;
`

export const BlockBestText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and ${device.laptop} {
    width: 70%;
  }

  @media all and ${device.tablet} {
    width: 100%;
  }
  
`

export const MainTextBestTeacher = styled.p`
  position: relative;
  text-align: right;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.625rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 215px;
    height: 2px;
    background-color: #40E0D0;
    bottom: -10px;
    right: 0;
  }

  @media all and ${device.tablet} {
    text-align: center;

    &:before {
      width: 100%;
    }
  }

  @media all and ${device.mobile} {
    font-size: 2rem;
  }
  
`

export const DescriptionBestTeacher = styled.p`
  margin-top: 40px;
  overflow-wrap: anywhere;
  text-align: center;
`
