import { useRef, useEffect, useState } from 'react';
import { useUI } from '../../contexts/UIContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal } = useUI();
  const { dir, t } = useLanguage();
  const { login, signup, googleSignIn } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Close when keydown ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
      setError('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAuthModalOpen]);

  const handleSignup = async () => {
    setError('');
    setLoading(true);
    try {
      await signup(email, password);
      closeAuthModal();
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      closeAuthModal();
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await googleSignIn();
      closeAuthModal();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <>
      <div id="auth-modal" style={{ display: 'flex' }} role="dialog" aria-modal="true" dir={dir}>
        <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <button 
            id="auth-close" 
            className="close-btn" 
            aria-label="Close" 
            onClick={closeAuthModal}
          >
            ×
          </button>
          <h2>{t('welcome')}</h2>
          <form id="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              id="auth-email"
              className="form-control mb-3"
              placeholder={t('emailComponents')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="auth-password"
              className="form-control mb-3"
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <div
                id="auth-error"
                style={{ color: 'red', fontSize: '0.8rem', marginBottom: '10px' }}
              >
                {error}
              </div>
            )}
            <button
              type="button"
              id="signup-button"
              className="btn btn-warning w-100 mb-2"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? '...' : t('signUp')}
            </button>
            <button
              type="button"
              id="login-button"
              className="btn btn-primary w-100 mb-3"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? '...' : t('logIn')}
            </button>
          </form>
          <hr />
          <div className="or-text">{t('or')}</div>
          <button 
            id="google-signin" 
            className="google-btn" 
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <i className="fab fa-google"></i> {t('continueWithGoogle')}
          </button>
        </div>
      </div>
      <div 
        id="overlay" 
        className="overlay" 
        style={{ display: 'block' }} 
        onClick={closeAuthModal}
      ></div>
    </>
  );
};

export default AuthModal;

