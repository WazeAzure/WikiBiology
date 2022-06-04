import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './PersonCard.css';

export const PersonData = [
  {
    name: "Opik Prasetyo",
    quotes: "An Apple A Day Keeps Away the Doctor",
    avatar: require("./opik.jpg"),
    sosmed: ['085345871185', 'opikprasetyo@student.uns.ac.id', 'https://id.linkedin.com/in/opik-prasetyo-b36234230/en?trk=people-guest_people_search-card']
  }
]

export function Person(props){
    return(
      <div className="person-card">
        <img src={props.item.avatar} width/>
        <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>{props.item.name}</p>
        <p style={{fontSize: "1rem", fontWeight: "bold"}}>"{props.item.quotes}"</p>
        <hr />
        <div className="person-icons">
          <Link to={"wa.me/"+props.item.sosmed[0]} style={{color: "rgba(18,235,144,1)"}}>
            <FaIcons.FaWhatsapp />
          </Link>
          <Link to={"mailto:" + props.item.sosmed[1]} style={{color: "rgba(18,235,144,1)"}}>
            <HiIcons.HiOutlineMail />
          </Link>
          <Link to={props.item.sosmed[2]} style={{color: "rgba(18,235,144,1)"}}>
            <AiIcons.AiOutlineLinkedin />
          </Link>
        </div>
      </div>
    )
}
