import Navigation from '../../components/navigation/Navigation';
import CardProductDetail from '../../components/Detail/CardProductDetail'
import OtherProducts from '../../components/Detail/OtherProducts';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { useParams } from 'react-router-dom'; 


const Detail = () => {

  const { getProductByID, product, products } = useContext(Context);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = parseInt(id, 10);
    getProductByID(productId).then(() => {
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className='flex flex-col ml-20 mr-20'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navigation title={product.title} />
          <div className='mb-10'>
            <CardProductDetail product={product} />
          </div>
          <div className='mb-10'>
            <OtherProducts products={products} />
          </div>
        </>
      )}
    </div>
  );
}

export default Detail