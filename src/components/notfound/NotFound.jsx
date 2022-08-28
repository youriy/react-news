import React from 'react';
import {useDispatch} from "react-redux";
import {setTitle} from "../../store/newsSlice";
import Typography from "@mui/material/Typography";
import {Image} from "../ui/Image.jsx";

export const NotFound = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setTitle("404"));
    }, []);

    return (
        <div>
            <Typography align="center" gutterBottom variant="h3" component="div">
                Упс... Не туда...
            </Typography>
            <Image
                src="https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg"
                alt="Терминатор"
            />
        </div>
    );
};
