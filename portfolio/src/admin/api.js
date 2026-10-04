const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3300';

const request = async (endpoint, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
};

export const api = {
  gigs: {
    getAll: () => request('/api/gigs'),
    create: (fd) => request('/api/gigs', { method: 'POST', body: fd }),
    update: (id, fd) => request(`/api/gigs/${id}`, { method: 'PUT', body: fd }),
    remove: (id) => request(`/api/gigs/${id}`, { method: 'DELETE' }),
  },
  thumbnails: {
    getAll: () => request('/api/thumbnails'),
    create: (fd) => request('/api/thumbnails', { method: 'POST', body: fd }),
    update: (id, fd) => request(`/api/thumbnails/${id}`, { method: 'PUT', body: fd }),
    remove: (id) => request(`/api/thumbnails/${id}`, { method: 'DELETE' }),
  },
  banners: {
    getAll: () => request('/api/banners'),
    create: (fd) => request('/api/banners', { method: 'POST', body: fd }),
    update: (id, fd) => request(`/api/banners/${id}`, { method: 'PUT', body: fd }),
    remove: (id) => request(`/api/banners/${id}`, { method: 'DELETE' }),
  },
  appProjects: {
    getAll: () => request('/api/app-projects'),
    create: (fd) => request('/api/app-projects', { method: 'POST', body: fd }),
    update: (id, fd) => request(`/api/app-projects/${id}`, { method: 'PUT', body: fd }),
    remove: (id) => request(`/api/app-projects/${id}`, { method: 'DELETE' }),
  },
  uiuxProjects: {
    getAll: () => request('/api/uiux-projects'),
    create: (fd) => request('/api/uiux-projects', { method: 'POST', body: fd }),
    update: (id, fd) => request(`/api/uiux-projects/${id}`, { method: 'PUT', body: fd }),
    remove: (id) => request(`/api/uiux-projects/${id}`, { method: 'DELETE' }),
  },
};

export const getImageUrl = (filename) => {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  return `${API_URL}/uploads/${filename}`;
};