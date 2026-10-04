import { useState, useEffect } from 'react';
import {
  Image, Layers, Megaphone, Smartphone, Palette,
  Plus, Edit3, Trash2, Upload, X, Loader2, Inbox,
} from 'lucide-react';
import { api, getImageUrl } from './api';
import './AdminPanel.css';

// ===== CATEGORIES =====
const CATEGORIES = [
  { key: 'gigs',         label: 'Gigs',           icon: Image,      type: 'gallery', api: api.gigs },
  { key: 'thumbnails',   label: 'Thumbnails',     icon: Layers,     type: 'gallery', api: api.thumbnails },
  { key: 'banners',      label: 'Banners',        icon: Megaphone,  type: 'gallery', api: api.banners },
  { key: 'appProjects',  label: 'App Projects',   icon: Smartphone, type: 'project', api: api.appProjects },
  { key: 'uiuxProjects', label: 'UI/UX Projects', icon: Palette,    type: 'project', api: api.uiuxProjects },
];

const AdminPanel = () => {
  const [activeCategory, setActiveCategory] = useState('gigs');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Delete state
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const activeCat = CATEGORIES.find((c) => c.key === activeCategory);

  // ===== LOAD DATA =====
  const loadItems = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await activeCat.api.getAll();
      setItems(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  let cancelled = false;

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await activeCat.api.getAll();
      if (!cancelled) {
        setItems(res.data || []);
      }
    } catch (err) {
      if (!cancelled) {
        setError(err.message);
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  };

  fetchData();

  return () => {
    cancelled = true;
  };
}, [activeCategory, activeCat.api]);

  // ===== OPEN MODAL =====
  const openCreate = () => {
    setEditingId(null);
    setFormTitle('');
    setFormDesc('');
    setThumbnailFile(null);
    setThumbnailPreview('');
    setImageFile(null);
    setImagePreview('');
    setFormError('');
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setEditingId(item._id);
    setFormTitle(item.title || '');
    setFormDesc(item.description || '');
    setThumbnailFile(null);
    setThumbnailPreview(
      activeCat.type === 'project' ? getImageUrl(item.thumbnail) : ''
    );
    setImageFile(null);
    setImagePreview(
      activeCat.type === 'gallery' ? getImageUrl(item.image) : ''
    );
    setFormError('');
    setModalOpen(true);
  };

  // ===== FILE HANDLERS =====
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // ===== SAVE =====
  const handleSave = async () => {
    setFormError('');

    if (activeCat.type === 'project') {
      if (!formTitle.trim() || !formDesc.trim()) {
        setFormError('Title and description are required');
        return;
      }
      if (!editingId && !thumbnailFile) {
        setFormError('Thumbnail is required');
        return;
      }
    } else {
      if (!editingId && !imageFile) {
        setFormError('Image is required');
        return;
      }
    }

    setSaving(true);
    try {
      const fd = new FormData();

      if (activeCat.type === 'project') {
        fd.append('title', formTitle);
        fd.append('description', formDesc);
        if (thumbnailFile) fd.append('thumbnail', thumbnailFile);
      } else {
        if (imageFile) fd.append('image', imageFile);
      }

      if (editingId) {
        await activeCat.api.update(editingId, fd);
      } else {
        await activeCat.api.create(fd);
      }

      setModalOpen(false);
      await loadItems();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  // ===== DELETE =====
  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await activeCat.api.remove(deleteId);
      setDeleteId(null);
      await loadItems();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  // ===== RENDER =====
  return (
    <div className="ap">

      {/* ===== SIDEBAR ===== */}
      <aside className="ap__sidebar">
        <div className="ap__brand">
          <span className="ap__brand-mark">H</span>
          <div>
            <h3>Hurera</h3>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="ap__nav">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                className={`ap__nav-btn ${activeCategory === cat.key ? 'ap__nav-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ===== MAIN ===== */}
      <main className="ap__main">

        {/* Header */}
        <header className="ap__header">
          <div>
            <h1 className="ap__title">{activeCat.label}</h1>
            <p className="ap__subtitle">
              {items.length} item{items.length !== 1 ? 's' : ''} •{' '}
              {activeCat.type === 'project' ? 'Title + Description + Images' : 'Image only'}
            </p>
          </div>

          <button className="ap__add-btn" onClick={openCreate}>
            <Plus size={18} />
            Add New
          </button>
        </header>

        {/* Content */}
        <div className="ap__content">
          {loading ? (
            <div className="ap__state">
              <Loader2 size={40} className="ap__spinner" />
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="ap__state ap__state--error">
              <p>{error}</p>
              <button onClick={loadItems}>Retry</button>
            </div>
          ) : items.length === 0 ? (
            <div className="ap__state">
              <Inbox size={48} />
              <h3>No items yet</h3>
              <p>Click "Add New" to create your first one</p>
            </div>
          ) : (
            <div className="ap__grid">
              {items.map((item) => (
                <div className="ap__card" key={item._id}>
                  <div className="ap__card-img">
                    <img
                      src={
                        activeCat.type === 'project'
                          ? getImageUrl(item.thumbnail)
                          : getImageUrl(item.image)
                      }
                      alt={item.title || 'item'}
                    />
                  </div>

                  {activeCat.type === 'project' && (
                    <div className="ap__card-body">
                      <h3 className="ap__card-title">{item.title}</h3>
                      <p className="ap__card-desc">{item.description}</p>
                    </div>
                  )}

                  <div className="ap__card-actions">
                    <button className="ap__btn ap__btn--edit" onClick={() => openEdit(item)}>
                      <Edit3 size={14} /> Edit
                    </button>
                    <button className="ap__btn ap__btn--delete" onClick={() => setDeleteId(item._id)}>
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ===== MODAL ===== */}
      {modalOpen && (
        <div className="ap__modal" onClick={() => setModalOpen(false)}>
          <div className="ap__modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="ap__modal-header">
              <h3>{editingId ? `Edit ${activeCat.label}` : `Add ${activeCat.label}`}</h3>
              <button className="ap__modal-close" onClick={() => setModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="ap__modal-body">

              {/* Project fields */}
              {activeCat.type === 'project' && (
                <>
                  <div className="ap__field">
                    <label>Title</label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="Enter title"
                    />
                  </div>

                  <div className="ap__field">
                    <label>Description</label>
                    <textarea
                      value={formDesc}
                      onChange={(e) => setFormDesc(e.target.value)}
                      placeholder="Enter description"
                      rows={4}
                    />
                  </div>

                  <div className="ap__field">
                    <label>Thumbnail</label>
                    <label className="ap__upload">
                      <input type="file" accept="image/*" onChange={handleThumbnailChange} hidden />
                      <Upload size={24} />
                      <span>Click to upload thumbnail</span>
                    </label>
                    {thumbnailPreview && (
                      <div className="ap__preview">
                        <img src={thumbnailPreview} alt="preview" />
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Gallery fields */}
              {activeCat.type === 'gallery' && (
                <div className="ap__field">
                  <label>Image</label>
                  <label className="ap__upload">
                    <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                    <Upload size={24} />
                    <span>Click to upload image</span>
                  </label>
                  {imagePreview && (
                    <div className="ap__preview">
                      <img src={imagePreview} alt="preview" />
                    </div>
                  )}
                </div>
              )}

              {formError && <p className="ap__error">{formError}</p>}

            </div>

            <div className="ap__modal-footer">
              <button className="ap__modal-btn ap__modal-btn--cancel" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
              <button className="ap__modal-btn ap__modal-btn--save" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : editingId ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== DELETE CONFIRM ===== */}
      {deleteId && (
        <div className="ap__modal" onClick={() => setDeleteId(null)}>
          <div className="ap__modal-box ap__modal-box--sm" onClick={(e) => e.stopPropagation()}>
            <div className="ap__modal-body ap__modal-body--center">
              <div className="ap__warn-icon">
                <Trash2 size={28} />
              </div>
              <h3>Delete this item?</h3>
              <p>This action cannot be undone.</p>
            </div>

            <div className="ap__modal-footer">
              <button className="ap__modal-btn ap__modal-btn--cancel" onClick={() => setDeleteId(null)} disabled={deleting}>
                Cancel
              </button>
              <button className="ap__modal-btn ap__modal-btn--danger" onClick={handleDelete} disabled={deleting}>
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPanel;