import React from 'react';
import './Home.css'
import PersonCards from '../PersonCards';

export function Welcome(props){
    return(
        <div className="main-container">
          <div className="main-left">
            <h1>Welcome to Wikibiology</h1>
            <p>A place to learn biology</p>
          </div>
          <div className="main-right">
            <img src={require("./pentingwoi.png")} />
          </div>
          <div>
            <img src={require("./ed-Copy.png")} />
          </div>
          <div>
            <h1>Get to Know Us</h1>
            <p>WikiBiology was founded in 2022 by our community. The purpose of the community is to help students in SMA Pradita Dirgantara to accel in Biology</p>
          </div>
          <div className="" style={{gridColumn: "1 / 3", textAlign: "center"}}>
            <h1>Meet Our Team</h1>
            <PersonCards />
          </div>
        </div>
    )
}
