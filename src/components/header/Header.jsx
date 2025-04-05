import React, { useEffect, useState } from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "animate.css";
import AOS from "aos";
import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>

      <div className="container header__container">
        <h5 data-aos="flip-down" data-aos-duration="1000">Hello I'm</h5>
        <h1 data-aos="zoom-in" data-aos-duration="1000">Mukul Goel</h1>
        <h5
          className="text-light"
          data-aos="fade-down"
          data-aos-delay="350"
          data-aos-duration="1000"
        >
          <Typewriter
            words={['Frontend Developer', 'App Developer', 'MERN Stack Developer']}
            loop={true}
            cursor
          />
        </h5>
        <CTA />
        <HeaderSocials />
        <div
          className="me"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img
            src={ME}
            alt="me"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="300"
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
