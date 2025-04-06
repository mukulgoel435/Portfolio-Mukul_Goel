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
      name: "React  - By Internshala",
      link: "https://trainings.internshala.com/view_certificate/6offrr24dc6/ipu51wu3pga/",
      description: "Completed a comprehensive React.js course from Internshala Trainings, covering core concepts such as components, state management, props, hooks, and routing. Gained hands-on experience by building interactive, responsive web applications, and developed a strong foundation in frontend development using modern React practices.",
    },
    {
      name: "Complete 2023 web Development Bootcamp - Udemy ",
      link: "https://www.udemy.com/certificate/UC-3f1263fd-1b8d-4d1f-89ec-7bc00e4d5460/",
      description: "Completed `The Complete 2023 Web Development Bootcamp` on Udemy, a comprehensive, project-based course covering full-stack web development. Gained hands-on experience with HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React. Built real-world web applications, strengthening both frontend and backend development skills.",
    },
  ];

  const activities = [
    {
        title: "Vice-Chair, IEEE Student Branch DIT University",
        duration: "Jan 2023 - Jan 2024",
        description: "Planned and coordinated technical events, workshops, and coding competitions. Led the core committee in fostering peer learning and active student engagement within IEEE.",
    },
    {
        title: "Treasurer, IEEE Student Branch DIT University",
        duration: "Oct 2021 - Dec 2022",
        description: "Managed budgets, event finances, and resource allocation for IEEE events. Ensured transparent fund utilization and contributed to organizing university-level tech activities.",
    }, 
    {
        title: "Student Branch Associate at AISYWLC'21",
        duration: "Dec 2021",
        description: "Participated in national-level IEEE leadership congress. Showcased team projects and contributed to discussions on youth innovation and technology leadership.",
    },
    {
        title: "Student Ambassador of IEEEXtreme 15.0",
        duration: "Aug 2022 - Jul 2023",
        description: "Promoted and coordinated IEEEXtreme among students, encouraging participation in the 24-hour global coding challenge. Supported event logistics and team registrations.",
    } 
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
                <small>{act.duration}</small>
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
