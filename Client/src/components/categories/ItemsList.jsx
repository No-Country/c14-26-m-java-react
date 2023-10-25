import men1 from '../../assets/images/imagesmuestra/men1.png'
import women1 from '../../assets/images/imagesmuestra/women1.png'
import women2 from '../../assets/images/imagesmuestra/women2.png'
import men2 from '../../assets/images/imagesmuestra/men2.png'
import men3 from '../../assets/images/imagesmuestra/men3.png'
import kids1 from '../../assets/images/imagesmuestra/kids1.png'
import men4 from '../../assets/images/imagesmuestra/men4.png'
import women3 from '../../assets/images/imagesmuestra/woman3.png'
import men5 from '../../assets/images/imagesmuestra/men5.png'
import men6 from '../../assets/images/imagesmuestra/men6.png'
import men7 from '../../assets/images/imagesmuestra/men7.png'
import women4 from '../../assets/images/imagesmuestra/women4.png'
import { useContext, useEffect } from 'react';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';



const ItemsList = () => {
    const navigate = useNavigate();
    const { products, getAllProducts, categoryProd } = useContext(Context)

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <div className=" max-w-[1300px] bg-white flex flex-wrap justify-center gap-[30px] mb-[50px]">

            {
                categoryProd.length === 0 ?
                    products.map(product => (
                        <div className="w-[238px] flex-col justify-start items-center inline-flex"
                             key={product.id}
                             onClick={() => navigate(`/detail/${product.id}`)} 
                        >

                            <div className="h-[488px] bg-white flex-col justify-start items-start flex">
                                <div className="w-[239px] h-[300px] relative">
                                    <img className="w-[239px] h-[300px] left-0 top-0 absolute object-contain" src={product.image} />
                                </div>
                                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                                    <div className="w-[131px] text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">{product.title.split(' ')[0]} {product.title.split(' ')[1]}</div>
                                    <div className="text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">{product.description.split(' ')[0]} {product.description.split(' ')[1]}</div>
                                    <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                                        <p className="w-[52px] text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight line-through">$16.48</p>
                                        <div className="w-[45px] text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">${product.price}</div>
                                    </div>
                                    {/* <div className="justify-start items-center gap-[6.08px] inline-flex">
                                        <div className="w-4 h-4 bg-sky-500 rounded-full" />
                                        <div className="w-4 h-4 bg-teal-700 rounded-full" />
                                        <div className="w-4 h-4 bg-orange-400 rounded-full" />
                                        <div className="w-4 h-4 bg-teal-700 rounded-full" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))

                    :

                    categoryProd.map(product => (
                        <div className="w-[238px] flex-col justify-start items-center inline-flex" key={product.id}>
                            <div className="h-[488px] bg-white flex-col justify-start items-start flex">
                                <div className="w-[239px] h-[300px] relative">
                                    <img className="w-[239px] h-[300px] left-0 top-0 absolute object-contain" src={product.image} />
                                </div>
                                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                                    <div className="w-[131px] text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">{product.title.split(' ')[0]} {product.title.split(' ')[1]}</div>
                                    <div className="text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">{product.description.split(' ')[0]} {product.description.split(' ')[1]}</div>
                                    <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                                        <p className="w-[52px] text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight line-through">$16.48</p>
                                        <div className="w-[45px] text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">${product.price}</div>
                                    </div>
                                    {/* <div className="justify-start items-center gap-[6.08px] inline-flex">
                                    <div className="w-4 h-4 bg-sky-500 rounded-full" />
                                    <div className="w-4 h-4 bg-teal-700 rounded-full" />
                                    <div className="w-4 h-4 bg-orange-400 rounded-full" />
                                    <div className="w-4 h-4 bg-teal-700 rounded-full" />
                                </div> */}
                                </div>
                            </div>
                        </div>
                    ))

            }
        </div>
    )
}

export default ItemsList