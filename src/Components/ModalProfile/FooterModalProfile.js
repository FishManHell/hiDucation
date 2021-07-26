import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logoutProfile} from "../../ReduxToolkit/ReducerUserAuth";
import ButtonFooterBlockProfile from "../MaterialUiComponents/ButtonFooterBlockProfile";
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {device} from "../../Utils/MediaSize";

const BlockFooterModalProfile = styled.footer`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  @media all and ${device.tabletS} {
    width: 90%;
    flex-direction: column;
  }
  
`

const FooterModalProfile = ({handleCollectInform, clearState, handleCloseModal, changeText, handleSendInform}) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutProfile())
        handleCloseModal()
        clearState()
    }
    const handleExit = () => handleCloseModal()

    return (
        <BlockFooterModalProfile>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Exit'} click={handleExit}/>
            <ButtonFooterBlockProfile startIcon={<EditIcon/>} text={`${changeText ? 'Edit' : 'Save'}`} click={changeText ? handleCollectInform : handleSendInform}/>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Logout'} click={handleLogout}/>
        </BlockFooterModalProfile>
    );
};

export default FooterModalProfile;