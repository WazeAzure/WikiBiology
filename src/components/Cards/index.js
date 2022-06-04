import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiFillBook } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { CardBody, Btn } from './CardsElements';

function Cards(props){
  return(
      <CardBody>
        <img src={require('./respiration_cellular.jpg')} style={{maxWidth: "20rem"}}/>
        <div className="card-body" style={{padding: "0.5rem 1rem 0.2rem 1rem", background: "white"}}>
          <h2>{props.title}</h2>
          <p>introduction to {props.title}</p>
          <div className="card-footer" style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <p><AiFillBook /> 5 lessons + 2 Exams</p>
            <NavLink to={'/materials/' + "cellular_respiration"}>
            <Btn>Learn More <BiSearch /></Btn>
            </NavLink>
          </div>
        </div>
      </CardBody>
  )
}

export default Cards;
