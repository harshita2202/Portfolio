import { useEffect } from 'react';
import AOS from 'aos';

const skills = {
  'Programming Languages': [
    ['C', 80],
    ['Java', 80],
    ['JavaScript', 60],
  ],

  'Web Development': [
    ['HTML', 90],
    ['CSS', 90],
    ['React.js', 60],
    ['Node.js', 65],
    ['Express.js', 65],
    ['Spring Boot', 50],
    ['Maven', 70],
  ],

  'Databases': [
    ['MySQL', 70],
    ['MongoDB', 85],
    ['PostgreSQL', 60],
    ['Redis', 20],
  ],

  'Tools & Technologies': [
    ['Git', 85],
    ['GitHub', 90],
    ['VS Code', 95],
    ['Cursor', 80],
  ],
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
        {Object.entries(skills).map(function(entry) {
          const cat  = entry[0];
          const list = entry[1];
          return (
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
                marginBottom: '24px',
                fontSize: '1.1rem',
                fontWeight: 700,
              }}>
                {cat}
              </h3>

              {list.map(function(item) {
                const name = item[0];
                const pct  = item[1];
                return (
                  <div key={name} style={{ marginBottom: '20px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        color: 'var(--text2)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                      }}>
                        {name}
                      </span>
                      <span style={{
                        color: 'var(--accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}>
                        {pct}%
                      </span>
                    </div>

                    <div style={{
                      background: 'var(--bg)',
                      borderRadius: '99px',
                      height: '8px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: pct + '%',
                        height: '100%',
                        background: 'var(--accent)',
                        borderRadius: '99px',
                        transition: 'width 1.2s ease',
                      }}/>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}