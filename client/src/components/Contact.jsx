import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  
    if (name === "message") {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <section id="contact" style={{  padding: '60px 8%', margin:'0', display:'block' }}>
      
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
  
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
   />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="3"
          required
          style={textareaStyle}
        />

        <button type="submit" className="btn primary">
          Send Message
        </button>

      </form>
    </section>
  );
}


const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  outline: 'none',
  fontSize: '0.95rem',
  background: 'var(--bg)',
  color: 'var(--text2)',
};

const textareaStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  outline: 'none',
  fontSize: '0.95rem',
  background: 'var(--bg)',
  color: 'var(--text2)',
  resize: 'none',        
  overflow: 'hidden',    
  lineHeight: '1.5',
};