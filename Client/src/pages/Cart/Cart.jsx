import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';
import { Context } from '../../context';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, updateCartItem, calculateCartTotal } = useContext(Context);

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

    Swal.fire({
      title: 'Desea Confirmar la compra?',
      text: "Si acepta no podrá volver atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Deseo confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'Redirigiendo al registro de pago.',
          'success'
        )
      }
    })

  };

  const totalt = calculateCartTotal();

  return (
    <div>

      <Navigation />
      <div className="min-h-screen flex justify-center mt-[-4]">
        <div className="bg-white w-full max-w-7xl p-4 rounded-md shadow-sm">
          {/* Contenedor flex para información del producto y carrito */}
          <div className="flex">
            {/* Información del Producto Seleccionado / izquierda */}
            <div className="w-2/3 p-2">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-8">Your Cart</h2>

              {

                cart.length === 0 ?
                  <p>El Carrito esta vacio</p>
                  :
                  cart.map(item => (
                    <div className="flex items-center justify-between mb-2" key={item.id} >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 mr-2"
                        />
                        <p className="text-base font-semibold">{item.title}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCartItem(item.id, -1)}
                          className="text-black p-1 rounded-full mr-2"
                        >
                          -
                        </button>
                        <span>{item.cantidad}</span>
                        <button
                          onClick={() => updateCartItem(item.id, 1)}
                          className="text-black p-1 rounded-full ml-2"
                        >
                          +
                        </button>
                        <p className="text-base ml-2">${item.price}</p>
                        <p className="text-base ml-2">${item.price * item.cantidad}</p>
                      </div>
                    </div>
                  ))

              }

            </div>
            {/* Resumen del Carrito / derecha */}
            <div className="w-1/3 p-4 mt-[-4] mx-auto text-center">

              <div className="p-4 rounded-md shadow-md">
                <p>Subtotal: {totalt}</p>
                <p>Discount: $0.00</p>
                <p>Shipping Costs: $0.00</p>
                <button className="bg-blue-500 text-white p-2 mt-4 rounded-md w-full" onClick={handleAddToCart}>Checkout: {totalt}</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Cart;