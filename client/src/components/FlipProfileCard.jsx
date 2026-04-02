export default function FlipProfileCard() {

  function onEnter(e) {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
  }

  function onLeave(e) {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: '300px',
        height: '300px',
        perspective: '1000px',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      <div
        className="flip-inner"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4,0.2,0.2,1)',
        }}
      >

        {/* FRONT — your real photo */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid var(--accent)',
        }}>
          <img
            src="/your-photo.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* BACK — pink waving avatar */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          borderRadius: '50%',
          overflow: 'hidden',
          transform: 'rotateY(180deg)',
          background: '#fff0f5',
          border: '4px solid #fd6eff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="260" height="260" viewBox="0 0 260 260">

            {/* body */}
            <rect x="88" y="152" width="84" height="70" rx="18" fill="#c56eff"/>

            {/* neck */}
            <rect x="118" y="138" width="24" height="22" rx="6" fill="#f9c8b0"/>

            {/* left arm static */}
            <rect
              x="58" y="152" width="32" height="14" rx="7" fill="#e76eff"
              style={{ transformOrigin: '90px 159px', transform: 'rotate(25deg)' }}
            />
            <circle cx="54" cy="170" r="11" fill="#f9c8b0"/>

            {/* right arm waving */}
            <g style={{
              transformOrigin: '170px 158px',
              animation: 'wave 0.9s ease-in-out infinite',
            }}>
              <rect x="170" y="152" width="32" height="14" rx="7" fill="#c76eff"/>
              <rect
                x="193" y="135" width="14" height="30" rx="7" fill="#f06eff"
                style={{ transformOrigin: '193px 152px', transform: 'rotate(-25deg)' }}
              />
              <circle cx="205" cy="126" r="12" fill="#f9c8b0"/>
              <ellipse cx="198" cy="117" rx="4" ry="6" fill="#f9c8b0"/>
              <ellipse cx="206" cy="115" rx="4" ry="7" fill="#f9c8b0"/>
              <ellipse cx="214" cy="118" rx="4" ry="6" fill="#f9c8b0"/>
            </g>

            {/* head */}
            <circle cx="130" cy="106" r="48" fill="#f9c8b0"/>

            {/* hair back layer */}
            <ellipse cx="130" cy="70" rx="48" ry="20" fill="#3d1a00"/>
            <rect x="82" y="66" width="20" height="58" rx="10" fill="#3d1a00"/>
            <rect x="158" y="66" width="20" height="58" rx="10" fill="#3d1a00"/>

            {/* hair top */}
            <ellipse cx="130" cy="66" rx="48" ry="20" fill="#3d1a00"/>

            {/* ears */}
            <ellipse cx="82" cy="108" rx="9" ry="11" fill="#f9c8b0"/>
            <ellipse cx="178" cy="108" rx="9" ry="11" fill="#f9c8b0"/>

            {/* eyebrows */}
            <path d="M106 90 Q115 85 124 90"
              stroke="#3d1a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M136 90 Q145 85 154 90"
              stroke="#3d1a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

            {/* eye whites */}
            <ellipse cx="115" cy="101" rx="10" ry="11" fill="white"/>
            <ellipse cx="145" cy="101" rx="10" ry="11" fill="white"/>

            {/* pupils */}
            <circle cx="116" cy="102" r="6" fill="#3d1a00"/>
            <circle cx="146" cy="102" r="6" fill="#3d1a00"/>

            {/* eye shine */}
            <circle cx="118" cy="99" r="2.2" fill="white"/>
            <circle cx="148" cy="99" r="2.2" fill="white"/>

            {/* eyelashes */}
            <path d="M106 92 Q104 87 103 84"
              stroke="#3d1a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M111 89 Q110 84 110 81"
              stroke="#3d1a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M149 89 Q150 84 150 81"
              stroke="#3d1a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M154 92 Q156 87 158 84"
              stroke="#3d1a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

            {/* nose */}
            <path d="M127 110 Q130 116 133 110"
              stroke="#e8a882" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

            {/* blush */}
            <ellipse cx="100" cy="116" rx="11" ry="6" fill="#ffb3c6" opacity="0.6"/>
            <ellipse cx="160" cy="116" rx="11" ry="6" fill="#ffb3c6" opacity="0.6"/>

            {/* smile */}
            <path d="M112 122 Q130 136 148 122"
              stroke="#d45fd4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

            {/* lips */}
            <path d="M117 127 Q130 133 143 127"
              stroke="#f48fff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

          </svg>
        </div>

      </div>

      <style>{`
        @keyframes wave {
          0%   { transform: rotate(0deg);   }
          20%  { transform: rotate(-30deg); }
          60%  { transform: rotate(25deg);  }
          100% { transform: rotate(0deg);   }
        }
      `}</style>

    </div>
  );
}