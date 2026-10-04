import { useState, useEffect } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { publicApi, getImageUrl } from '../../api/publicApi';
import './Works.css';

const Works = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const stats = [
    { id: 1, number: '140+', label: 'Websites Done' },
    { id: 2, number: '5+',   label: 'Years In tech' },
    { id: 3, number: '400+', label: 'Projects' },
    { id: 4, number: '6+',   label: 'Design Awards' },
  ];

  useEffect(() => {
    let cancelled = false;

    const fetchProjects = async () => {
      try {
        // Saari 5 categories se projects fetch karo
        const [gigs, thumbnails, banners, appProjects, uiuxProjects] = await Promise.all([
          publicApi.getGigs().catch(() => ({ data: [] })),
          publicApi.getThumbnails().catch(() => ({ data: [] })),
          publicApi.getBanners().catch(() => ({ data: [] })),
          publicApi.getAppProjects().catch(() => ({ data: [] })),
          publicApi.getUiUxProjects().catch(() => ({ data: [] })),
        ]);

        if (cancelled) return;

        // Saare projects ko combine karo
        const allProjects = [
          ...(gigs.data || []).map((p) => ({ ...p, type: 'gig' })),
          ...(thumbnails.data || []).map((p) => ({ ...p, type: 'thumbnail' })),
          ...(banners.data || []).map((p) => ({ ...p, type: 'banner' })),
          ...(appProjects.data || []).map((p) => ({ ...p, type: 'app' })),
          ...(uiuxProjects.data || []).map((p) => ({ ...p, type: 'uiux' })),
        ];

        // Latest 4 lo (createdAt ke hisaab se)
        allProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const top4 = allProjects.slice(0, 4);

        setProjects(top4);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProjects();
    return () => { cancelled = true; };
  }, []);

  const handleViewProject = (project) => {
    navigate(`/project/${project._id}?type=${project.type}`);
  };

  const handleViewMore = () => {
    navigate('/projects');
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
      {loading ? (
        <div className="works__loading">
          <Loader2 size={40} className="works__spinner" />
          <p>Loading projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="works__empty">
          <p>No projects yet. Add some from the admin panel.</p>
        </div>
      ) : (
        <div className="works__grid">
          {projects.map((project) => (
            <div className="works__card" key={project._id}>
              <div className="works__card-image">
                <img
                  src={getImageUrl(project.image || project.thumbnail)}
                  alt={project.title || 'Project'}
                />
              </div>

              <div className="works__card-footer">
                <button
                  className="works__card-btn"
                  onClick={() => handleViewProject(project)}
                >
                  View Project
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

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