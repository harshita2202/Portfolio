import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Wave from './components/Wave';
import './index.css';

function Home() {
  return (
    <>
      <Hero />

      <Wave color="var(--bg2)" />
      <About />
      <Wave color="var(--bg)" flip={true} />

      <Skills />

      <Wave color="var(--bg2)" />
      <Projects />
      <Wave color="var(--bg)" flip={true} />

      <Timeline />

      <Wave color="var(--bg2)" />
      <Certifications />
      <Wave color="var(--bg)" flip={true} />

      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}