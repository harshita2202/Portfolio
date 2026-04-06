import { useEffect } from 'react';
import AOS from 'aos';

const certs = [
  { title: 'Java ', issuer: 'SpringBoard', year: '2025',  image: '/java.jpeg' },
  { title: 'Cybersecurity', issuer: 'College', year: '2026',  image: '/cyber.png'},
  // { title: 'MongoDB Basics', issuer: 'MongoDB University', year: '2023', link: '#' },
];

export default function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="certifications" style={{ background: 'var(--bg2)', padding: '60px 8%' }}>
      
      <h2 className="section-title">
        My <span>Certifications</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
      }}>
        
        {certs.map((c, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '28px',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            
            {/* Icon */}
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: '#1a1a4e',
              border: '1px solid var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              marginBottom: '16px',
            }}>
              📜 
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '0.98rem',
              marginBottom: '8px',
              color: "var(--text2)",
              fontWeight: 600,
              lineHeight: 1.4,
            }}>
              {c.title}
            </h3>

            {/* Issuer */}
            <p style={{
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '2px',
            }}>
              {c.issuer}
            </p>

            {/* Year */}
            <p style={{
              color: '#aaaa',
              fontSize: '0.82rem',
              marginBottom: '16px',
            }}>
              {c.year}
            </p>

      
         <a href={c.image} target="_blank" rel="noreferrer">
  <img 
    src={c.image} 
    alt={c.title}
    style={{
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginTop: '10px',
      border: '1px solid var(--border)',
      cursor: 'pointer'
    }}
  />
</a>

          </div>
        ))}
      </div>
    </section>
  );
}