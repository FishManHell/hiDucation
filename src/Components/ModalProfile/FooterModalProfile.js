import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logoutProfile} from "../../ReduxToolkit/ReducerUserAuth";

const BlockFooterModalProfile = styled.footer`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`

const BlockButton = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 30px;
`

const DifferentButton = styled.button`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 2px solid #ffffff;
  background: linear-gradient(to left,#FF5652,#A61E1B);
  font-weight: 700;
  
  &:hover {
    opacity: 0.8;
    transition: all 0.4s;
  }
  
`

const FooterModalProfile = ({handleCollectInform, CloseModal, ClearState}) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutProfile())
        CloseModal()
        ClearState()
    }

    const handleExit = () => {
        CloseModal()
        ClearState()
    }

    return (
        <BlockFooterModalProfile>
            <BlockButton>
                <DifferentButton onClick={() => handleExit()}>Exit</DifferentButton>
            </BlockButton>
            <BlockButton>
                <DifferentButton onClick={() => handleCollectInform()}>Edit</DifferentButton>
            </BlockButton>
            <BlockButton>
                <DifferentButton onClick={() => handleLogout()}>Logout</DifferentButton>
            </BlockButton>
        </BlockFooterModalProfile>
    );
};

export default FooterModalProfile;