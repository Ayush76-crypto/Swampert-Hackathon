import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from './newscard'
import axios from 'axios';


export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {  articles: []};
        this.article = this.article.bind(this);
    }
    componentDidMount= () => {

        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: ' agriculture and farmers welfare', lang: 'en' },
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': 'c2c16bd498mshbe8d539aec12942p166ddcjsn5b0358c7847f'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.articles)
            this.setState({articles : response.data.articles})

        }).catch(function (error) {
            console.error(error);
        });
    }
    article(){
        this.state.articles.map((data,i) => {
            return <Card obj={data} key={i} />
        })
    }
    render() {
        return (
            < div >
                <h1>AGRICULTURE AND FARMERS WELFARE NEWS</h1>
                <div className="row">
                    {this.article()}
                </div>
            </div >
        )
    }
}

