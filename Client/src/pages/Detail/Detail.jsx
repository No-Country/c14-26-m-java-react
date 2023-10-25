// import Navigation from '../../components/navigation/Navigation';
// import CardProductDetail from '../../components/Detail/CardProductDetail'
// import OtherProducts from '../../components/Detail/OtherProducts';

// import { useContext, useEffect } from 'react';
// import { Context } from '../../context';


// const Detail = () => {

//   const { getProductByID, product } = useContext(Context)

//   useEffect(() => {
//     getProductByID(2)
//   }, [])
//   //console.log(product);

//   return (

//     <div className='flex flex-col ml-20 mr-20'>
//         <Navigation />
//         <CardProductDetail product={product} />
//         <OtherProducts product={product}/>
//     </div>
//   )
// }

// export default Detail


import Navigation from '../../components/navigation/Navigation';
import CardProductDetail from '../../components/Detail/CardProductDetail'
import OtherProducts from '../../components/Detail/OtherProducts';
import { useContext, useEffect } from 'react';
import { Context } from '../../context';
import { useParams } from 'react-router-dom'; 


const Detail = () => {

  const { getProductByID, product, products } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {

    const productId = parseInt(id, 10);
    getProductByID(productId);
  }, [id]); // Agrega 'id' como dependencia


    
    const selectRandomProducts = (products, currentProductId, count = 4) => {        // Función para seleccionar 4 productos al azar, excluyendo el producto actual
      const filteredProducts = products.filter(product => product.id !== currentProductId);
      const randomProducts = [];
      while (randomProducts.length < count && filteredProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
      }
      return randomProducts;
    };
  
    const otherProducts = selectRandomProducts(products, parseInt(id, 10));



  return (

    <div className='flex flex-col ml-20 mr-20'>
        <Navigation />
        <CardProductDetail product={product} />
        <OtherProducts otherProducts={otherProducts}/>
    </div>
  )
}

export default Detail