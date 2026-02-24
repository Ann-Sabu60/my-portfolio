import './About.css'
import bg from '../assets/image.jpg'

function About() {
  return (

    <div
      className="about-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >

      <section id="about" className="about-section">

        <div className="about-container">

          <h2>About Me</h2>

          <p>
            I am a postgraduate MSc Artificial Intelligence student specializing
            in intelligent system evelopment and secure computing environments.
          </p>

          <p>
            My areas of interest include Machine Learning, Robotics,
            Cybersecurity, and Ethical Hacking.
          </p>

          <p>
            I am passionate about designing smart AI-driven applications
            while ensuring secure digital infrastructures in modern
            computing systems.
          </p>

        </div>

      </section>

    </div>

  )
}

export default About