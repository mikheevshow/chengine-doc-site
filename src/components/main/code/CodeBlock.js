import React from "react";
import PropTypes from "prop-types"
import {Prism} from "react-syntax-highlighter";

import './CodeBlock.css'
import {tomorrow} from "react-syntax-highlighter/src/styles/prism";
import ReactHtmlParser from "react-html-parser";

class CodeBlock extends React.Component {
    render() {
        const {title, text, code} = this.props
        return (
            <div className="code-block">
                <h3 className="code-block-title text-left">{title}</h3>
                <div className="code-block-content">
                    <p className="code-block-text code-block-content-column text-left">{ReactHtmlParser(text)}</p>
                    <Prism s className="code-block-code code-block-content-column" sh language="java" style={tomorrow}>{code}</Prism>
                </div>
            </div>
        )
    }
}

CodeBlock.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
}

export default CodeBlock