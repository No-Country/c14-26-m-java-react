import { useState, useEffect, useContext } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { Context } from '../../context';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Cart = () => {
  const { cart, updateCartItem, calculateCartTotal, borrarCart } = useContext(Context);
  const navigate = useNavigate()
  const totalt = calculateCartTotal();
  function generarMensajeDeWhatsApp(compras) {
    let mensaje = "Hola, quisiera realizar un pedido. añadiré estos productos \n Detalles de las compras:\n";
    for (const compra of compras) {
      mensaje += `
      Producto: ${compra.title}
      Precio: $${compra.price}
      Cantidad: ${compra.cantidad}\n\n`;
    }
    return mensaje + `Total: $${totalt}`;
  }

  function compartirComprasEnWhatsApp(numeroDeTelefono) {
    const mensaje = generarMensajeDeWhatsApp(cart);
    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  const removeCart = () => {
    borrarCart()
    localStorage.removeItem('cart')
  }

  const handleAddToCart = () => {

    if (cart.length === 0) {
      Swal.fire(
        'Warning!',
        'Your cart is empty.',
        'error'
      )
      return
    }

    Swal.fire({
      title: 'You want to confirm the purchase?',
      text: "If accepted, you will not be able to go back.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'Redirigiendo al registro de pago.',
          'success'
        )

        // compartirComprasEnWhatsApp('+51916804077')
        axios.post('https://pago-stripe.vercel.app/create-checkout-session', cart)
          .then(res => {

            borrarCart()
            localStorage.removeItem('cart')
            navigate('/')
            window.location.href = `${res.data.url}`


          })
          .catch(err => {
            console.log(err);
            Swal.fire(
              'Warning!',
              'eror server.',
              'error'
            )
          })

      }
    })

  };


  console.log(cart);
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
                      <div className="flex items-center w-[171px] ">
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
                        <p className="text-base ml-2 w-[51px]">${item.price}</p>
                        <p className="text-base ml-2">${item.price * item.cantidad}</p>
                      </div>
                    </div>
                  ))

              }

            </div>

            {/* Resumen del Carrito / derecha */}
            <div className="w-1/3 p-4 mt-[-4] mx-auto text-center">

              <div className="p-4 rounded-md shadow-md">
                <button onClick={removeCart} className=' bg-red-500 text-white px-3 rounded-lg py-2 mb-5'>Remove Cart All</button>
                <p>Subtotal: {totalt}</p>
                <p>Discount: $0.00</p>
                <p>Shipping Costs: $0.00</p>
                <button className="bg-blue-500 text-white p-2 mt-4 rounded-md w-full" onClick={handleAddToCart}>Checkout: {totalt.toFixed(2)}</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Cart;