import { useEffect } from 'react';
import AOS from 'aos';

const certs = [
  { title: 'React - The Complete Guide', issuer: 'Udemy',    year: '2024', link: '#' },
  { title: 'Node.js Developer Course',   issuer: 'Coursera', year: '2024', link: '#' },
  { title: 'MongoDB Basics',             issuer: 'MongoDB University', year: '2023', link: '#' },
];

export default function Certifications() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="certifications" style={{ background: 'var(--bg2)' }}>
      <h2 className="section-title">My <span>Certifications</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
        {certs.map((c, i) => (
          <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '24px',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏆</div>
            <h3 style={{ fontSize: '1rem', marginBottom: '6px' }}>{c.title}</h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.88rem', marginBottom: '4px' }}>{c.issuer}</p>
            <p style={{ color: 'var(--text2)', fontSize: '0.82rem', marginBottom: '16px' }}>{c.year}</p>
            <a href={c.link} target="_blank" rel="noreferrer" style={{
              color: 'var(--accent)', fontWeight: 600,
              textDecoration: 'none', fontSize: '0.88rem',
            }}>View Certificate →</a>
          </div>
        ))}
      </div>
    </section>
  );
}