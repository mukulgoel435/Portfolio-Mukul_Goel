import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "animate.css";
import AOS from "aos";

const Footer = () => {
  AOS.init();

  return (
    <footer>
      <h2 className="footer__name" data-aos="fade-down" data-aos-delay="100">
        Mukul Goel
      </h2>

      <p className="footer__tagline" data-aos="fade-in" data-aos-delay="300">
        "Building with purpose, designing with passion."
      </p>

      <div className="footer__contact" data-aos="fade-up" data-aos-delay="500">
        <p>
          Let’s connect 👉 <a href="mailto:mukulgoel791@gmail.com">mukulgoel791@gmail.com</a>
        </p>
      </div>

      <div className="footer__fun" data-aos="fade-in" data-aos-delay="700">
        <span>🚀 💻 ❤️ ☕ 🎧</span>
      </div>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mukulgoel1/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin data-aos="fade-up" data-aos-delay="900" />
        </a>
        <a href="https://github.com/mukulgoel435" target="_blank" rel="noreferrer">
          <FaGithub data-aos="fade-up" data-aos-delay="1000" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Mukul Goel. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
