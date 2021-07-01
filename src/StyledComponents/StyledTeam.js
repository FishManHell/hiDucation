import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperTeam = styled.section`
  padding: 50px 0;
  background: linear-gradient(to right, #ff854c, #861653, #ff5552);
`

export const ContainerItemCarousel = styled.div`
    width: 50%;
    margin: 0 auto;

  @media all and ${device.laptopM} {
    width: 100%;
  }
`

export const BlockItem = styled.div`
    
`

export const BlockImgItem = styled.div`
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  background-image: url(${props => props.background_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 5px solid #40e0d0;
  
`

export const BlockInformation = styled.div`
    
`

export const NameTeam = styled.h4`
  position: relative;
  text-align: center;
  margin: 20px 0;
  font-weight: 700;
  color: #ffffff;
  
  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: #40e0d0;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const InformationText = styled.p`
  text-align: center;
  font-weight: 400;
  color: #ffffff;
  
`