import React from "react";
import './Footer.css';
import Insta from '../../img/8.png';
import Facebook from '../../img/7.png';
import Github from '../../img/9.png';

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="f-content">
          <span>i.m.bhabani.00@gmail.com</span>
          <div className="f-icons">
            <img src={Insta} alt="Instagram" style={{ width: '3rem', height: '3rem', marginRight: '1rem' }} />
            <img src={Facebook} alt="Facebook" style={{ width: '3rem', height: '3rem', marginRight: '1rem' }} />
            <img src={Github} alt="Github" style={{ width: '3rem', height: '3rem' }} />
          </div>
        </div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Footer;
