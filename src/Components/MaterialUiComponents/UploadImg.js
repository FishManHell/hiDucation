import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        primary: {
            main: '#2fa398',
        }
    },
    input: {
        display: 'none',
    },
}));

const UploadImg = ({setSrc, setAvatar}) => {
    const classes = useStyles();
    const handleAvatarChange = img => {
        if (img && img.type.match('image.*')) {
            setSrc(URL.createObjectURL(img));
            setAvatar(img);
            console.log(URL.createObjectURL(img))
        }
    };


    return (
        <div className={'upload_block'}>
            <div className={classes.root} >
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    onChange={e => handleAvatarChange(e.target.files[0])}
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <IconButton aria-label="upload picture" component="span" className={'iconImgur'}>
                        <AddIcon className={'buttonAddImg'} />
                    </IconButton>
                </label>
            </div>
        </div>

    );
};


export default UploadImg;