import React from 'react';
import {ClockLoader} from "react-spinners";
import styled from "styled-components";

const MainBlockForLoader = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.50em;
  z-index: 50;
`

const BlockForLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:inherit;
    height: inherit;
`

const LoadingProfile = () => {
    return (
        <MainBlockForLoader>
            <BlockForLoading>
                <ClockLoader color={"#861653"} size={'200'}/>
            </BlockForLoading>
        </MainBlockForLoader>
    )
};

export default LoadingProfile;