import  { useState } from 'react';
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('admin_auth', 'true');
        onLoginSuccess();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login">
      <div className="login__box">

        {/* Logo */}
        <div className="login__brand">
          <div className="login__brand-mark">H</div>
          <h1 className="login__brand-title">Hurera Bhalli</h1>
          <p className="login__brand-subtitle">Admin Panel</p>
        </div>

        {/* Form */}
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label">Password</label>
            <div className="login__input-wrapper">
              <Lock size={18} className="login__input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="login__input"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
              <button
                type="button"
                className="login__toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="login__error">{error}</p>}

          <button
            type="submit"
            className="login__btn"
            disabled={loading || !password}
          >
            {loading ? 'Verifying...' : 'Login'}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="login__footer">🔒 Secure Admin Access</p>
      </div>
    </div>
  );
};

export default LoginPage;