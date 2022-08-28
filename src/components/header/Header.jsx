import React, {memo} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const Header = memo(() => {
    const {title} = useSelector(state => state.news);
    const history = useHistory();

    return (
        <AppBar position="sticky" sx={{mb: 4}}>
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {title}
                </Typography>
                <Button onClick={() => history.push("/")} color="inherit">Главная</Button>
                <Button onClick={() => history.push("/news/1")} color="inherit">Новости</Button>
                <Button onClick={() => history.push("/currency")} color="inherit">Валюта</Button>
                <Button onClick={() => history.push("/weather")} color="inherit">Погода</Button>
                <Button onClick={() => history.push("/author")} color="inherit">Автор</Button>
            </Toolbar>
        </AppBar>
    );
})
