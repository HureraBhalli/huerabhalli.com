import { useState } from 'react';
import LoginPage from './LoginPage';
import AdminPanel from './AdminPanel';

const AdminApp = () => {
  // ✅ Initial state directly sessionStorage se check karo
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('admin_auth') === 'true'
  );

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return <AdminPanel />;
};

export default AdminApp;