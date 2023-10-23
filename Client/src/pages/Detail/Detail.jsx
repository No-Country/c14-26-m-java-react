import Navigation from '../../components/navigation/Navigation';
//import CardProductDetail from '../../components/detail/CardProductDetail';
import OtherProducts from '../../components/detail/OtherProducts';


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