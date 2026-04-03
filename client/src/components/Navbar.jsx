import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import './navbar.css';

const links = ['About', 'Skills', 'Projects', 'Timeline', 'Certifications', 'Contact'];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <span className="logo">Portfolio</span>

      {/* Hamburger */}
      <div 
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? 'active' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}

        <button onClick={toggleTheme} className="theme-btn">
          {dark ? '🤍' : '🖤'}
        </button>
      </div>

    </nav>
  );
}