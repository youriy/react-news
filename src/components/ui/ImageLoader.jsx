import React from 'react';
import {Fade} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    container: {
        width: 150,
        minWidth: 150,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexShrink: 1
    },
    img: {
        borderRadius: 6,
        width: "100%",
        height: "auto"
    }
});

export const ImageLoader = ({image, alt = ''}) => {
    const classes = useStyles();
    const [load, setLoad] = React.useState(false);

    return (
        <div className={classes.container}>
            <Fade in={load}>
                <img
                    className={classes.img}
                    src={image}
                    loading="lazy"
                    alt={alt}
                    onLoad={() => setLoad(true)}
                />
            </Fade>
        </div>
    );
};
