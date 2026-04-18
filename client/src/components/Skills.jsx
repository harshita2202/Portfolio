import { useEffect } from 'react';
import AOS from 'aos';

const skills = {
  'Programming Languages': ['C', 'Java', 'JavaScript'],

  'Web Development': [
    'HTML',
    'CSS',
    'React.js',
    'Node.js',
    'Express.js',
    'Spring Boot',
    'Maven',
  ],

  'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],

  'Tools & Technologies': ['Git', 'GitHub', 'VS Code', 'Cursor'],
};

export default function Skills() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="skills" style={{ background: 'var(--bg)' }}>
      <h2 className="section-title">My <span>Skills</span></h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '32px',
      }}>
        {Object.entries(skills).map(([cat, list]) => (
          <div
            key={cat}
            data-aos="fade-up"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '28px',
            }}
          >
            <h3 style={{
              color: 'var(--accent)',
              marginBottom: '20px',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}>
              {cat}
            </h3>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}>
              {list.map(skill => (
                <li
                  key={skill}
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontSize: '0.9rem',
                    color: 'var(--text2)',
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}