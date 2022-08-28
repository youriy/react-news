import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./store/store.js";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import "./sass/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
