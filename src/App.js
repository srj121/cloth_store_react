import './App.css';
import Header from "./container/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
      <div>
            <Header />
        <BrowserRouter>
            <Routes>
            <Route exact path="/"  element={<ProductListing />}/>
                <Route exact path="/product/:productId" element={<ProductDetails />} />
                <Route>404 Not Found!</Route>
            </Routes>
        </BrowserRouter >
      </div>
  );
};

export default App;
