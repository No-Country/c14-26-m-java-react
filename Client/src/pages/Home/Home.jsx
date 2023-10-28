import { useContext, useEffect, useState } from 'react'
//import Navbar from '../../components/navbar/Navbar'
import '/src/App.css';
import big from '/big.png'
import mid from '/mid.png'
import smalld from '/smalld.png'
import smallt from '/smallt.png'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context';
import PropTypes from 'prop-types';
import { getRequest } from '../../services/httpRequests';


const Home = () => {

  const { getProductsFromCategory } = useContext(Context);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsAll = await getRequest("/products");
        setProducts(productsAll);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []); 

  const navigate = useNavigate()
  
  
  const selectRandomProducts = (currentProductId, count = 8) => {
    const filteredProducts = products.filter(product => product.id !== currentProductId);
    const randomProducts = [];
    while (randomProducts.length < count && filteredProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
    }
    return randomProducts;
  };

  const currentProductId = 1;

  const otherProducts = selectRandomProducts(currentProductId, 8);

  console.log(otherProducts)


  const menCategory = () => {
    getProductsFromCategory("men's clothing")
    scrollTo(0, 0)
    navigate('/categories')
  }

  const womenCategory = () => {
    getProductsFromCategory("women's clothing")
    scrollTo(0, 0)
    navigate('/categories')
  }

  const electronicsCategory = () => {
    getProductsFromCategory("electronics")
    scrollTo(0, 0)
    navigate('/categories')
  }

  const jeweleryCategory = () => {
    getProductsFromCategory("jewelery")
    scrollTo(0, 0)
    navigate('/categories')
  }



  return (
    <div >
      <div>
        <div className=" bg-cover h-[716px] w-full" style={{ backgroundImage: `url(${caruselImage})` }}>
          <div className='flex flex-col md:items-start md:ml-[200px] text-left lg:items-start'>
            <h3 className='text-white font-bold mt-[200px] md:mt-[200px] text-center md:text-left'>
              SUMMER 2020
            </h3>
            <h2 className='text-white font-bold mt-[10px] md:text-6xl text-4xl text-center md:text-left'>
              NEW COLLECTION
            </h2>
            <p className='text-white text-xl mt-[30px] text-center md:text-left'>
              We know how large objects will act,<br />
              but things on a small scale.
            </p>
            <button className="bg-custom-green mt-[50px] text-white w-56 h-16 mx-auto md:mx-0">Shop Now</button>
          </div>
        </div>

        <div className='flex items-center justify-center w-full'>
          <div className='flex flex-col'>
            <h3 className='mt-[70px] font-bold text-xl w-full text-center'>
              SHOP
            </h3>
            <p className='mt-[10px] text-sm text-custom-gray'>
              We have the best brands for your best delightn
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-[40px] w-full justify-center  items-center">

          <div className="w-2/7" onClick={menCategory}>
            <img src={big} alt="Men" className='object-cover w-[324px] h-[500px] md:h-[500px] md:w-[510px]' />
          </div>


          <div className="w-1/7" onClick={womenCategory}>
            <img src={mid} alt="Women" className="object-cover w-[324px] h-[500px] md:h-[500px] md:w-[240px]" />
          </div>


          <div className="w-1/7 flex flex-col gap-4">

            <div onClick={electronicsCategory}>
              <img src={ssd} alt="Accessories" className="object-cover w-[324px] h-[500px] md:h-[240px] md:w-[240px]" />
            </div>

            <div onClick={jeweleryCategory}>
              <img src={jewel} alt="Kids" className="object-cover w-[324px] h-[500px] md:w-[240px] md:h-[240px]" />
            </div>
          </div>
        </div>

        <div>

          {otherProducts.length > 0 && (
            <div className='flex flex-col items-center justify-center mt-[100px]'>
              <p className='text-custom-gray text-xl'>HASTA 35% OFF</p>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='font-bold text-2xl mt-[20px]'>
                  BESTSELLER PRODUCTS
                </h2>
                <p className='text-custom-gray text-sm text-center '>
                  CAMPERAS, CHALECOS, TAPADOS, SACOS Y BLAZERS.
                </p>
              </div>
            </div>
          )}

          <div className='flex flex-col md:flex-row gap-10 mt-[72px] w-full justify-center  items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto'>
              {otherProducts.map((product, index) => (
                <div key={index} className="w-[238px] flex-col justify-start items-center inline-flex cursor-pointer hover:shadow-md" onClick={() => navigate(`/detail/${product.id}`)} >
                  <div className="h-[488px] bg-white flex-col justify-start items-start flex">
                    <div className="w-[239px] h-[300px] relative">
                      <img className="w-[239px] h-[300px] left-0 top-0 absolute object-contain" src={product.image} alt={product.title} />
                    </div>
                    <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                      <div className="w-[131px] text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">{product.title.split(' ')[0]} {product.title.split(' ')[1]}</div>
                      <div className="text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">{product.description.split(' ')[0]} {product.description.split(' ')[1]}</div>
                      <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                        <p className="w-[52px] text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight line-through">$16.48</p>
                        <div className="w-[45px] text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  products: PropTypes.array,
};

export default Home