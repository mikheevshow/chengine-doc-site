import React from 'react'
import Section from "./Section";
import ReactHtmlParser from 'react-html-parser';

import './Article.css'

class Article extends React.Component {
    render() {
        let sectionKey = 0;
        const {header, synopsis, sections} = this.props.content
        return (
            <div className="article">
                <h1 className="text-dark article-header">{header}</h1>
                <p className="text-left text-black-50 article-synopsis">{ReactHtmlParser(synopsis)}</p>
                {sections.map(item => {
                    return (<Section key={sectionKey++} content={item}/>)
                })}
            </div>
        )
    }
}

export default Article