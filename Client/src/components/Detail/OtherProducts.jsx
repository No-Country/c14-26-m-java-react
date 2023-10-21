import { useState, useEffect } from 'react';
import axios from 'axios';

const OtherProducts = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        
        axios.get('https://fakestoreapi.com/products/2')       
            .then(response => {
                setProduct(response.data);     			
            })
            .catch(error => {
                console.error('Error getting the product', error);
            });
    }, []);

  return (
    <div className='mt-60 xl:mt-[-16em] lg:mt-[-11em] md:mt-[13em] sm:mt-[13em] text-center'>
      <h1 className="text-2xl font-bold mb-10 border-b pb-4 text-left max-w-[1000px] flex flex-col mx-auto">OTHER PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto">


        <div className="max-w-[300px] rounded overflow-hidden shadow-lg">
          <div>
            {product && <img src={product.image} alt={product.title} className="w-full h-auto" />}
          </div>
          <div className="px-6 py-4">
            <h2 className="text-lg">{product.title}</h2>
            <p className="text-lg my-2 font-bold">${product.price}</p>
          </div>
        </div>

        <div className="max-w-[300px] rounded overflow-hidden shadow-lg">
          <div>
            {product && <img src={product.image} alt={product.title} className="w-full h-auto" />}
          </div>
          <div className="px-6 py-4">
            <h2 className="text-lg">{product.title}</h2>
            <p className="text-lg my-2 font-bold">${product.price}</p>
          </div>
        </div>

        <div className="max-w-[300px] rounded overflow-hidden shadow-lg">
          <div>
            {product && <img src={product.image} alt={product.title} className="w-full h-auto" />}
          </div>
          <div className="px-6 py-4">
            <h2 className="text-lg">{product.title}</h2>
            <p className="text-lg my-2 font-bold">${product.price}</p>
          </div>
        </div>

        <div className="max-w-[300px] rounded overflow-hidden shadow-lg">
          <div>
            {product && <img src={product.image} alt={product.title} className="w-full h-auto" />}
          </div>
          <div className="px-6 py-4">
            <h2 className="text-lg">{product.title}</h2>
            <p className="text-lg my-2 font-bold">${product.price}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OtherProducts