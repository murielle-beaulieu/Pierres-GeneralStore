import './App.css'
import './services/inventory';
import { BrowserRouter, Routes, Route } from "react-router"
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryContextProvider from './context/InventoryContextProvider';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
        <BrowserRouter>
          <InventoryContextProvider>
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/products/:id" element={<ProductPage />}/>
                  <Route path="/checkout" element={<CheckoutPage/>}/>
                  <Route path="/*" element={<PageNotFound />}/>
                </Routes>
          </InventoryContextProvider>
        </BrowserRouter>
    </>
  )
}

export default App;
