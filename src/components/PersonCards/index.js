import React from 'react';
import { PersonData, Person } from './PersonData';

function PersonCards(props){
  return(
    <div style={{display: "flex", width: "auto", justifyContent: "space-around"}}>
      {PersonData.map((item) => (
        <Person item={item}/>
      ))}
    </div>
  )
}

export default PersonCards;
