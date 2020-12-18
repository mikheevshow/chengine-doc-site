import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

class MenuItem extends React.Component {
    render() {
        const {title, links} = this.props
        return (
            <div>
                <div>{title}</div>
                {links.map(item => {
                    return (<Link to={item.route}>{item.title}</Link>)
                })}
            </div>
        )
    }
}

MenuItem.propTypes = {
    title: PropTypes.string.required,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            route: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MenuItem;