import React, { Component } from 'react';
import { Welcome } from '../components/Home';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class Home extends Component {
  render(){
    return(
      <>
      <Navbar />
      <div className="main" style={{margin: "auto", width: "90%"}}>
        <Welcome />
      </div>
      <Footer />
      </>
    )
  }
}

export default Home;
