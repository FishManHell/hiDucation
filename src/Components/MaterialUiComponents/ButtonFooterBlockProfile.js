import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ButtonFooterBlockProfile = ({startIcon, text, type, click}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={startIcon}
            onClick={click}
            type={type}
        >
            {text}
        </Button>
    );
};

export default ButtonFooterBlockProfile;