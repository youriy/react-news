import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchNews, setTitle} from "../../store/newsSlice"
import {Divider, Pagination, Stack, Typography} from "@mui/material";
import {useHistory, useParams} from "react-router-dom";
import {ImageLoader} from "../ui/ImageLoader.jsx";
import {makeStyles} from "@mui/styles";
import {Progress} from "../ui/Progress.jsx";

const COUNT_NEWS = 10;

const useStyles = makeStyles({
    root: {
        display: "flex",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.7
        }
    },
    text: {
        marginLeft: 30
    }
});

export const News = () => {
    const {news} = useSelector(state => state.news);
    const {page} = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(page ? Number(page) - 1 : 0);
    const history = useHistory();

    React.useEffect(() => {
        dispatch(setTitle("Новости"));

        if (!news.length) {
            dispatch(fetchNews("https://aif.ru/rss/politics.php"));
        }
    }, []);

    React.useEffect(() => {
        if (page !== undefined) {
            setCurrentPage(Number(page) - 1);
        }
    }, [page]);

    if (!news.length) {
        return <Progress/>;
    }

    return (
        <>
            <Stack mt={4} spacing={1} divider={<Divider/>}>
                {news.slice(currentPage * COUNT_NEWS, (currentPage + 1) * COUNT_NEWS).map((it, index) => <Item
                    key={index} {...it} />)}
            </Stack>
            <Pagination
                onChange={(_, num) => history.push("/news/" + num)}
                sx={{m: 5, display: "flex", justifyContent: 'center'}}
                count={Math.ceil(news.length / COUNT_NEWS)}
                page={Number(page) || 1}
                size="large"
            />
        </>
    )
};

const Item = memo(({title = '', link, pubDate, description = '', enclosure}) => {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
            onClick={() => window.open(link, '_blank')}
        >
            {enclosure && <ImageLoader image={enclosure} alt={title}/>}
            <div className={enclosure ? classes.text : null}>
                <Typography component="div" gutterBottom variant="h6">
                    {title}
                </Typography>
                <Typography component="span" variant="body1">
                    {description}
                </Typography>
            </div>
        </div>
    );
});
