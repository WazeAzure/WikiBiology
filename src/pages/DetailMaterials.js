import React from 'react';
import { BrowserRouter, Route, useParams, Switch, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SubChapter from '../components/SubChapter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function DetailMaterials(props){
  let { chapter } = useParams()
  return(
    <>
    <Navbar />
    <div style={{display: "grid", gridTemplateColumns: "18rem auto"}}>
      <Sidebar chapter={chapter}/>
      {/*
      <Routes>
        <Route path="/materials/cellular_respiration/introduction" element={<SubChapter chapter={chapter}/>} />
      </Routes>
      */}
      <Routes>
        <Route path=":subchapter" element={<SubChapter />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default DetailMaterials;
