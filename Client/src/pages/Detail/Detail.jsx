import Navigation from '../../components/navigation/Navigation';

import OtherProducts from '../../components/Detail/OtherProducts';

import CardProductDetail from '../../components/Detail/CardProductDetail'

import { useContext, useEffect } from 'react';
import { Context } from '../../context';


const Detail = () => {

  const { getProductByID, product } = useContext(Context)

  useEffect(() => {
    getProductByID(2)

  }, [])
  console.log(product);

  return (

    <div className='flex flex-col ml-20 mr-20'>
        <Navigation />
        <CardProductDetail />
        <OtherProducts />
    </div>
  )
}

export default Detail