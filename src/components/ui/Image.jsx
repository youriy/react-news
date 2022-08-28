import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 60
    },
    img: {
        width: "100%",
        height: "auto",
        maxWidth: 400,
        borderRadius: 6
    }
});

export const Image = ({src, alt = ''}) => {
    const classes = useStyles();

    return (
        <div className={classes.imgContainer}>
            <img
                className={classes.img}
                src={src}
                alt={alt}
            />
        </div>
    );
}
