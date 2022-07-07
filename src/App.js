import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useParams, HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Materials from './pages/Materials';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import DetailMaterials from './pages/DetailMaterials';

function App(){
  return(
    <HashRouter style={{margin: "none", padding: "none"}}>
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/materials' element={<Materials />} />
        <Route path='/materials/:chapter/*' element={<DetailMaterials />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
