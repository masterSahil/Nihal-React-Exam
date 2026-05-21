import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './index.css'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/add" 
              element={<PrivateRoute><ProductForm /></PrivateRoute>} 
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;