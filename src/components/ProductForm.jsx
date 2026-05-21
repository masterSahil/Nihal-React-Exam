import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
  const [formData, setFormData] = useState({ title: '', price: '', category: 'Electronics' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...formData, price: Number(formData.price), id: Date.now().toString() }));
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="card login-card" style={{ maxWidth: '500px' }}>
        
        <div className="login-header">
          <div className="login-icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2>Add New Product</h2>
          <p>Expand your inventory catalog with a new item.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-4">
            <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <input 
              required 
              type="text" 
              className="form-control" 
              placeholder="e.g., Wireless Mouse"
              onChange={e => setFormData({...formData, title: e.target.value})} 
            />
          </div>

          <div className="input-group mb-4">
            <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input 
              required 
              type="number" 
              className="form-control" 
              placeholder="0.00"
              onChange={e => setFormData({...formData, price: e.target.value})} 
            />
          </div>

          <div className="input-group mb-4" style={{ display: 'flex' }}>
            <div className="select-wrapper" style={{ width: '100%' }}>
              <select className="form-control" onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Appliances">Appliances</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Product
          </button>
          
        </form>
      </div>
    </div>
  );
}