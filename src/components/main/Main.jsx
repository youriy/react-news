import * as React from 'react';
import Typography from '@mui/material/Typography';
import {setTitle} from "../../store/newsSlice";
import {useDispatch} from "react-redux";
import {Image} from "../ui/Image.jsx";

export const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setTitle("Главная"));
    }, []);

    return (
        <div>
            <Typography align="center" gutterBottom variant="h3" component="div">
                Супер тестовое задание
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" align="center">
                Просматривайте новости, следите за курсом валют и погодой (кнопки сверху).
            </Typography>
            <Image
                src="https://assets.gq.ru/photos/5d9f467a55f8500008a7fcf8/1:1/w_575,h_575,c_limit/0.jpg"
                alt="А это Жанн Клод Ван Дам"
            />
        </div>
    );
}
