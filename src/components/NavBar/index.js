import React from 'react';
import { Nav, NavLink, Bars, NavMenu, MobileIcon } from "./NavBarElements";

const NavBar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1 className="pl-5">Logo</h1>
                </NavLink>
                <MobileIcon onClick={toggle}>
                    <Bars />
                </MobileIcon>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/work" activeStyle>
                        Work
                    </NavLink>
                    <NavLink to="/project" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default NavBar