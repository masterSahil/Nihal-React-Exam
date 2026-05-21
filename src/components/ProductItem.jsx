import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/actions';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="card text-center">
      <h5 className="card-title">{product.title}</h5>
      <span className="card-category">{product.category}</span>
      <h3 className="card-price">${product.price}</h3>
      
      {isAuth && (
        <button 
          onClick={() => dispatch(deleteProduct(product.id))} 
          className="btn btn-danger btn-full">
          Remove Product
        </button>
      )}
    </div>
  );
}