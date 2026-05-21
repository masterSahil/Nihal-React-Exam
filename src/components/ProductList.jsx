import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductItem from './ProductItem';

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productData);
  
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === '' || p.category === category)
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <div className="filters-panel">
        <div className="input-group">
          <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for products..." 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>

        <div className="select-wrapper">
          <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Appliances">Appliances</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select className="form-control" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low">Lowest to Highest</option>
            <option value="high">Highest to Lowest</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" margin="auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter settings to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}