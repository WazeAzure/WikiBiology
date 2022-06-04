import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  height: 80px;
  background: #1D2A35;
  margin: auto;
  width: 90%;
  display: flex;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    text-decoration: underline 1px solid white;
    transition: all 0.1s ease-in-out;
  }

  &.active {
    {/*color: #15cddc;*/}
    color: ${props => props.icon ? "white" : "#12eb90"};
  }


`;
// 12eb90
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #12eb90;
  padding: 10px 22px;
  color: #fff;
  border: 1px solid #12eb90;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: none;
    border: 1px solid #12eb90 ;
    color: #12eb90;
  }
`;

// #010606
