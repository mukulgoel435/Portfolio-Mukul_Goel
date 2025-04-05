import React from "react";
import "./Footer.css";
import JB from "../../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "animate.css";
import AOS from "aos";
const Footer = () => {
  AOS.init();
  return (
    <footer>
      <a
        href="#"
        className="footer__logo"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div>
          <img src={JB} alt="" />
        </div>
      </a>

      <ul className="permalinks">
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#" style={{fontWeight:'bold'}}>Home</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#about" style={{fontWeight:'bold'}}>About</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#experience" style={{fontWeight:'bold'}}>Experience</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#services" style={{fontWeight:'bold'}}>Services</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#portfolio" style={{fontWeight:'bold'}}>Portfolio</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#contact" style={{fontWeight:'bold'}}>Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mukulgoel1/">
          <BsLinkedin data-aos="fade-up" data-aos-delay="500" />
        </a>
        <a href="https://github.com/mukulgoel435">
          <FaGithub data-aos="fade-up" data-aos-delay="600" />
        </a>
        
        
      </div>

      <div className="footer__copyright">
        <small>&copy; Mukul Goel Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
