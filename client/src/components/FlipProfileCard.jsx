import './FlipProfileCard.css';

export default function FlipProfileCard() {

  function onEnter(e) {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
  }

  function onLeave(e) {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
  }

  return (
    <div
      className="flip-card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flip-inner">

        {/* FRONT IMAGE */}
        <div className="flip-front">
          <img src="/photo3.jpeg" alt="Profile Front" />
        </div>

        {/* BACK IMAGE */}
        <div className="flip-back">
          <img src="/photo3.jpeg" alt="Profile Back" />
        </div>

      </div>
    </div>
  );
}