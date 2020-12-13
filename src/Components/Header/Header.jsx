import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let icon;
  if (!isOpen) {
    icon = <HiMenu color="white" size="1.5em" />;
  } else {
    icon = <HiX color="white" size="1.5em" />;
  }

  return (
    <div>
      <Navbar style={{ backgroundColor: "#000" }} light expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto text-white py-2" href="/">
            <img
              src="https://image.freepik.com/free-vector/angry-panda-roar-logo-mascot_10316-107.jpg"
              alt="Logo"
              width="120px"
              height="80px"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} style={{ outline: 0 }}>
            {icon}
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto text-center" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/"
                  className="text-white"
                  activeClassName="text-active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/about"
                  className="text-white"
                  activeClassName="text-active"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/service"
                  className="text-white"
                  activeClassName="text-active"
                >
                  Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/sign-in"
                  className="text"
                  activeClassName="text-active"
                >
                  Sign In
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
