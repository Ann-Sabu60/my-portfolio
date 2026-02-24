import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Ann Elsa Sabu</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
  
      </ul>
    </nav>
  )
}

export default Navbar