import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories"
import Detail from "./pages/Detail/Detail"
import Cart from "./pages/Cart/Cart"
import Navbar from './components/navbar/Navbar';

function App() {
  

  return (
   <div>
     <Routes>
     <Route path='/nav' element={<Navbar />}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
      {/* <Route path='/categories/:category' element={<Categories/>}/> */}
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
   </div>
  )
}

export default App
