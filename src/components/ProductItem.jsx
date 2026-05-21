import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/actions';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="card">
      <div style={{ marginBottom: '1rem' }}>
        <h5 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>
          {product.title}
        </h5>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {product.category}
        </span>
      </div>
      
      <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--primary-orange)', marginBottom: '1.5rem', flexGrow: 1 }}>
        ${product.price}
      </h3>
      
      {isAuth && (
        <button 
          onClick={() => dispatch(deleteProduct(product.id))} 
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', borderColor: '#fca5a5', color: 'var(--primary-red)' }}>
          
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Remove Product
        </button>
      )}
    </div>
  );
}