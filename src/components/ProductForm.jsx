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
    <div className="container form-container">
      <div className="card">
        <h3 className="text-center mb-2">Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Product Title</label>
            <input required type="text" className="form-control" 
              onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">Price ($)</label>
            <input required type="number" className="form-control" 
              onChange={e => setFormData({...formData, price: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-control" onChange={e => setFormData({...formData, category: e.target.value})}>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Appliances">Appliances</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-full mt-2">Create Product</button>
        </form>
      </div>
    </div>
  );
}