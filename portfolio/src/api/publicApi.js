const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3300';

const request = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
};

export const publicApi = {
  // Gigs
  getGigs: () => request('/api/gigs'),
  getGigById: (id) => request(`/api/gigs/${id}`),

  // Thumbnails
  getThumbnails: () => request('/api/thumbnails'),
  getThumbnailById: (id) => request(`/api/thumbnails/${id}`),

  // Banners
  getBanners: () => request('/api/banners'),
  getBannerById: (id) => request(`/api/banners/${id}`),

  // App Projects
  getAppProjects: () => request('/api/app-projects'),
  getAppProjectById: (id) => request(`/api/app-projects/${id}`),

  // UI/UX Projects
  getUiUxProjects: () => request('/api/uiux-projects'),
  getUiUxProjectById: (id) => request(`/api/uiux-projects/${id}`),
};

export const getImageUrl = (filename) => {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  return `${API_URL}/uploads/${filename}`;
};