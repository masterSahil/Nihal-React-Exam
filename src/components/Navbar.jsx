import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link className="nav-brand" to="/">StockMaster</Link>
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link className="nav-link" to="/add">Add Product</Link>
              <span className="nav-text">Hi, {user}</span>
              <button onClick={() => dispatch(logout())} className="btn btn-outline">Sign Out</button>
            </>
          ) : (
            <Link className="btn btn-primary" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}