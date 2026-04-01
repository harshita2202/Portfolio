export default function Wave({ flip = false, color = 'var(--bg2)' }) {
  return (
    <div style={{
      lineHeight: 0,
      transform: flip ? 'rotate(180deg)' : 'none',
      marginTop: flip ? '-2px' : '0',
    }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%' }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 Q180 0 360 40 Q540 80 720 40 Q900 0 1080 40 Q1260 80 1440 40 L1440 80 L0 80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}