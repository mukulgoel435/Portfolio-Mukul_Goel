import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "animate.css";
import AOS from "aos";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_t026bbo",
      "template_8lmzfqn",
      form.current,
      "0xg_rBjtbNoIAHHzS"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  AOS.init();
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mukulgoel791@gmail.com</h5>
            <a href="mailto:mukulgoel791@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mukul Goel</h5>
            <a
              href="https://www.linkedin.com/in/mukulgoel1/"
              target="_blank"
            >
              Click on message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-6398963929</h5>
            <a href="https://wa.me/6398963929" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            data-aos="fade-left"
            data-aos-delay="400"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            data-aos="fade-left"
            data-aos-delay="600"
          ></textarea>
          <button type="submit" className="btn btn-primary"
          data-aos="fade-down"
          data-aos-delay="800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
