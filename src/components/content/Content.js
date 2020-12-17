import React from 'react'

import './Content.css'
import Article from "../article/Article";
import {quickStart} from "../../data/articles/quick-start";
import MainPage from "../main/MainPage";

class Content extends React.Component {
    render() {
        return (
            <MainPage/>
            // <Article content={quickStart}/>
        );
    }
}

export default Content