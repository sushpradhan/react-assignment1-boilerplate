import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        footerStyle: {
            textAlign: 'center',
            position:"fixed",
            height:20,
            padding:10,
            bottom: 10,
            marginTop:10,
            width:"100%",
            color:"green",
            background:"yellow",
        },
    }),
)

const Footer = () => {
    const classes = useStyles();
    return (<div className={classes.footerStyle}>
        Welcome
    </div>);
}

export default Footer;