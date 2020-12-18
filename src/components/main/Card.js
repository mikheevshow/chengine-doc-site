import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import {Link} from "react-router-dom";

class Card extends React.Component {
    render() {
        return (
            <div className="c-body g1">
                <Link to={this.props.link}>
                    <div className="c-content unselectable">
                        <h5 className="c-title text-left">{this.props.title}</h5>
                        <p className="c-text text-left">{this.props.text}</p>
                        {this.props.buttonText !== undefined ?
                            <span className="c-button">{this.props.buttonText}</span> : null
                        }
                    </div>
                </Link>
            </div>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    link: PropTypes.string
}

export default Card