import React, { Component } from 'react';
import { Welcome } from '../components/Home';

class Home extends Component {
  render(){
    return(
      <div className="main" style={{margin: "auto", width: "90%"}}>
        <Welcome />
      </div>
    )
  }
}

export default Home;
