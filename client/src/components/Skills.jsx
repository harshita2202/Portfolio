import { useEffect } from 'react';
import AOS from 'aos';

const skills = {
  Frontend:  [['React.js', 85], ['HTML/CSS', 90], ['JavaScript', 80]],
  Backend:   [['Node.js', 75],  ['Express.js', 75], ['REST APIs', 80]],
  'Tools & DB': [['MongoDB', 70], ['Git/GitHub', 85], ['VS Code', 90]],
};

export default function Skills() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="skills" style={{ background: 'var(--bg)' }}>
      <h2 className="section-title">My <span>Skills</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} data-aos="fade-up" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '24px',
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '20px', fontSize: '1.1rem' }}>{cat}</h3>
            {list.map(([name, pct]) => (
              <div key={name} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 500 }}>{name}</span>
                  <span style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>{pct}%</span>
                </div>
                <div style={{ background: 'var(--bg2)', borderRadius: '99px', height: '8px' }}>
                  <div style={{
                    width: `${pct}%`, height: '100%',
                    background: 'var(--accent)', borderRadius: '99px',
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}