import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {snackbarShow} from "./snackbarSlice";
import {RssParser} from "../core/RssParser";

export const fetchCurrency = createAsyncThunk(
    'news/fetchCurrency',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
            return await response.json();
        } catch (error) {
            dispatch(snackbarShow({
                status: "error",
                message: "Ошибка получения валют"
            }));
            return rejectWithValue(error.message);
        }
    }
);

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (source, {rejectWithValue, dispatch}) => {
        try {
            const parser = new RssParser(source);
            return await parser.parse();
        } catch (error) {
            dispatch(snackbarShow({
                status: "error",
                message: "Ошибка разбора данных",
            }))
            return rejectWithValue(error.message);
        }
    }
);

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        currency: null,
        title: 'Главная',
        loading: false,
    },
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
            document.title = action.payload;
        }
    },
    extraReducers: {
        [fetchNews.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.loading = false;
            state.news = action.payload;
        },
        [fetchNews.rejected]: (state, action) => {
            state.loading = false;
        },
        [fetchCurrency.fulfilled]: (state, action) => {
            state.currency = action.payload.Valute;
        }
    }
});

export default newsSlice.reducer
export const {setTitle} = newsSlice.actions
