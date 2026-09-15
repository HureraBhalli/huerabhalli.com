import { ArrowUpRight } from 'lucide-react';
import './Works.css';

const Works = ({ onWorksClick }) => {
  const projects = [
    { id: 1, title: 'Take Control Of Your Finances', image: '/images/work1.png' },
    { id: 2, title: 'Financial Dashboard', image: '/images/work2.png' },
    { id: 3, title: 'Mobile App Design', image: '/images/work3.png' },
    { id: 4, title: 'Financial Mobile App', image: '/images/work4.png' },
  ];

  const stats = [
    { id: 1, number: '140+', label: 'Websites Done' },
    { id: 2, number: '5+',   label: 'Years In tech' },
    { id: 3, number: '400+', label: 'Projects' },
    { id: 4, number: '6+',   label: 'Design Awards' },
  ];

  const handleViewProject = () => {
    window.open('https://dribbble.com', '_blank');
  };

  const handleViewMore = () => {
    // Scroll to contact (ya koi bhi section)
    if (onWorksClick) onWorksClick('contact');
    // Ya external URL:
    // window.open('https://dribbble.com', '_blank');
  };

  return (
    <section className="works" id="works">

      {/* ===== Heading ===== */}
      <div className="works__heading">
        <h2 className="works__title">
          Design that Sparks Engagement<br />
          And Inspires Action
        </h2>
        <p className="works__subtitle">
          With over 12 years of experience, I've worked on 2,200+ projects for global clients. I
          specialize in visual design and design research, creating innovative solutions to
          modern design challenges.
        </p>
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="works__grid">
        {projects.map((project) => (
          <div className="works__card" key={project.id}>
            <div className="works__card-image">
              <img src={project.image} alt={project.title} />

              {project.id === 1 && (
                <div className="works__card-overlay">
                  <div className="works__card-topbar">
                    <div className="works__card-brand"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="works__card-footer">
              <button className="works__card-btn" onClick={handleViewProject}>
                View Project
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== View More Projects Button ===== */}
      <div className="works__more">
        <button className="works__more-btn" onClick={handleViewMore}>
          <span className="works__more-icon">
            <ArrowUpRight size={16} />
          </span>
          View More Projects
        </button>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="works__stats">
        <p className="works__stats-tagline">Learning through every path</p>

        <div className="works__stats-grid">
          {stats.map((stat, index) => (
            <div className="works__stats-item" key={stat.id}>
              <h3 className="works__stats-number">{stat.number}</h3>
              <p className="works__stats-label">{stat.label}</p>

              {index < stats.length - 1 && (
                <span className="works__stats-divider"></span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Works;