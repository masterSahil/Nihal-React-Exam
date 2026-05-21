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
      <div className="filters-bar">
        <input type="text" className="form-control" placeholder="Search products..." 
               onChange={(e) => setSearch(e.target.value)} />
        <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Appliances">Appliances</option>
        </select>
        <select className="form-control" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && <p className="text-center mt-2 text-light">No products found.</p>}
    </div>
  );
}