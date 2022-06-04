import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return(
    <div className="header" style={{background: '#1D2A35'}}>
      <Nav>
        <NavLink to="/">
          <img src={require('./logo.svg').default} alt="WIKIBIOLOGY" />
        </NavLink>
        <Bars />
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
