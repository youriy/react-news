import * as React from 'react';
import Typography from '@mui/material/Typography';
import {setTitle} from "../../store/newsSlice";
import {useDispatch} from "react-redux";
import {Image} from "../ui/Image.jsx";

export const Author = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setTitle("Автор"));
    }, []);

    return (
        <div>
            <Typography align="center" gutterBottom variant="h3" component="div">
                Программист-разработчик saprovec
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" align="center">
                Web and mobile developer
            </Typography>
            <Image
                src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/john-wick-keanu-reeves-social-1.jpg"
                alt="Jonh Wikc"
            />
        </div>
    );
}
