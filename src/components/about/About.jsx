import React from "react";
import "./About.css";
import aboutImage from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbStack3 } from "react-icons/tb";
import "animate.css";
// import AOS from 'aos';
import AOS from "aos";
const About = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="fade-left">
          <div className="about__me-image" data-aos="fade-right" data-aos-delay="200">
            <img src={aboutImage} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <TbStack3 className="about__icon" />
              <h5>Tech Stack</h5>
              <small>7+ Technologies</small>
            </article>
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p data-aos="fade-down">
          Hello! I'm Mukul Goel, a passionate MERN Stack Developer and B.Tech CSE graduate. 💻 <br />
🎓 I hold a degree in Computer Science & Engineering from DIT University with a strong foundation in full-stack development. <br />
💼 With hands-on experience as a Software Developer Intern at Avyay Technologies and a MERN Stack Intern at QSpider, I have built and optimized mobile and web applications using React, React Native, Node.js, MongoDB, SQL, and PHP.<br />
🚀 I specialize in crafting dynamic, responsive, and user-friendly applications, integrating backend APIs, managing databases, and enhancing UI/UX for smooth performance.<br />
🌟 As a former Vice-Chair of IEEE Student Branch DIT University and a Student Ambassador for IEEEXtreme 15.0, I have actively contributed to tech communities and events.<br />
💡 I'm always eager to explore new technologies, collaborate on innovative projects, and discuss emerging trends in software development.<br />

Let’s connect and build something amazing together! 🚀
          </p>

          <a href="#contact" className="btn btn-primary" data-aos="fade-down">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
