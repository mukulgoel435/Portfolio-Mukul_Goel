import React from 'react'
import CV from '../../assets/Resume.pdf';
import "animate.css";
import AOS from 'aos';
const CTA = () => {
  AOS.init();
  return (
    <div className="cta">
      <a href={CV} download className="btn" data-aos="fade-right" data-aos-duration="1000">Download CV</a>
      <a href="#contact" className="btn btn-primary" data-aos="fade-left" data-aos-duration="1000">Let's Talk</a>
    </div>
  )
}

export default CTA;
