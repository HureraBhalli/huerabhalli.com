import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Web Design',
      description:
        'Modern, high-performance websites designed to capture attention, communicate clearly, and turn visitors into customers.',
    },
    {
      id: '02',
      title: 'Flutter Development',
      description:
        'Pixel-perfect websites and Apps built with smooth animations, CMS integration, responsive layouts, and performance optimized for a seamless user experience.',
    },
    {
      id: '03',
      title: 'Branding',
      description:
        'Creating memorable brand identities with strategic logos, visual systems, and design language that keeps your brand consistent across every touchpoint.',
    },
    {
      id: '04',
      title: 'UI / UX Design',
      description:
        'I design intuitive digital experiences that feel effortless to use. From SaaS platforms to mobile apps and dashboards, every interface is built to improve usability, engagement, and conversion.',
    },
  ];

  return (
    <section className="services">

      {/* ===== Heading ===== */}
      <h2 className="services__title">My Services Includes</h2>

      {/* ===== Services List ===== */}
      <div className="services__list">
        {services.map((service) => (
          <div className="services__item" key={service.id}>

            {/* Top Line */}
            <span className="services__line"></span>

            {/* Content Row */}
            <div className="services__row">

              {/* Left — Number + Title */}
              <div className="services__left">
                <h3 className="services__item-title">{service.title}</h3>
                <span className="services__item-number">{service.id}</span>
              </div>

              {/* Right — Description */}
              <p className="services__item-desc">{service.description}</p>

            </div>
          </div>
        ))}

        {/* Last Line (bottom) */}
        <span className="services__line services__line--last"></span>
      </div>

      {/* ===== CTA Button ===== */}
      <div className="services__cta">
        <button className="services__btn">
          <span className="services__btn-icon">
            <ArrowUpRight size={16} />
          </span>
          Plan a Free Strategy Call
        </button>
      </div>

    </section>
  );
};

export default Services;