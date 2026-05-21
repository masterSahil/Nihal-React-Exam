import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const initProductState = { products: [], loading: false };
const initAuthState = { isAuthenticated: false, user: null };

const productReducer = (state = initProductState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': return { ...state, products: action.payload, loading: false };
    case 'ADD_PRODUCT': return { ...state, products: [...state.products, action.payload] };
    case 'DELETE_PRODUCT': return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    default: return state;
  }
};

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case 'LOGIN': return { isAuthenticated: true, user: action.payload };
    case 'LOGOUT': return { isAuthenticated: false, user: null };
    default: return state;
  }
};

export const store = createStore(combineReducers({ productData: productReducer, auth: authReducer }), applyMiddleware(thunk));