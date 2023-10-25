import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const OtherProducts = ({ otherProducts }) => {
  const navigate = useNavigate();

  return (
    <div className='mt-60 xl:mt-[-16em] lg:mt-[-11em] md:mt-[13em] sm:mt-[13em] text-center'>
      <h1 className="text-2xl font-bold mb-10 border-b pb-4 text-left max-w-[1000px] flex flex-col mx-auto">OTHER PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
        {otherProducts.map((product, index) => (
          <div
            key={index}
            className="w-[238px] flex-col justify-start items-center inline-flex cursor-pointer hover:shadow-md"
            onClick={() => navigate(`/detail/${product.id}`)} 
          >
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
  );
}

OtherProducts.propTypes = {
  otherProducts: PropTypes.array,
};

export default OtherProducts;
