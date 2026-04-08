import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import {
  FaMapMarkerAlt,
  FaUserGraduate,
  FaBriefcase,
  FaLaptopCode
} from 'react-icons/fa';

export default function About() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div
        data-aos="fade-up"
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        
        {/* Profile Icon Circle */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'var(--accent)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(0,0,0,0.2)',
          }}
        >
          <FaLaptopCode size={60} color="white" />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--text2)',
              marginBottom: '20px',
            }}
          >
            I am a B.Tech CSE student with a passion for Cybersecurity, Backend Development, and Web Development. I enjoy coding, working on both backend and frontend systems,
             and managing databases. Always eager to learn, 
            I have gained hands-on experience through projects and hackathons. With strong problem-solving skills, I am excited about building innovative tech solutions.
          </p>

          {/* Info Section */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap',
            }}
          >
            {[
              [<FaMapMarkerAlt />, 'Location', 'India'],
              [<FaUserGraduate />, 'Status', 'Student'],
              [<FaBriefcase />, 'Available', 'For Internships'],
            ].map(([icon, label, val]) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                
                {/* Icon */}
                <span
                  style={{
                    color: 'var(--accent)',
                    fontSize: '1.2rem',
                  }}
                >
                  {icon}
                </span>

                {/* Text */}
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: 'var(--text2)' }}>
                    {val}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}