import bg from '../assets/image.jpg'
import './Hero.css'
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Hero(){
    return(
        <div
  className="hero"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

            <div className="heroContent">
  <h1>Ann Elsa Sabu</h1>

  <h2 className="role">
    AI Developer | Cybersecurity Analyst
  </h2>

  <p className="desc">
    Passionate about building intelligent systems and exploring secure digital infrastructures in modern computing environments.
  </p>
</div>

<div className="hero-contact">

  <div className="contact-item">
    <FaPhone />
    <span>+91 7012460732</span>
  </div>

  <div className="contact-item">
    <FaEnvelope />
    <span>annelsasabu20@gmail.com</span>
  </div>

  <div className="contact-item">
    <FaLinkedin />
    <a
      href="https://www.linkedin.com/in/ann-elsa-sabu-987716375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn Profile
    </a>
  </div>

</div>

        </div>
    )
}

export default Hero