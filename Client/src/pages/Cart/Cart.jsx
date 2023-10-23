import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';

const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/1')
      .then(response => {
        setSelectedProduct(response.data);
      })
      .catch(error => {
        console.error('Error getting the product', error);
      });
  }, []);

  const handleAddToCart = () => {
    // Lógica para agregar el producto seleccionado al carrito y calcular el total.
    // Asumiremos que se agrega al estado local "cart".
    setTotal(total + (selectedProduct.price * quantity));
  };

  return (
    <div>
      <Navbar />
      <Navigation />
      <div className="min-h-screen flex justify-center mt-[-4]">
        <div className="bg-white w-full max-w-7xl p-4 rounded-md shadow-sm">
          {/* Contenedor flex para información del producto y carrito */}
          <div className="flex">
            {/* Información del Producto Seleccionado / izquierda */}
            <div className="w-2/3 p-2">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-8">Your Cart</h2>
              {selectedProduct && (
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-12 h-12 mr-2"
                    />
                    <p className="text-base font-semibold">{selectedProduct.title}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      className="text-black p-1 rounded-full mr-2"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-black p-1 rounded-full ml-2"
                    >
                      +
                    </button>
                    <p className="text-base ml-2">${selectedProduct.price}</p>
                    <p className="text-base ml-2">${selectedProduct.price * quantity}</p>
                  </div>
                </div>
              )}
            </div>
            {/* Resumen del Carrito / derecha */}
            <div className="w-1/3 p-4 mt-[-4] mx-auto text-center"> 
              {selectedProduct && (
                <div className="p-4 rounded-md shadow-md">
                  <p>Subtotal: {`$${(selectedProduct.price * quantity).toFixed(2)}`}</p>
                  <p>Discount: $0.00</p>
                  <p>Shipping Costs: $0.00</p>
                  <button className="bg-blue-500 text-white p-2 mt-4 rounded-md w-full" onClick={handleAddToCart}>Checkout: {`$${(selectedProduct.price * quantity).toFixed(2)}`}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}  

export default Cart;