import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import "animate.css";
import AOS from "aos";
const Experience = () => {
  AOS.init();
  return (
    <section id="SkillSet">
      <h2>My SkillSet</h2>

      <div className="container experience__container">
        {/* 🔥🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 Frontend 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥   */}
        <div
          className="experience__frontend"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
       
            
          </div>
        </div>

        {/* 🔥🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 Backend 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥   */}

        <div
          className="experience__backend"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java Core</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP & Laravel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
