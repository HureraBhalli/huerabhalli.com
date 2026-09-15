import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ onHeroClick }) => {
  const handleClick = (id) => {
    if (onHeroClick) onHeroClick(id);
  };

  return (
    <section className="hero" id="home">

      {/* ===== Background Effects ===== */}
      <div className="hero__bg">
        <div className="hero__bg-glow-left"></div>
        <div className="hero__bg-glow-right"></div>
        <div className="hero__bg-gradient-bottom"></div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="hero__container">
        <div className="hero__grid">

          {/* Top Left Tagline */}
          <div className="hero__tagline">
            <p>
              Fast Charging. Sleek<br />
              Design. Well Found.
            </p>
          </div>

          {/* Center Person Image */}
          <div className="hero__image-wrapper">
            <img
              src="/images/hero-person.png"
              alt="Hurera Bhalli"
              className="hero__image"
            />
          </div>

          {/* Right Stats */}
          <div className="hero__stats">
            <div className="hero__avatars">
              <img src="/images/avtar1.png" alt="Client" />
              <img src="/images/avtar2.png" alt="Client" />
              <img src="/images/avtar3.png" alt="Client" />
            </div>
            <h2 className="hero__stats-number">1.2M+</h2>
            <p className="hero__stats-label">Satisfied Clients Worldwide</p>
          </div>

          {/* Bottom Content */}
          <div className="hero__content">
            <p className="hero__name">Hurera Bhalli</p>

            <h1 className="hero__title">
              <span className="hero__title-gold">UNLEASHING</span>{' '}
              <span className="hero__title-white">DIGITAL</span>
              <br />
              <span className="hero__title-white">BEASTS IN CREATIVE CHAOS</span>
            </h1>

            {/* Buttons */}
            <div className="hero__buttons">
              <button
                className="hero__btn hero__btn--primary"
                onClick={() => handleClick('contact')}
              >
                <span className="hero__btn-icon">
                  <ArrowUpRight size={18} />
                </span>
                Plan a free strategy call
              </button>

              <button
                className="hero__btn hero__btn--secondary"
                onClick={() => handleClick('works')}
              >
                <span className="hero__btn-icon">
                  <ArrowUpRight size={18} />
                </span>
                View Our Work
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;