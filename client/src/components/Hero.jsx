import { ReactTyped } from 'react-typed';
import FlipProfileCard from './FlipProfileCard';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      
      <div className="hero-left">
        <p className="hero-intro">Hello, I'm</p>

        {/* Typewriter Name */}
        <h1 className="hero-title">
          <ReactTyped
            strings={['Harshita Khandelwal']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h1>

        <div className="hero-buttons">
          <a
            href={`${import.meta.env.VITE_API_URL}/api/cv/pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Download CV (PDF)
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