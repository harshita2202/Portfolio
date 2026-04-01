import { ReactTyped } from 'react-typed';
import FlipProfileCard from './FlipProfileCard';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', paddingTop: '80px',
      background: 'var(--bg)', gap: '40px', flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: '280px' }}>
        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>
          Hello, I'm
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
          Your Name
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text2)', marginBottom: '30px' }}>
          <ReactTyped
            strings={['Full-Stack Developer', 'MERN Stack Developer', 'React Developer']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href={`${import.meta.env.VITE_API_URL}/api/cv/pdf`}
            target="_blank" rel="noreferrer"
            style={{
              background: 'var(--accent)', color: '#fff',
              padding: '12px 28px', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 600,
            }}>
            Download CV (PDF)
          </a>
          <a href={`${import.meta.env.VITE_API_URL}/api/cv/docx`}
            target="_blank" rel="noreferrer"
            style={{
              background: 'transparent', color: 'var(--accent)',
              padding: '12px 28px', borderRadius: '8px',
              border: '2px solid var(--accent)',
              textDecoration: 'none', fontWeight: 600,
            }}>
            Download CV (Word)
          </a>
        </div>
      </div>

      <FlipProfileCard />
    </section>
  );
}