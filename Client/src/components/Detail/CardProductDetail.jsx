import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import Swal from 'sweetalert2';

const CardProductDetail = () => {
  const { getProductByID, product, cart, addCart } = useContext(Context);

  useEffect(() => {

    const resetProduct = () => {                       // limpio el estado del producto
      getProductByID(-1);                              // -1 ---> estado inicial vacío
    };
    resetProduct();                                    // Limpio el estado antes de cargar un nuevo detalle
    scrollTo(0, 0)
  }, []);

  const renderRating = () => {
    if (!product || !product.rating) {
      return null;
    }

    const roundedRating = Math.round(product.rating.rate);



    return (
      <div className="flex items-center">
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`${index < roundedRating ? 'text-yellow-400' : 'text-gray-300'} text-2xl`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-md text-gray-500 ml-2">{product.rating.count} Reviews</span>
      </div>
    );
  };

  const AddCartConfirm = () => {
    Swal.fire(
      'buen Trabajo!',
      'Producto Agregado con exito!',
      'success'
    )
    addCart({...product, cantidad: 1})
  }

  return (
    <div className="container mx-auto h-screen flex flex-col items-center">
      <div className="bg-white rounded-lg p-4 mb-8">
        <div className="flex flex-wrap justify-center items-center space-x-2">
          {/* Contenido del lado izq./ imagen del producto */}
          <div>
            {product && <img src={product.image} alt={product.title} className="max-w-[300px] ml-12 mr-12" />}
          </div>
          {/* Contenido del lado derecho/ detalles del producto */}
          <div className="lg:w-1/2 w-[340px]">
            {product && (
              <div>
                <h2 className="text-lg">{product.title}</h2>
                {renderRating()} {/* Llamo a la función para mostrar el rating */}
                <p className="text-lg my-2 font-bold mb-10">${product.price}</p>
                <p className="text-sm my-3">Description:<br />{product.description}</p>
                <p className="text-sm my-3 border-b border-gray-300 pb-8 mb-5">Category:<br />{product.category}</p>
                <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5"
                  onClick={AddCartConfirm}
                >Add Cart</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductDetail;
