import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import embroiderymachine from './Components/Assets/embroiderymachine.jpeg';
import PreMadeLogo from './Components/Assets/PreMadeLogo.jpeg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/customizable" element={<ShopCategory banner={embroiderymachine} category="customizable"/>}/>
          <Route path="/pre-made" element={<ShopCategory banner={PreMadeLogo} category="pre-made"/>}/>
          <Route path="/product" element={<Product/>}/>
            <Route path="/productid" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
