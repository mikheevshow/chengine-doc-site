import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

import './MenuItem.css'
import ExternalLink from "./ExternalLink";

class MenuItem extends React.Component {
    render() {
        const {title, links} = this.props
        return (
            <div className="menu-item">
                <div className="menu-item-title">{title}</div>
                {links.map(item => {
                    if (item.external) {
                        return (<ExternalLink {...item}/>)
                    } else {
                        return (<Link className="menu-item-link" to={item.route}>{item.title}</Link>)
                    }
                })}
            </div>
        )
    }
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            external: PropTypes.bool,
            route: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MenuItem;