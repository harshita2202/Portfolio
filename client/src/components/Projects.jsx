import { useEffect } from 'react';
import AOS from 'aos';

const projects = [
  {
    title: 'Portfolio Website',
    desc:  'A full-stack MERN portfolio with animations, dark mode, and CV download.',
    tech:  ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live:   'https://yoursite.com',
  },
  {
    title: 'E-Commerce App',
    desc:  'Full-stack shopping app with cart, authentication, and payment integration.',
    tech:  ['React', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    live:   'https://yoursite.com',
  },
  {
    title: 'Chat Application',
    desc:  'Real-time chat app using Socket.io with rooms and private messaging.',
    tech:  ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live:   'https://yoursite.com',
  },
];

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <h2 className="section-title">My <span>Projects</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '28px' }}>
        {projects.map((p, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 100} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '14px', padding: '28px',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '16px' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  background: 'var(--bg2)', color: 'var(--accent)',
                  padding: '3px 10px', borderRadius: '99px',
                  fontSize: '0.78rem', fontWeight: 600,
                  border: '1px solid var(--accent)',
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                color: 'var(--accent)', fontWeight: 600,
                textDecoration: 'none', fontSize: '0.9rem',
              }}>GitHub →</a>
              <a href={p.live} target="_blank" rel="noreferrer" style={{
                color: 'var(--text2)', fontWeight: 600,
                textDecoration: 'none', fontSize: '0.9rem',
              }}>Live Demo →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}