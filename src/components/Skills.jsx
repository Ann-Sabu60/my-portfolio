import React from "react";
import "./Skills.css";
import bg from "../assets/image.jpg";

function Skills() {
  return (
    <div
      className="skills-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <section className="skills section" id="skills">

        <div className="skills-content">
          <h1>My Skills</h1>

          <div className="skills-container">

            <div className="skill-card">
              <h3>Cybersecurity</h3>
              <p>
                Network Monitoring, Wireshark, Nmap, Autopsy,
                Network Scanning, Vulnerability Analysis,
                Basic Penetration Testing Attacks
              </p>
            </div>

            <div className="skill-card">
              <h3>Web Development</h3>
              <p>
                HTML, CSS, JavaScript,
                React.js, Responsive Design
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Skills;