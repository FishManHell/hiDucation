import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UploadImg from "../../MaterialUi/UploadImg";
import {makeStyles} from '@material-ui/core/styles';
import {Delete as DeleteIcon} from '@material-ui/icons';
import {Save as SaveIcon} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import {delImg, postImgImgur} from "../../ReduxToolkit/ReducerImgur";
import {ClipLoader} from "react-spinners";

const MainBlockImg = styled.section`
  width: 50%;
  padding: 1em 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
`

const MainBlockButtonImg = styled.div`
  margin-top: 1.4em;
`

const BlockImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #F07427;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`

const BlockSaveDeleteButton = styled.div`
  position: absolute;
  top: 50%;
`

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const AvatarProfile = ({avatarOne, setAvatar, src, setSrc}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [disabledSaveButton, setDisabledSaveButton] = useState(false)
    const image = useSelector(state => state.postImgur.img);
    const loadingImg = useSelector(state => state.postImgur.loadingImg);

    // useEffect(() => {
    //     if (image) {
    //         setDisabledSaveButton(true)
    //     } else {
    //         setDisabledSaveButton(false)
    //     }
    // }, [image])

    const handleEdit = (avatar) => {
        if (avatar) {
            dispatch(postImgImgur(avatar))
        }
    }

    const handleDelete = () => {
        dispatch(delImg())
        setSrc('')
    }

    return (
        <MainBlockImg>
            <MainBlockButtonImg>
                {loadingImg ? <ClipLoader color={"#861653"} size={'200'}/> : <BlockImg img={src || image}/>}
                <UploadImg setSrc={setSrc} setAvatar={setAvatar}/>
                {
                    src || image
                        ?
                        <BlockSaveDeleteButton>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                className={classes.button}
                                startIcon={<SaveIcon/>}
                                // disabled={disabledSaveButton}
                                onClick={() => handleEdit(avatarOne)}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                className={classes.button}
                                startIcon={<DeleteIcon/>}
                                onClick={() => handleDelete()}
                            >
                                Delete
                            </Button>
                        </BlockSaveDeleteButton>
                        :
                        null
                }
            </MainBlockButtonImg>
        </MainBlockImg>
    );
};

export default AvatarProfile;