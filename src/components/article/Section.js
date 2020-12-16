import React from 'react'
import {Prism} from 'react-syntax-highlighter';
import ReactHtmlParser from 'react-html-parser';
import {dracula} from "react-syntax-highlighter/src/styles/prism";


class Section extends React.Component {
    render() {
        const {header, content} = this.props.content
        return (
            <div className="article-section">
                <h2 className="text-dark article-section-header">{header}</h2>
                <div className="article-divider"/>
                {
                    content.map(item => {
                        if (item.type === 'text') {
                            return (<p className="text-left">{ReactHtmlParser(item.content)}</p>)
                        } else if (item.type === 'code') {
                            return (
                                <Prism className="article-code" language={item.language} style={dracula}>
                                    {item.content}
                                </Prism>
                            )
                        }

                        return null
                    })
                }
            </div>
        )
    }
}

export default Section
