import React from "react";
import { Nav, NavLink, Bars, NavMenu, MobileIcon } from "./NavBarElements";
import Logo from "../../images/logo-7.svg";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NavBar = ({ toggle }) => {
  const scrollDirection = useScrollDirection();

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <Nav hide={scrollDirection === "down"}>
        <NavLink to="/">
          <img
            src={Logo}
            style={{ height: 59, width: 42 }}
            className="ml-2 lg:ml-5"
            alt="Logo"
          />
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
  );
};

export default NavBar;
