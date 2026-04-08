import { ReactTyped } from 'react-typed';
import FlipProfileCard from './FlipProfileCard';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      
      <div className="hero-left">
        <p className="hero-intro">Hello, I'm</p>

       
        <h1 className="hero-title">
          Harshita Khandelwal
        </h1>

        
        <h2 className="hero-role">
          <ReactTyped
            strings={[
              'Backend Developer',
              'Full Stack Developer'
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1200}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </h2>

        <div className="hero-buttons">
          <a
            href={`${import.meta.env.VITE_API_URL}/api/cv/pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Download CV
          </a>
                   <a
            href={`${import.meta.env.VITE_API_URL}/api/cv/docx`}
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Download CV (Word)
          </a>
        </div>
      </div>

      <div className="hero-right">
        <FlipProfileCard />
      </div>

    </section>
  );
}