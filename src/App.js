import React, { useContext } from 'react';
import './app.css';
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import About from './Component/About/About';
import Skills from './Component/Skills/Skill';
import Experience from './Component/Experience/Experience';
import Education from './Component/Education/Education';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { themeContext } from './Context'; 
function App() {
  const { state } = useContext(themeContext); // Extract state from the context

  const { darkMode } = state; // Extract darkMode from the state

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'} style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>
      {/* Apply appropriate classes based on darkMode */}
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;