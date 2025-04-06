import React, { useState, useEffect } from "react";
import "./SectionTab.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaCertificate, FaStar } from "react-icons/fa";

const SectionTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      company: "Avyay Technologies",
      role: "Software Developer - App Developer",
      duration: "Dec 2024 - Apr 2025",
      description: "Developed and enhanced a mobile application using React Native with a strong focus on performance optimization and user experience. Designed intuitive, responsive UI components to deliver an engaging interface. Integrated backend APIs for seamless data flow, managed application state, navigation, and third-party libraries. Proactively debugged and resolved performance bottlenecks, ensuring a smooth and bug-free experience.",
    },
    {
      company: "Qspider, Noida",
      role: "MERN Stack Developer",
      duration: "June 2024 - Nov 2024",
      description: "Hands-on training in MERN stack (React.js, Node.js,MongoDB) with real-world project implementation. Built and deployed full-stack applications, focusing on API integration, database management, and performance optimization. Enhanced problem-solving skills through practical exercises and real-time debugging..",
    },
  ];

  const certificates = [
    {
      name: "Full Stack Web Development",
      link: "https://example.com/fullstack-cert",
      description: "Certified in MERN stack development from Code Academy.",
    },
    {
      name: "React Native Mastery",
      link: "https://example.com/reactnative-cert",
      description: "In-depth mobile development course completed with projects.",
    },
  ];

  const activities = [
    {
      title: "IEEE Student Branch Vice Chair",
      description: "Organized multiple tech events and coding competitions, fostering innovation and collaboration among peers.",
    },
    {
      title: "Appathon Winner",
      description: "Won first prize in university-level app development competition using React Native and Firebase.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="tab-content" data-aos="fade-up">
            {experiences.map((exp, index) => (
              <div key={index} className="tab-card">
                <h4>{exp.company}</h4>
                <h5>{exp.role}</h5>
                <small>{exp.duration}</small>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        );
      case "certificates":
        return (
          <div className="tab-content" data-aos="fade-up">
            {certificates.map((cert, index) => (
              <div key={index} className="tab-card">
                <h4>{cert.name}</h4>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        );
      case "activities":
        return (
          <div className="tab-content" data-aos="fade-up">
            {activities.map((act, index) => (
              <div key={index} className="tab-card">
                <h4>{act.title}</h4>
                <p>{act.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="more-info">
      <h2 className="tabs-heading">More About Me</h2>
      <div className="tabs-buttons">
        <button className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>
          <FaBriefcase /> Experience
        </button>
        <button className={activeTab === "certificates" ? "active" : ""} onClick={() => setActiveTab("certificates")}>
          <FaCertificate /> Certificates
        </button>
        <button className={activeTab === "activities" ? "active" : ""} onClick={() => setActiveTab("activities")}>
          <FaStar /> Extra Curricular
        </button>
      </div>
      {renderTabContent()}
    </section>
  );
};

export default SectionTabs;
