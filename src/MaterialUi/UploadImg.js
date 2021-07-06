import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
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
                    multiple
                    onChange={e => handleAvatarChange(e.target.files[0])}
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" size="small">
                        Upload
                    </Button>
                </label>
            </div>
        </div>

    );
};

export default UploadImg;