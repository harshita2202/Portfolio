import { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';

export default function Contact() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'var(--bg2)', border: '1px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)',
    fontSize: '0.95rem', outline: 'none',
    marginBottom: '16px',
  };

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <form data-aos="fade-up" onSubmit={handleSubmit} style={{ maxWidth: '580px', margin: '0 auto' }}>
        <input
          name="name" placeholder="Your Name" value={form.name}
          onChange={handleChange} required style={inputStyle}
        />
        <input
          name="email" type="email" placeholder="Your Email" value={form.email}
          onChange={handleChange} required style={inputStyle}
        />
        <textarea
          name="message" placeholder="Your Message" value={form.message}
          onChange={handleChange} required rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button type="submit" disabled={loading} style={{
          width: '100%', padding: '14px',
          background: 'var(--accent)', color: '#fff',
          border: 'none', borderRadius: '8px',
          fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
        }}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p style={{ color: '#1D9E75', textAlign: 'center', marginTop: '12px', fontWeight: 600 }}>
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: '#E24B4A', textAlign: 'center', marginTop: '12px', fontWeight: 600 }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}