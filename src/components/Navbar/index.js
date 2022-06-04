import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return(
    <div className="header" style={{background: '#1D2A35'}}>
      <Nav>
        <NavLink to="/" icon>
          <img src={require('./logo.png')} alt="WikiBiology" width="100rem"/>
          <p style={{fontSize: "2rem", margin: "0 2rem 0 0", lineHeight: "auto"}}>WikiBiology</p>
        </NavLink>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/materials" activeStyle>
            Materials
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign In </NavBtnLink>
          </NavBtn>
        </NavMenu>
        {/*}<NavBtn>
          <NavBtnLink to="/signin"> Sign In </NavBtnLink>
        </NavBtn>*/}
      </Nav>
    </div>
  )
}

export default Navbar;
