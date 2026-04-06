import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';

const projects = [
  {
    title: 'Intelligent API Abuse Detection System (WORKING)',
    desc: 'Built a Spring Boot middleware to monitor API usage and detect abusive patterns. Integrated a ML model for anomaly detection and implemented JWT auth with severity-based responses.',
    tech: ['Spring Boot', 'Java', 'Machine Learning', 'JWT', 'REST APIs'],
    github: 'https://github.com/AayanA20/intelligent-api-monitoring-system',
    // live: '#',
  },

  {
    title: 'Phishing Shield – Cybersecurity Project',
    desc: 'Developed a real-time phishing detection system with website categorization. Used ML models like XGBoost and Random Forest with a Flask API and Chrome Extension for real-time alerts.',
    tech: ['Python', 'XGBoost', 'Random Forest', 'Flask', 'JavaScript', 'Chrome Extension'],
    github: 'https://github.com/harshita2202/CyberProject',
    // live: '#',
  },

  {
    title: 'Event Vibes – College Event Moodboard',
    desc: 'Full-stack platform where students share event photos, reactions, and comments. Features include authentication, media uploads, notifications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/harshita2202/Event-Vibes',
    
  },

  {
    title: 'AI Shipshape Landing Page',
    desc: 'Designed and developed a modern landing page with responsive UI, gradient visuals, and structured sections based on Figma design.',
    tech: ['React', 'CSS', 'Figma', 'UI/UX'],
    github: 'https://github.com/harshita2202/ai-shipshape-landing',
    // live: '#',
  },
];

function TiltCard({ children, style, aos, aosDelay }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    VanillaTilt.init(ref.current, {
      max:         15,
      speed:       400,
      glare:       true,
      'max-glare': 0.2,
      scale:       1.05,
    });
    return () => ref.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <h2 className="section-title">My <span>Projects</span></h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
        gap: '28px',
      }}>
        {projects.map((p, i) => (
          <TiltCard
            key={i}
            aos="fade-up"
            aosDelay={i * 100}
            style={{
              background:   'var(--card)',
              border:       '1px solid var(--border)',
              borderRadius: '14px',
              padding:      '28px',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--accent)' }}>
              {p.title}
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '16px' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  background:   'transparent',
                  color:        'var(--accent)',
                  padding:      '3px 10px',
                  borderRadius: '99px',
                  fontSize:     '0.78rem',
                  fontWeight:   600,
                  border:       '1px solid var(--accent)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                color: 'var(--accent)', fontWeight: 600,
                textDecoration: 'none', fontSize: '0.9rem',
              }}>
                GitHub →
              </a>
              {/* <a href={p.live} target="_blank" rel="noreferrer" style={{
                color: 'var(--text2)', fontWeight: 600,
                textDecoration: 'none', fontSize: '0.9rem',
              }}>
                Live Demo →
              </a> */}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}