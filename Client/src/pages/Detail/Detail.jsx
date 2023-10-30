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
  }, [id]);


  return (

    <div className='flex flex-col ml-20 mr-20'>
        <Navigation title={product.title}/>
        <div className='mb-10'>
          <CardProductDetail product={product} />
        </div>
        
        <div className='mb-10'>
          <OtherProducts products={products} />   
        </div>
    </div>
  )
}

export default Detail