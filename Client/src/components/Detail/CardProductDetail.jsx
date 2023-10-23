import { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating';



// ¡POR EL MOMENTO!!!... Hago solicitud a la API para obtener un solo producto y actualizo el estado con el producto recibido
const CardProductDetail = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        
        axios.get('https://fakestoreapi.com/products/1')                        
            .then(response => {
                setProduct(response.data);     					
            })
            .catch(error => {
                console.error('Error getting the product', error);
            });
    }, []);


  return (
    <div className="container mx-auto h-screen flex flex-col items-center">
        <div className="bg-white rounded-lg p-4 mb-8">
            <div className="flex flex-wrap justify-center items-center space-x-2">

                {/* Contenido del lado izq./ imagen del producto */}
                <div> 
                {product && <img src={product.image} alt={product.title} className="max-w-[300px] ml-12 mr-12"/>}
                </div>
                {/* Contenido del lado derecho/ detalles del producto */}
                <div className="w-1/2 lg:w-1/2 w-[340px]"> 
                {product && (
                    <div>
                        <h2 className="text-lg">{product.title}</h2>
                        <StarRating rating={product.rating} />
                        <p className="text-lg my-2 font-bold mb-10">${product.price}</p>
                        <p className="text-sm my-3">Description:<br/>{product.description}</p>
                        <p className="text-sm my-3 border-b border-gray-300 pb-8 mb-5">Category:<br/>{product.category}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">Add Cart</button>
                    </div>
                )}
                </div>

            </div>
        </div>
    </div>
  )
}


export default CardProductDetail