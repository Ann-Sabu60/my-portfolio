import "./Projects.css";
import bg from "../assets/image.jpg";

function Projects() {
  return (
    <div
      className="projects-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <section id="projects" className="projects">
        <div className="projects-content">

          <h1>My Projects</h1>

          <div className="projects-container">

            <div className="project-card">
              <h3>Steganography Detector</h3>
              <p>
                A specialized tool designed to detect and extract 
                hidden messages or data embedded in encrypted images.
              </p>
            </div>

            <div className="project-card">
              <h3>Intrusion Detection System for IoV</h3>
              <p>
                Developed a robust, accurate, and real-time Intrusion Detection System (IDS) for the Internet of Vehicles (IoV)  
                to detect and prevent various cyber-attacks in both intra-vehicle and external networks.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Projects;