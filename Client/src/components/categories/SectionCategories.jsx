import { useContext, useEffect, useState } from "react"
import images from "../../assets/images"
import { Context } from "../../context"

const SectionCategories = () => {

  const { categories, getAllCategories, getProductsFromCategory } = useContext(Context)


  useEffect(() => {
    getAllCategories()

  }, [])



  return (
    <div className="w-full relative mt-[20px] mb-[40px] bg-neutral-50">


      <div className="flex justify-center gap-[20px] flex-wrap">

        <div
          onClick={() => getProductsFromCategory('electronics')}
          className="cursor-pointer w-[205px] h-[223px] relative flex justify-center items-center">
          {/* <img className="w-[205px] h-[223px] absolute z-10" src={images.accesories} /> */}
          <div className="bg-neutral-800 w-[205px] h-[223px] absolute z-20 "></div>
          <div className="text-center">
            <p className=" relative z-20 text-white text-base font-bold">{categories[0]?.toUpperCase()}</p>
            <p className=" relative z-20 text-white text-sm font-normal">5 Items</p>
          </div>
        </div>

        <div
          onClick={() => getProductsFromCategory('jewelery')}
          className="cursor-pointer w-[205px] h-[223px] relative flex justify-center items-center">
          <img className="w-[205px] h-[223px] absolute z-10" src={images.accesories} />
          <div className="bg-neutral-800 w-[205px] h-[223px] absolute z-20 opacity-25"></div>
          <div className="text-center">
            <p className=" relative z-20 text-white text-base font-bold">{categories[1]?.toUpperCase()}</p>
            <p className=" relative z-20 text-white text-sm font-normal">5 Items</p>
          </div>
        </div>

        <div
          onClick={() => getProductsFromCategory("men's clothing")}
          className="cursor-pointer w-[205px] h-[223px] relative flex justify-center items-center">
          <img className="w-[205px] h-[223px] absolute z-10" src={images.men} />
          <div className="bg-neutral-800 w-[205px] h-[223px] absolute z-20 opacity-25"></div>
          <div className="text-center">
            <p className=" relative z-20 text-white text-base font-bold">{categories[2]?.toUpperCase()}</p>
            <p className=" relative z-20 text-white text-sm font-normal">5 Items</p>
          </div>
        </div>

        <div
          onClick={() => getProductsFromCategory("women's clothing")}
          className="cursor-pointer w-[205px] h-[223px] relative flex justify-center items-center">
          <img className="w-[205px] h-[223px] absolute z-10" src={images.women} />
          <div className="bg-neutral-800 w-[205px] h-[223px] absolute z-20 opacity-25"></div>
          <div className="text-center">
            <p className=" relative z-20 text-white text-base font-bold">{categories[3]?.toUpperCase()}</p>
            <p className=" relative z-20 text-white text-sm font-normal">5 Items</p>
          </div>
        </div>

      </div>

    </div >
  )
}

export default SectionCategories