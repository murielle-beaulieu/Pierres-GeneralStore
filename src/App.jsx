import './App.css'
import './services/inventory';
import { BrowserRouter, Routes, Route } from "react-router"
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryContextProvider from './context/InventoryContextProvider';
// import CartContextProvider from './context/CartContext';

function App() {
  return (
    <>
        <BrowserRouter>
          <InventoryContextProvider>
            {/* <CartContextProvider> */}
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/products/:id" element={<ProductPage />}/>
                  <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
              {/* </CartContextProvider> */}
          </InventoryContextProvider>
        </BrowserRouter>
    </>
  )
}

export default App;
