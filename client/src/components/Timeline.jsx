import { useEffect } from 'react';
import AOS from 'aos';

const items = [
  { year: '2024 – Present', title: 'B.Tech Computer Science', place: 'Your University', type: 'edu' },
  { year: '2023',           title: 'Web Dev Internship',      place: 'Some Company',   type: 'work' },
  { year: '2022',           title: 'Class 12th — PCM',        place: 'Your School',    type: 'edu' },
];

export default function Timeline() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="timeline" style={{ background: 'var(--bg)' }}>
      <h2 className="section-title">Education & <span>Experience</span></h2>
      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          position: 'absolute', left: '20px', top: 0, bottom: 0,
          width: '2px', background: 'var(--border)',
        }} />
        {items.map((item, i) => (
          <div key={i} data-aos="fade-right" data-aos-delay={i * 120}
            style={{ display: 'flex', gap: '28px', marginBottom: '36px', paddingLeft: '52px', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '11px', top: '4px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: item.type === 'edu' ? 'var(--accent)' : '#1D9E75',
              border: '3px solid var(--bg)',
            }} />
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '10px', padding: '16px 20px', flex: 1,
            }}>
              <span style={{
                fontSize: '0.78rem', color: 'var(--accent)',
                fontWeight: 600, display: 'block', marginBottom: '4px',
              }}>{item.year}</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.88rem' }}>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}