import React from 'react';
import { Foot } from './FooterElements';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <Foot>
      <div className="footer-container">
      <div className="footer">
        <FaInstagram className="footer-icon"/>
        <a href="mailto:opikprasetyo@student.uns.ac.id">
          <FaEnvelope className="footer-icon"/>
        </a>
        <a href="https://wa.me/6281325645729">
          <FaWhatsapp className="footer-icon"/>
        </a>
      </div>
      <p>&copy; 2022 WikiBiology</p>
      </div>
    </Foot>
  )
}

export default Footer;
