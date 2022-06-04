import React from 'react';
import { SideComponent,SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Nav, NavIcon, SideComponentStyle } from './SidebarElements';
import './Sidebar.css'


function Sidebar(props){
  console.log(SidebarData)
  return(
    <>
      <Nav>
        <p><Link to="/materials"><AiIcons.AiFillHome /></Link> > <Link to="introduction">Cell Respiration</Link></p>
        <ul style={{margin: "0", padding: "0"}}>
          { SidebarData.map((item) => (
            <SideComponent item={item} chapter={props.chapter}  />
          ))}
        </ul>
      </Nav>
    </>
  )
}

export default Sidebar;
