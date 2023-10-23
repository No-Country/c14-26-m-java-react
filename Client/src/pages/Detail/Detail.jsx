import Navigation from '../../components/navigation/Navigation';

import OtherProducts from '../../components/Detail/OtherProducts';
//import CardProductDetail from '../../components/Detail/CardProductDetail';


const Detail = () => {
  return (
    <div className='flex flex-col ml-20 mr-20'>
        <Navigation />
        {/* <CardProductDetail /> */}
        <OtherProducts />
    </div>
  )
}

export default Detail