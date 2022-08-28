import React from 'react';
import {News} from './news/News.jsx'
import {Route, Switch} from "react-router-dom";
import {Alert, Container, Slide, Snackbar} from "@mui/material";
import {Header} from "./header/Header.jsx";
import {Main} from "./main/Main.jsx";
import {Currency} from "./currency/Currency.jsx";
import {NotFound} from "./notfound/NotFound.jsx";
import {useDispatch, useSelector} from "react-redux";
import {snackbarClose} from "../store/snackbarSlice";
import {Weather} from "./weather/Weather.jsx";
import {Author} from "./author/Author.jsx";

const SlideTransition = props => <Slide {...props} direction="up"/>;

export const Layout = () => {
    const {message, status, open} = useSelector(state => state.snackbar);
    const dispatch = useDispatch();

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(snackbarClose());
    };

    return (
        <>
            <Header/>
            <Container>
                <Switch>
                    <Route path="/news/:page" exact component={News}/>
                    <Route path="/currency" exact component={Currency}/>
                    <Route path="/weather" exact component={Weather}/>
                    <Route path="/author" exact component={Author}/>
                    <Route path="/" exact component={Main}/>
                    <Route exact component={NotFound}/>
                </Switch>
            </Container>
            <Snackbar
                open={open}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                autoHideDuration={3000}
                TransitionComponent={SlideTransition}
                onClose={handleCloseSnackbar}
            >
                <Alert elevation={6}
                       variant="filled"
                       onClose={handleCloseSnackbar}
                       severity={status}
                       sx={{width: '100%'}}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
