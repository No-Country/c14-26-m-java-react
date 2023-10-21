import images from "../../assets/images"

const SectionCategories = () => {
  return (
    <div className="w-[1440px] h-[271px] relative bg-neutral-50">
  <div className="pb-12 left-[286.50px] top-0 absolute flex-col justify-start items-center inline-flex">
    {/* categorias */}
    <div className="justify-start items-start gap-[15px] inline-flex">
      <div className="w-[205px] h-[223px] relative">
        <div className="w-[205px] h-[223px] left-0 top-0 absolute">
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <img className="w-[205px] h-[223px] left-0 top-0 absolute" src={images.women} />
            <div className="w-[204px] h-[223px] left-[0.50px] top-0 absolute bg-neutral-800 bg-opacity-25" />
          </div>
          <div className="w-[206px] h-[223px] left-0 top-0 absolute">
            <div className="left-[67px] top-[87px] absolute text-center text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">WOMEN</div>
            <div className="left-[76.50px] top-[120.50px] absolute text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">5 Items</div>
          </div>
        </div>
      </div>
      <div className="w-[205px] h-[223px] relative">
        <div className="w-[205px] h-[223px] left-0 top-0 absolute bg-white">
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <img className="w-[205px] h-[223px] left-0 top-0 absolute" src={images.men} />
            <div className="w-[204px] h-[223px] left-[0.50px] top-0 absolute bg-neutral-800 bg-opacity-25" />
          </div>
          <div className="w-[205px] h-[223px] left-[1px] top-0 absolute">
            <div className="left-[82px] top-[87px] absolute text-center text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">MEN</div>
            <div className="left-[76px] top-[121px] absolute text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">5 Items</div>
          </div>
        </div>
      </div>
      <div className="w-[206px] h-[223px] relative">
        <div className="w-[205px] h-[223px] left-[1px] top-0 absolute bg-white">
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <img className="w-[205px] h-[223px] left-0 top-0 absolute" src={images.accesories} />
            <div className="w-[204px] h-[223px] left-[1px] top-0 absolute bg-neutral-800 bg-opacity-25" />
          </div>
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <div className="left-[48px] top-[87px] absolute text-center text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">ACCESORIES</div>
            <div className="left-[76px] top-[121px] absolute text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">5 Items</div>
          </div>
        </div>
      </div>
      <div className="w-[206px] h-[223px] relative">
        <div className="w-[205px] h-[223px] left-[1px] top-0 absolute bg-white">
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <img className="w-[205px] h-[223px] left-0 top-0 absolute" src={images.kids} />
            <div className="w-[204px] h-[223px] left-[1px] top-0 absolute bg-neutral-800 bg-opacity-25" />
          </div>
          <div className="w-[205px] h-[223px] left-0 top-0 absolute">
            <div className="left-[82px] top-[87px] absolute text-center text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">KIDS</div>
            <div className="left-[76px] top-[121px] absolute text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">5 Items</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default SectionCategories