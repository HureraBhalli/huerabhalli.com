import './PortfolioSlider.css';

const PortfolioSlider = () => {
  // Row 1 — moves right to left
  const row1 = [
    '/images/slider1.png',
    '/images/work1.png',
    '/images/work3.png',
    '/images/slider2.png'
  ];

  // Row 2 — moves left to right
  const row2 = [
    '/images/slider3.png',
    '/images/slider4.png',
    '/images/slider5.png',
    '/images/slider6.png'
  ];

  // Row 3 — moves right to left
  const row3 = [
    '/images/slider1.png',
    '/images/work1.png',
    '/images/work3.png',
    '/images/slider2.png'
  ];

  // Duplicate arrays for seamless loop
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];
  const row3Loop = [...row3, ...row3];

  return (
    <section className="pslider">
      <div className="pslider__wrapper">

        {/* Row 1 — Right to Left */}
        <div className="pslider__row pslider__row--rtl">
          <div className="pslider__track">
            {row1Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Left to Right */}
        <div className="pslider__row pslider__row--ltr">
          <div className="pslider__track">
            {row2Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 — Right to Left */}
        <div className="pslider__row pslider__row--rtl">
          <div className="pslider__track">
            {row3Loop.map((src, i) => (
              <div className="pslider__card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSlider;