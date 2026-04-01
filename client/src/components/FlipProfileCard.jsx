export default function FlipProfileCard() {
  const styles = {
    scene: {
      width: '220px', height: '220px',
      perspective: '900px', cursor: 'pointer',
      flexShrink: 0,
    },
  };

  return (
    <div style={styles.scene}
      onMouseEnter={e => e.currentTarget.querySelector('.flip-card').style.transform = 'rotateY(180deg)'}
      onMouseLeave={e => e.currentTarget.querySelector('.flip-card').style.transform = 'rotateY(0deg)'}
    >
      <div className="flip-card" style={{
        width: '100%', height: '100%', position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.65s cubic-bezier(0.4,0.2,0.2,1)',
      }}>
        {/* FRONT */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden', borderRadius: '50%', overflow: 'hidden',
          background: '#D3D1C7', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: '#5F5E5A', fontSize: '13px' }}>Your Photo</span>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden', borderRadius: '50%', overflow: 'hidden',
          transform: 'rotateY(180deg)',
          background: '#EEEDFE', border: '3px solid #AFA9EC',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '4px',
        }}>
          {/* Speech bubble */}
          <div style={{
            position: 'absolute', top: '-14px', left: '50%',
            transform: 'translateX(-50%)',
            background: 'white', border: '1.5px solid #ccc',
            borderRadius: '12px', padding: '5px 12px',
            fontSize: '11px', whiteSpace: 'nowrap', zIndex: 10,
          }}>
            Hey! I'm [Name] ✨
          </div>
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="54" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="2"/>
            <circle cx="55" cy="44" r="22" fill="#F4C0D1"/>
            <ellipse cx="55" cy="98" rx="30" ry="20" fill="#7F77DD"/>
            <rect x="30" y="58" width="50" height="28" rx="6" fill="#7F77DD"/>
            <circle cx="47" cy="42" r="3.5" fill="#3C3489"/>
            <circle cx="63" cy="42" r="3.5" fill="#3C3489"/>
            <path d="M48 51 Q55 57 62 51" stroke="#993556" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <path d="M34 28 Q55 14 76 28" stroke="#2C2C2A" strokeWidth="5" fill="none" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#534AB7', fontWeight: 600 }}>Full-Stack Dev</span>
        </div>
      </div>
    </div>
  );
}