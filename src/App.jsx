import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="mainContainer">

      <Navbar/>

      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
    

    </div>
  )
}


export default App