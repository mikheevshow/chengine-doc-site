import React from 'react'

import './Content.css'
import Article from "../article/Article";
import {quickStart} from "../../data/articles/quick-start";

class Content extends React.Component {
    render() {
        return (
            <Article content={quickStart}/>
        );
    }
}

export default Content