import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logoutProfile} from "../../ReduxToolkit/ReducerUserAuth";
import ButtonFooterBlockProfile from "../MaterialUiComponents/ButtonFooterBlockProfile";
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const BlockFooterModalProfile = styled.footer`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`

const FooterModalProfile = ({handleCollectInform, clearState, handleCloseModal}) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutProfile())
        handleCloseModal()
        clearState()
    }

    const handleExit = () => {
        handleCloseModal()
        // clearState() // TODO нужно подумать есть ли смысл делать очистку стейта
    }


    return (
        <BlockFooterModalProfile>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Exit'} click={handleExit}/>
            <ButtonFooterBlockProfile startIcon={<EditIcon/>} text={'Edit'} click={handleCollectInform}/>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Logout'} click={handleLogout}/>
        </BlockFooterModalProfile>
    );
};

export default FooterModalProfile;