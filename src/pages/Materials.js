import React, { Component } from 'react';
import Cards from '../components/Cards';

class Materials extends Component {
  render(){
    return(
      <div style={{margin: "auto", width: "90%", padding: "2rem 0"}}>
        <h1>Materials Page</h1>
        <p>lorem ipsum</p>
        <hr />
        <div style={{display: "flex"}}>
          <Cards title="Cellular Respiration"/>
        </div>
      </div>
    )
  }
}

export default Materials;
