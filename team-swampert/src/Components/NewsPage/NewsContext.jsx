import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./news.css";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: 'farmer welfare', lang: 'en' },
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': 'c2c16bd498mshbe8d539aec12942p166ddcjsn5b0358c7847f'
            }
        };
        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    return (
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
};
