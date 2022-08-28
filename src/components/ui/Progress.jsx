import React from 'react';
import {makeStyles} from "@mui/styles";
import {CircularProgress} from "@mui/material";

const useStyles = makeStyles({
    progress: {
        display: "flex",
        justifyContent: "center",
        marginTop: 100
    }
});

export const Progress = () => {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            <CircularProgress/>
        </div>
    );
}
