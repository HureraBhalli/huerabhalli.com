import  { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { publicApi, getImageUrl } from '../api/publicApi';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type') || 'gig';

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchProject = async () => {
      setLoading(true);
      setError('');
      try {
        let res;
        if (type === 'gig') res = await publicApi.getGigById(id);
        else if (type === 'thumbnail') res = await publicApi.getThumbnailById(id);
        else if (type === 'banner') res = await publicApi.getBannerById(id);
        else if (type === 'app') res = await publicApi.getAppProjectById(id);
        else if (type === 'uiux') res = await publicApi.getUiUxProjectById(id);

        if (!cancelled) setProject(res.data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProject();
    return () => { cancelled = true; };
  }, [id, type]);

  if (loading) {
    return (
      <div className="pd__state">
        <Loader2 size={44} className="pd__spinner" />
        <p>Loading project...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pd__state">
        <h2>Project not found</h2>
        <p>{error || 'This project may have been removed'}</p>
        <button onClick={() => navigate('/')} className="pd__back-btn">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  const mainImage = project.image || project.thumbnail;
  const galleryImages = project.images || [];

  return (
    <div className="pd">
      {/* Back button */}
      <button className="pd__back" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back
      </button>

      {/* Hero */}
      <div className="pd__hero">
        <div className="pd__hero-img">
          <img src={getImageUrl(mainImage)} alt={project.title || 'Project'} />
        </div>

        <div className="pd__hero-info">
          <span className="pd__type">{type.toUpperCase()}</span>
          {project.title && <h1 className="pd__title">{project.title}</h1>}
          {project.description && (
            <p className="pd__desc">{project.description}</p>
          )}
        </div>
      </div>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <div className="pd__gallery">
          <h2 className="pd__gallery-title">Gallery</h2>
          <div className="pd__gallery-grid">
            {galleryImages.map((img, i) => (
              <div className="pd__gallery-item" key={i}>
                <img src={getImageUrl(img)} alt={`${project.title} ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;