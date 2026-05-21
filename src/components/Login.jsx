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
    <div className="container form-container">
      <div className="card text-center">
        <h3 className="mb-2">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter your name" 
                   onChange={(e) => setName(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary btn-full">Login to Manage</button>
        </form>
      </div>
    </div>
  );
}