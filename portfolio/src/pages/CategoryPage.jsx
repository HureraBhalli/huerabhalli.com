import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Loader2, Inbox } from 'lucide-react';
import { publicApi, getImageUrl } from '../api/publicApi';
import './CategoryPage.css';

const CATEGORIES = [
  { key: 'gigs',         label: 'Gigs',           type: 'gig',        fetch: () => publicApi.getGigs() },
  { key: 'thumbnails',   label: 'Thumbnails',     type: 'thumbnail',  fetch: () => publicApi.getThumbnails() },
  { key: 'banners',      label: 'Banners',        type: 'banner',     fetch: () => publicApi.getBanners() },
  { key: 'app-projects', label: 'App Projects',   type: 'app',        fetch: () => publicApi.getAppProjects() },
  { key: 'uiux-projects',label: 'UI/UX Projects', type: 'uiux',       fetch: () => publicApi.getUiUxProjects() },
];

const CategoryPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('gigs');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const activeCat = CATEGORIES.find((c) => c.key === activeCategory);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await activeCat.fetch();
        if (!cancelled) setItems(res.data || []);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [activeCategory, activeCat]);

  const handleViewProject = (project) => {
    navigate(`/project/${project._id}?type=${activeCat.type}`);
  };

  return (
    <div className="cp">
      {/* Back button */}
      <button className="cp__back" onClick={() => navigate('/')}>
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* Heading */}
      <div className="cp__header">
        <h1 className="cp__title">All Projects</h1>
        <p className="cp__subtitle">Browse all my work by category</p>
      </div>

      {/* Category tabs */}
      <div className="cp__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`cp__tab ${activeCategory === cat.key ? 'cp__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="cp__state">
          <Loader2 size={40} className="cp__spinner" />
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="cp__state">
          <p>{error}</p>
        </div>
      ) : items.length === 0 ? (
        <div className="cp__state">
          <Inbox size={48} />
          <h3>No projects yet</h3>
          <p>Check back soon</p>
        </div>
      ) : (
        <div className="cp__grid">
          {items.map((project) => (
            <div className="cp__card" key={project._id}>
              <div className="cp__card-img">
                <img
                  src={getImageUrl(project.image || project.thumbnail)}
                  alt={project.title || 'Project'}
                />
              </div>

              {project.title && (
                <div className="cp__card-body">
                  <h3 className="cp__card-title">{project.title}</h3>
                </div>
              )}

              <div className="cp__card-footer">
                <button
                  className="cp__card-btn"
                  onClick={() => handleViewProject(project)}
                >
                  View Project <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;