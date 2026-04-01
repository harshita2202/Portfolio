import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const links = ['About','Skills','Projects','Timeline','Certifications','Contact'];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: 'var(--bg)', borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 8%', height: '64px',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--accent)' }}>
        &lt;YourName /&gt;
      </span>

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
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}