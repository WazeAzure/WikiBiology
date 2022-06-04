import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #15171c;
  padding-left: 2rem;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  position: sticky;
`

export const NavIcon = styled(Link)`
  margin-left: 2rem;
`

export const SideComponentStyle = styled(Link)`
background: #15171c;
padding-left: 2rem;
color: white;
display: flex;
justify-content: flex-start;
align-items: left;
flex-direction: column;
position: sticky;
`
