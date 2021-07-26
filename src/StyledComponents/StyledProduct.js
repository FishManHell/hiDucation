import styled from "styled-components";
import {device} from "../Utils/MediaSize";

export const WrapperProductsSection = styled.section`
  width: 100%;
  max-width: 100%;
  background-color: #323232;
  padding: 50px 0;
`

export const MainBlockButtonSearch = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

  @media all and ${device.laptopS} {
    flex-direction: column;
    align-items: center;
  }
`

export const BlockButtonSearch = styled.div`
  width: 160px;
  height: 45px;
  border-radius: 30px;
  margin-left: 35px;
  
  &:first-child {
    margin-left: 0;
  }

  @media all and ${device.laptopS} {
    width: 250px;
    margin-left: 0;
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-dispaly: flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: transparent;
  line-height:  3.688rem;
  border: 2px solid #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -1px;
  
  &:hover {
    background: #40E0D0;
    border: none;
    transition: all 0.4s;
    color: #000;
  }
  @media all and ${device.laptopS} {
    font-size: 1.3rem;
  }
`

export const ButtonSearchSpan = styled.span`
    width: ${props => props.width};
    font-size: 1rem;
    margin-right: ${props => props.margin_right};
    transform: rotate(${props => props.rotate});
    font-weight: 600;

  @media all and ${device.laptopS} {
    font-size: 1.3rem;
  }
`

export const MainBlockInputSearch = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 40px;
`

export const BlockInputSearch = styled.div`
    position: absolute;
    height: 45px;
    width: 300px;
    border-radius: 30px;
`

export const InputSearchInvisible = styled.input`
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: #40E0D0;
    outline: none;
    border: none;
    padding-left: 15px;

  &::-webkit-input-placeholder {
    color: #000;
    font-weight: 600;
  }
`

export const BlockProduct = styled.div`
  position: relative;
  width: 227px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 2px solid #40E0D0;
  margin: 0 auto;
`

export const ImgProducts = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
`

export const BlockText = styled.div`
  padding: 10px;
`

export const MainTextProduct = styled.p`
  position: relative;
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid;
`

export const TextProduct = styled.p`
  margin: 5px 0 70px 0;
  font-size: 0.8rem;
  width: 60%;
  overflow-wrap: anywhere;
`

export const ButtonProduct = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  position: absolute;
  left: 50%;
  bottom: 0;
  font-weight: 600;
  background: #40E0D0;
  transform: translateX(-50%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #ffffff;
  border: none;
  
  &:hover {
    opacity: 0.9;
    color: #000;
    transition: all 0.4s linear;
  }
`