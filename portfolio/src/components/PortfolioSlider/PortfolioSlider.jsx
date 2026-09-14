import { useState, useEffect } from 'react';
import './PortfolioSlider.css';

// Static arrays component ke bahar declare kar diye
const row1 = [
  '/images/slider1.png',
  '/images/work1.png',
  '/images/work3.png',
  '/images/slider2.png',
];

const row2 = [
  '/images/slider3.png',
  '/images/slider4.png',
  '/images/slider5.png',
  '/images/slider6.png',
];

const row3 = [
  '/images/slider1.png',
  '/images/work1.png',
  '/images/work3.png',
  '/images/slider2.png',
];

const allImages = [...new Set([...row1, ...row2, ...row3])];

const PortfolioSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = allImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    });

    Promise.all(preloadImages).then(() => {
      setIsLoaded(true);
    });
  }, []);

  // Duplicate arrays for seamless loop
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];
  const row3Loop = [...row3, ...row3];

  return (
    <section className="pslider">
      {/* ===== Loader ===== */}
      {!isLoaded && (
        <div className="pslider__loader">
          <div className="pslider__spinner"></div>
          <p className="pslider__loader-text">Loading Portfolio...</p>
        </div>
      )}

      {/* ===== Slider ===== */}
      <div className={`pslider__wrapper ${isLoaded ? 'pslider__wrapper--visible' : ''}`}>
        
        {/* Row 1 — Right to Left */}
        <div className="pslider__row pslider__row--rtl">
          <div className="pslider__track">
            {row1Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Left to Right */}
        <div className="pslider__row pslider__row--ltr">
          <div className="pslider__track">
            {row2Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 — Right to Left */}
        <div className="pslider__row pslider__row--rtl">
          <div className="pslider__track">
            {row3Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSlider;