import React, { Component } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class Materials extends Component {
  render(){
    return(
      <>
      <Navbar />
      <div style={{margin: "auto", width: "90%", padding: "2rem 0"}}>
        <h1>Materials Page</h1>
        <div style={{display: "flex"}}>
          <Cards title="Cellular Respiration"/>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

export default Materials;
