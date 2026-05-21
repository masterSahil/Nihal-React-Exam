const API_URL = 'http://localhost:5000/products';

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch(API_URL);
  const data = await res.json();
  dispatch({ type: 'FETCH_SUCCESS', payload: data });
};

export const addProduct = (product) => async (dispatch) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  const data = await res.json();
  dispatch({ type: 'ADD_PRODUCT', payload: data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  dispatch({ type: 'DELETE_PRODUCT', payload: id });
};

export const login = (username) => ({ type: 'LOGIN', payload: username });
export const logout = () => ({ type: 'LOGOUT' });