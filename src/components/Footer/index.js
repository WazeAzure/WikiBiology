import React from 'react';
import { Foot } from './FooterElements';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer(){
  return(
    <Foot>
      <FaInstagram />
      <FaEnvelope />
      <FaWhatsapp />
      <br />
      <br />
      <p>&copy; 2022 WikiBiology</p>
    </Foot>
  )
}

export default Footer;
