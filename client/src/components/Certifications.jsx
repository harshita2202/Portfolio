import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCertificate } from 'react-icons/fa';

const certs = [
  { title: 'Java', issuer: 'SpringBoard', year: '2025', image: '/java.jpeg' },
  { title: 'Cybersecurity', issuer: 'College', year: '2026', image: '/cyber.png' },
];

export default function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
   <section
  id="certifications"
  style={{
    background: 'var(--bg2)',
    padding: '50px 8%',
    margin: 0,
  }}
>
      <h2 className="section-title" style={{ margin: 0, marginBottom: '20px' }}>
        My <span>Certifications</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}
      >
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
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: '#1a1a4e',
                border: '1px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <FaCertificate color="var(--accent)" size={20} />
            </div>

            <h3
              style={{
                fontSize: '0.98rem',
                marginBottom: '8px',
                color: 'var(--text2)',
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {c.title}
            </h3>

            <p
              style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '2px',
              }}
            >
              {c.issuer}
            </p>

            <p
              style={{
                color: '#aaaa',
                fontSize: '0.82rem',
                marginBottom: '16px',
              }}
            >
              {c.year}
            </p>

            <a
              href={c.image}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                borderRadius: '20px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent)';
              }}
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}