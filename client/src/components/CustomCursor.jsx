import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot    = useRef(null);
  const ring   = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dot.current) {
        dot.current.style.left = x + 'px';
        dot.current.style.top  = y + 'px';
      }
      if (ring.current) {
        // ring follows with slight delay via CSS transition
        ring.current.style.left = x + 'px';
        ring.current.style.top  = y + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const base = {
    position:  'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex:    99999,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <>
      {/* small solid dot */}
      <div ref={dot} style={{
        ...base,
        width:      '8px',
        height:     '8px',
        background: '#534AB7',
        boxShadow:  '0 0 10px #756be4, 0 0 20px #756be4',
      }} />

      {/* larger trailing ring */}
      <div ref={ring} style={{
        ...base,
        width:      '36px',
        height:     '36px',
        border:     '1.5px solid #534AB7',
        opacity:    0.5,
        transition: 'left 0.1s ease, top 0.1s ease',
      }} />
    </>
  );
}