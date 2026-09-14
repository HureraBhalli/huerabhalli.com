import './TrustedBy.css';

const TrustedBy = () => {
  const logos = [
    { name: 'LongChamp', src: '/images/logo1.png', alt: 'LongChamp' },
    { name: 'Panasonic', src: '/images/logo2.png', alt: 'Panasonic' },
    { name: 'UNICEF',    src: '/images/logo3.png', alt: 'UNICEF' },
    { name: 'Panstar',   src: '/images/logo4.png', alt: 'Panstar' },
    { name: 'TopShop',   src: '/images/logo5.png', alt: 'TopShop' },
    { name: 'Monnettoyage', src: '/images/logo6.png', alt: 'Monnettoyage' },
    { name: 'Kinled',    src: '/images/logo7.png', alt: 'Kinled' },
  ];

  return (
    <section className="trusted">
      {/* ===== Heading ===== */}
      <div className="trusted__heading">
        <span className="trusted__line"></span>
        <p className="trusted__title">Trusted By</p>
        <span className="trusted__line"></span>
      </div>

      {/* ===== Logos Row ===== */}
      <div className="trusted__logos">
        {logos.map((logo) => (
          <div className="trusted__logo" key={logo.name}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;