import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(name.trim()) {
      dispatch(login(name));
      navigate('/');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="card login-card">
        <div className="login-header">
          <div className="login-icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2>Welcome Back</h2>
          <p>Enter your admin credentials to manage inventory.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group mb-4">
            <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <input type="text" required className="form-control" placeholder="Enter your name..." 
              onChange={(e) => setName(e.target.value)} />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem' }}>
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
}