import './App.css'
import './services/inventory';
import { BrowserRouter, Routes, Route } from "react-router"
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryContextProvider from './context/InventoryContextProvider';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar/>
          <InventoryContextProvider>
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/products/:id" element={<ProductPage />}/>
                  <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
          </InventoryContextProvider>
        </BrowserRouter>
    </>
  )
}

export default App;
