import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpeg";
import IMG7 from "../../assets/portfolio7.png"; 
import IMG8 from "../../assets/portfolio8.png"; 
import { kbfcscreenshots, factoryscreenshots } from "../../data/screenshot";
import AppScreenshotModal from "../ScreenshotModal/AppScreenshotModal";
import { useState } from "react";
import "animate.css";
import AOS from "aos";

const Portfolio = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    images: [],
  });
  

  AOS.init();
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>KBFC App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mukulgoel435/KBFC-App"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <>
              <a
                className="btn btn-primary"
                onClick={() => setModalData({ isOpen: true, images: kbfcscreenshots })}
                style={{ cursor: "pointer" }}
              >
                App Screenshots
              </a>

              <AppScreenshotModal
                isOpen={modalData.isOpen}
                closeModal={() => setModalData({ isOpen: false, images: [] })}
                images={modalData.images}
              />
            </>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Factory ERP App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mukulgoel435/Factory-erp-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <>
              <a
                className="btn btn-primary"
                onClick={() => setModalData({ isOpen: true, images: factoryscreenshots })}
                style={{ cursor: "pointer" }}
              >
                App Screenshots
              </a>

              <AppScreenshotModal
                isOpen={modalData.isOpen}
                closeModal={() => setModalData({ isOpen: false, images: [] })}
                images={modalData.images}
              />
            </>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>JSR FORM</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/0xCipher-max/JSR-Forms"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://jsr-forms.vercel.app/auth"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Personal PortFolio Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/PortFolio-Website/tree/main/portfolio1"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Snapstream</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/SnapStream"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Realtime Code Editor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/CodeShare"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
           
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>University Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/MGuniversity"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mguniversity.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
