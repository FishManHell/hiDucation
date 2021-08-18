import React from 'react';
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Delete as DeleteIcon, Save as SaveIcon} from "@material-ui/icons";
import {delImg, postImgImgur} from "../../ReduxToolkit/ReducerImgur";
import {useDispatch} from "react-redux";

const BlockSaveDeleteButton = styled.div`
  position: absolute;
`

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ButtonSaveDel = ({setSrc, avatarOne}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

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
        <BlockSaveDeleteButton>
            <Button
                variant="contained"
                color={'default'}
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
                color={"default"}
                size="small"
                className={classes.button}
                startIcon={<DeleteIcon/>}
                onClick={() => handleDelete()}
            >
                Delete
            </Button>
        </BlockSaveDeleteButton>
    );
};

export default ButtonSaveDel;