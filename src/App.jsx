import './App.css'
import './services/get-inventory';
import Card from './components/Card/Card';
import { BrowserRouter, Routes, Route } from "react-router"
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Header/></>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/products/:id" element={<ProductPage />}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
