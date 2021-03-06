import React from 'react'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, NavbarText} from "reactstrap";
import {siteName, links, gitHubLink, gitHubName} from "./header-items";
import {Link} from "react-router-dom"

import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Navbar className="header-content">
                    <NavbarBrand className="header-logo">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>{siteName}</Link>
                    </NavbarBrand>
                    <Nav className="mr-auto">
                        {
                            links.map(item => {
                                return (
                                    <NavItem>
                                        <NavLink>
                                            <Link to={item.route}>{item.name}</Link>
                                        </NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                    <NavbarText>
                        <a target="_blank" rel="noopener noreferrer" className="github-link" href={gitHubLink}>
                            <div className="github-link-item">{gitHubName}</div>
                            <div className="github-link-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path fill-rule="evenodd"
                                          d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                </svg>
                            </div>
                        </a>
                    </NavbarText>
                </Navbar>
            </header>
        )
    }
}

export default Header