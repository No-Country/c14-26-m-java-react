import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories"
import Detail from "./pages/Detail/Detail"
import Cart from "./pages/Cart/Cart"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        {/* <Route path='/categories/:category' element={<Categories/>}/> */}
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App