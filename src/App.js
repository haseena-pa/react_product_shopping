import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';
import NoPage from './containers/NoPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
