import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import '/src/App.css';
import big from '/big.png'
import mid from '/mid.png'
import smalld from '/smalld.png'
import smallt from '/smallt.png'
import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'
import card5 from '/card5.png'
import card6 from '/card6.png'
import card7 from '/card7.png'
import card8 from '/card8.png'
import ssd from '/ssd.jpg'
import jewel from '/jewel.jpg'
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context';
import caruselImage from '/carusel.jpg';



const Home = () => {

  const { getProductsFromCategory } = useContext(Context)
  const navigate = useNavigate()

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
    <div>
      {/* <Navbar /> */}
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

        <div className='flex flex-col items-center justify-center mt-[200px]'>
          <p className='text-custom-gray text-xl'>HASTA 35% OFF</p>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-2xl mt-[20px]'>
              BESTSELLER PRODUCTS
            </h2>
            <p className='text-custom-gray text-sm text-center '>
              CAMPERAS, CHALECOS, TAPADOS, SACOS Y BLAZERS.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-10 mt-[40px] w-full justify-center  items-center'>
            <div className="w-1/7 flex flex-col">
              <img src={card1} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card2} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card3} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card4} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
          </div>

          <div className='flex md:flex-row flex-col gap-10 mt-[150px] w-full justify-center  items-center mb-[250px]'>
            <div className="w-1/7 flex flex-col">
              <img src={card5} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card6} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card7} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
            <div className="w-1/7 flex flex-col">
              <img src={card8} alt="Women" className="object-cover h-[427px] w-[240px]" />
              <p className='font-bold text-center mt-[30px]'>
                Graphic Design
              </p>
              <p className='text-custom-gray text-sm text-center mt-[20px]'>
                English Department
              </p>
              <div className='text-center mt-[10px]'>
                <span className='text-custom-gray font-bold'>
                  $16.48
                </span>
                <span className='ml-[5px] text-emerald-700	font-bold'>
                  $6.48
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home