import { useTheme } from '../context/ThemeContext'; // import this for darka nd light mode
import { useState } from 'react';
// import '../index.css';

const links = ['About','Skills','Projects','Timeline','Certifications','Contact'];

{/*all the components I want in  my portfoilo*/}

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false); {/* open the menu , in mobile*/}

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000 
      , background: 'var(--bg)', borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 8%', height: '64px',
    }}>
   
      <span style={{ fontWeight: 1500, fontSize: '1.3rem', color: 'var(--accent)' }}>
        Portfolio
      </span>
       
       {/*hamburger , for the mobile */}
        <div 
        onClick={() => setOpen(!open)} 
        style={{ display: 'none', cursor: 'pointer' }}
        className="hamburger"
      >
        ☰
      </div>

      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            color: 'var(--text2)', textDecoration: 'none',
            fontSize: '0.95rem', fontWeight: 500,
          }}
          onMouseOver={e => e.target.style.color = 'var(--accent)'} 
          onMouseOut={e  => e.target.style.color = 'var(--text2)'}
          >
            {l}
          </a>
        ))}

        <button onClick={toggleTheme} style={{
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: '8px', padding: '6px 14px',
          cursor: 'pointer', color: 'var(--text)', fontSize: '1rem',
        }}>
          {dark ?  '🤍' : '🖤'} 
        </button>
      </div>
    </nav>
  );
}