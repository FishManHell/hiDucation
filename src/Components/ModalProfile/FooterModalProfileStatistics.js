import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logoutProfile} from "../../ReduxToolkit/ReducerUserAuth";
import ButtonFooterBlockProfile from "../MaterialUiComponents/ButtonFooterBlockProfile";
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {device} from "../../Utils/MediaSize";

const BlockFooterModalProfile = styled.footer`
  width: 90%;
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

const FooterModalProfileStatistics = ({handleBooleanForms}) => {
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        handleBooleanForms().setOpenModal(false)
        handleBooleanForms().setShowPassword(true)
        handleBooleanForms().setForm(true)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }
    const handleLogout = () => {
        dispatch(logoutProfile())
        handleCloseModal()
    }

    return (
        <BlockFooterModalProfile>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Exit'} click={handleCloseModal}/>
            <ButtonFooterBlockProfile startIcon={<EditIcon/>} type={'submit'} text={`${handleBooleanForms().changeTextButtonProfile ? 'Edit' : 'Save'}`}/>
            <ButtonFooterBlockProfile startIcon={<ExitToAppIcon/>} text={'Logout'} click={handleLogout}/>
        </BlockFooterModalProfile>
    );
};

export default FooterModalProfileStatistics;