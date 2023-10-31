import { AiOutlineRight } from 'react-icons/ai'

const UbicationBar = () => {
    return (
        <div className="w-full  py-6 bg-neutral-50 flex-col justify-start items-center inline-flex">
            <div className="flex flex-col md:flex-row  justify-start items-center gap-[30px] md:inline-flex">
                <div className="md:w-[300px] lg:w-[450px] xl:w-[510px] flex-col justify-start items-start inline-flex">
                    <div className="text-center text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">Shop</div>
                </div>
                <div className="md:w-[300px] lg:w-[450px] xl:w-[509px] flex-col justify-start items-end gap-[5px] inline-flex">
                    <div className="py-2.5 justify-start items-center gap-[15px] inline-flex">
                        <div className="text-center text-slate-800 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Home</div>
                        <div className=' text-[#BDBDBD]'>
                            <AiOutlineRight />
                        </div>
                        <div className="text-center text-stone-300 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Shop</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UbicationBar