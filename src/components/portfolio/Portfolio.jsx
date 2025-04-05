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
import ss1 from "../../assets/KBFC Screenshot/Screenshot_1.png";
import ss2 from "../../assets/KBFC Screenshot/Screenshot_2.png";
import ss3 from "../../assets/KBFC Screenshot/Screenshot_3.png";
import ss4 from "../../assets/KBFC Screenshot/Screenshot_4.png";
import ss5 from "../../assets/KBFC Screenshot/Screenshot_5.png";
import ss6 from "../../assets/KBFC Screenshot/Screenshot_6.png";
import ss7 from "../../assets/KBFC Screenshot/Screenshot_7.png";
import ss8 from "../../assets/KBFC Screenshot/Screenshot_8.png";
import ss9 from "../../assets/KBFC Screenshot/Screenshot_9.png";
import ss10 from "../../assets/KBFC Screenshot/Screenshot_10.png";
import ss11 from "../../assets/KBFC Screenshot/Screenshot_11.png";
import s1 from "../../assets/Factory_erp_screenshot/Screenshot_1.png";
import s2 from "../../assets/Factory_erp_screenshot/Screenshot_2.png";
import s3 from "../../assets/Factory_erp_screenshot/Screenshot_3.png";
import s4 from "../../assets/Factory_erp_screenshot/Screenshot_4.png";
import s5 from "../../assets/Factory_erp_screenshot/Screenshot_5.png";
import s6 from "../../assets/Factory_erp_screenshot/Screenshot_6.png";
import s7 from "../../assets/Factory_erp_screenshot/Screenshot_7.png";
import s8 from "../../assets/Factory_erp_screenshot/Screenshot_8.png";
import s9 from "../../assets/Factory_erp_screenshot/Screenshot_9.png";
import s10 from "../../assets/Factory_erp_screenshot/Screenshot_10.png";
import s11 from "../../assets/Factory_erp_screenshot/Screenshot_11.png";
import s12 from "../../assets/Factory_erp_screenshot/Screenshot_12.png";
import s13 from "../../assets/Factory_erp_screenshot/Screenshot_13.png";
import s14 from "../../assets/Factory_erp_screenshot/Screenshot_14.png";    
import AppScreenshotModal from "../ScreenshotModal/AppScreenshotModal";
import { useState } from "react";
import "animate.css";
import AOS from "aos";

const Portfolio = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    images: [],
  });
  
  
  const kbfcscreenshots = [
    { src: ss1, title: "Login Page" },
    { src: ss2, title: "Dashboard" },
    { src: ss3, title: "Purchase List" },
    { src: ss4, title: "Purchase Info" },
    { src: ss5, title: "Tour and Travel List" },
    { src: ss6, title: "Tour and Travel Info" },
    { src: ss7, title: "Expense List" },
    { src: ss8, title: "Create Expense Request" },
    { src: ss9, title: "Modal to upload expense" },
    { src: ss10, title: "Expense/Advance Info" },
    { src: ss11, title: "Profile" }
  ];

  const factoryscreenshots = [
    { src: s1, title: "Login Page" },
    { src: s2, title: "Dashboard" },
    { src: s3, title: "Self Attendance" },
    { src: s4, title: "Attendance check in - geographic check" },
    { src: s5, title: "Attendance History" },
    { src: s6, title: "Site attendance -  Employee Wise" },
    { src: s7, title: "Select date and site for DPR" },
    { src: s8, title: "PO Select for DPR" },
    { src: s9, title: "DPR List" },
    { src: s10, title: "Employee select for DPR Entry" },
    { src: s11, title: "DPR Filling acc to Service/Item" },
    { src: s12, title: "Expense/Advance List" },
    { src: s13, title: "Create Expense/Advance Request" },
    { src: s14, title: "Profile Page" }
  ];

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
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>smemorygame</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/Simon-memory"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://smemorygame.netlify.app/"
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
