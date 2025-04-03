import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import "animate.css";
import AOS from "aos";
const HeaderSocials = () => {
  AOS.init();
  return (
    <div
      className="header__socials"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <a
        href="https://www.linkedin.com/in/mukulgoel1/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/mukulgoel435" target="_blank">
        <FaGithub />
      </a>
      
    </div>
  );
};

export default HeaderSocials;
