import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UploadImg from "../MaterialUiComponents/UploadImg";
import {useSelector} from "react-redux";
import LoadingImgProfile from "../Loading/loadingImgProfile";
import ButtonSaveDel from "../MaterialUiComponents/ButtonSaveDel";

const MainBlockImg = styled.section`
  width: 100%;
  padding: 1em 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
`

const MainBlockButtonImg = styled.div`
  margin-top: 1.4em;
`

const BlockImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #d2d8d8;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`

const AvatarProfile = () => {
    const [avatarOne, setAvatar] = useState('');
    const [src, setSrc] = useState('');
    const [disabledSaveButton, setDisabledSaveButton] = useState(false);
    const image = useSelector(state => state.postImgur.img);
    const loadingImg = useSelector(state => state.postImgur.loadingImg);

    // useEffect(() => {
    //     if (image) {
    //         setDisabledSaveButton(true)
    //     } else {
    //         setDisabledSaveButton(false)
    //     }
    // }, [image])

    return (
        <MainBlockImg>
            <MainBlockButtonImg>
                {loadingImg
                    ?
                    <LoadingImgProfile/>
                    :
                    <BlockImg img={src || image}>
                        {src || image ? null : <UploadImg setSrc={setSrc} setAvatar={setAvatar}/>}
                    </BlockImg>
                }
                {src || image ? <ButtonSaveDel setSrc={setSrc} avatarOne={avatarOne}/>: null}
            </MainBlockButtonImg>
        </MainBlockImg>
    );
};

export default AvatarProfile;