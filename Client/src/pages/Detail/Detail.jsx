import Navigation from '../../components/Detail/Navigation';
import CardProductDetail from '../../components/Detail/CardProductDetail';
import OtherProducts from '../../components/Detail/OtherProducts';

const Detail = () => {
  return (
    <div className='flex flex-col items-left ml-20 mr-20'>
        <Navigation />
        <CardProductDetail />
        <OtherProducts />
    </div>
  )
}

export default Detail