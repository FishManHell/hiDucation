import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// const theme = createTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 960,
//             lg: 1280,
//             xl: 1920,
//         },
//     },
// })


const useStyles = makeStyles((theme) => ({
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 680,
    //         md: 960,
    //         lg: 1280,
    //         xl: 1920,
    //     },
    // },

    button: {
        margin: theme.spacing(1),
        // [theme.breakpoints.only('sm')]: {
        //     width: '100%'
        // }
    },
}));

const ButtonFooterBlockProfile = ({startIcon, text, click}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={startIcon}
            onClick={() => click()}
        >
            {text}
        </Button>
    );
};

export default ButtonFooterBlockProfile;