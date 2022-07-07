import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import "./NavBar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('isLoggedIn') == '1'){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  })

  const handleShowLogOut = () => {
    setShowLogOut(!showLogOut);
  }

  const handleLogOut = () => {
    localStorage.setItem('isLoggedIn', "0");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  }

  return(
    <div className="header" style={{background: '#1D2A35'}}>
      <Nav>
      <script src="https://kit.fontawesome.com/668a92c7cd.js" crossorigin="anonymous"></script>

        <NavLink to="/" icon>
          <img src={require('./LOGO_UNS2.png')} alt="UNS" width="70rem" height="auto"/>
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
          {
            !isLoggedIn &&
            <NavBtn>
              <NavBtnLink to="/signin"> Sign In </NavBtnLink>
            </NavBtn>
          }
        </NavMenu>
        {/*}<NavBtn>
          <NavBtnLink to="/signin"> Sign In </NavBtnLink>
        </NavBtn>*/}
        {
          isLoggedIn &&
          <div id="account">
            <p onClick={handleShowLogOut}>Welcome {localStorage.getItem("user")}</p>
            {
              showLogOut &&
              <ul>
                <li onClick={handleLogOut}>Log Out</li>
              </ul>
            }
          </div>
        }
      </Nav>

    </div>
  )
}

export default Navbar;
