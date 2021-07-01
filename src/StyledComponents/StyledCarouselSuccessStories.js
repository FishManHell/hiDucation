import styled from "styled-components";

export const MainBlockSuccessStories = styled.div`
  width: 300px;
  max-width: 100%;
  padding: 15px;
  margin: 0 auto;
`

export const BlockImgSuccessStories = styled.div`
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
`

export const ImgSuccessStories = styled.img`
  width: 100%;
  border-radius: inherit;
`

export const MainTextSuccessStories = styled.h4`
  text-align: center;
  margin: 10px 0 20px 0;
  position: relative;
  font-weight: 600;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    background-color: #ff834c;
    bottom: -7px;
  }
  
`

export const MainSecondTextSuccessStories = styled.h4`
  margin: 10px 0 15px 0;
  position: relative;
  text-align: center;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    background-color: #ff834c;
    bottom: -7px;
  }
`

export const InformationTextSuccessStories = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2rem;
`