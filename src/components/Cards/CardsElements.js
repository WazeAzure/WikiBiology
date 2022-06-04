import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const CardBody = styled.div`
  width: auto;
  height: auto;
  box-shadow: 5px 5px 10px rgba(24,24,24,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
    z-index: 10;
  }
`

export const Btn = styled.button`
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: palevioletred;
    color: white;
  }
`;
