import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <h2 className="section-title">About <span>Me</span></h2>
      <div data-aos="fade-up" style={{
        display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap',
      }}>
        <div style={{
          width: '160px', height: '160px', borderRadius: '50%',
          background: 'var(--accent)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3rem',
        }}>
          👩‍💻
        </div>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text2)', marginBottom: '16px' }}>
I am a B. Tech CSE student with a passion for Cybersecurity,Backend Development and Web Development. I enjoy coding, Backend as well as front-end
development, and working with databases. Always eager to learn, I have gained hands-on experience through projects and
hackathons. With strong problem-solving skills, I am excited about building innovative tech solutions.</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              ['📍 Location', 'India'],
              ['🎓 Status',   'Student'],
              ['💼 Available', 'For Internships'],
            ].map(([label, val]) => (
              <div key={label}>
                <p style={{ fontWeight: 600, color: 'var(--accent)' }}>{label}</p>
                <p style={{ color: 'var(--text2)' }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}