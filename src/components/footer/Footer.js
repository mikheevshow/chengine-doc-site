import React from 'react'
import './Footer.css'
import {menuItems} from "./menu-data";
import MenuItem from "./MenuItem";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-menu">
                        {menuItems.map(item => {
                            return (<MenuItem {...item}/>)
                        })}
                    </div>
                </div>
                <div className="footer-copyright">Copyright © {new Date().getFullYear()} Chengine</div>
            </footer>
        )
    }
}

export default Footer