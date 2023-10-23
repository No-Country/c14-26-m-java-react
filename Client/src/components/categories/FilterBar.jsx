import { BiSolidCategory } from 'react-icons/bi'
import { BsListCheck } from 'react-icons/bs'

const FilterBar = () => {
  return (
    <div className="w-full flex justify-center mb-10 bg-white">

        <div className="md:w-auto lg:w-[900px] xl:w-[1049px] flex-col gap-4 md:gap-0 md:flex-row justify-between items-center inline-flex">
          <div className="px-px justify-start items-center gap-[15px] flex">
            <div className="text-[#737373] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Showing all 12 results
            </div>
          </div>
          <div className="px-px justify-start items-center gap-[15px] flex">
            <div className="text-[#737373] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Views:
            </div>
            <div className="justify-start items-center gap-[15px] flex">
              <div className="p-[15px] rounded-[5px] border border-gray-200 justify-start items-center flex">
                <div className=' text-[#252B42]'>
                  <BiSolidCategory />
                </div>
              </div>
              <div className="p-[15px] rounded-[5px] border border-gray-200 justify-start items-center flex">
                <div className=' text-[#252B42]'>
                  <BsListCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="px-px justify-start items-center gap-[15px] flex">
            <div className="w-[141px] h-[50px] relative">
              <div className="w-[141px] h-[50px] left-0 top-0 absolute">
                <div className="w-[141px] h-[50px] left-0 top-0 absolute bg-stone-50 rounded-[5px] border border-neutral-200">
                  <div className="left-[18px] top-[11px] absolute text-neutral-500 text-sm font-normal font-['Montserrat'] leading-7 tracking-tight">Popularity</div>
                </div>
              </div>
            </div>
            <div className="w-[94px] self-stretch px-5 py-2.5 bg-sky-500 rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-sm font-bold leading-normal tracking-tight">Filter</div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FilterBar