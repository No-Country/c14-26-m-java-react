import React from 'react'
import phone from '/phone.png'
import mail from '/mail.png'
import instagram from '/instagram.png'
import youtube from '/youtube.png'
import facebook from '/facebook.png'
import twitter from '/twitter.png'
import login from '/login.png'
import search from '/search.png'
import cart from '/cart.png'
import menu from '/menu.png'
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className=''>

    <div className="bg-custom-blue  h-[58px] w-full hidden sm:block">
  <div className="w-full  flex items-center  h-full justify-between">
    
    <div className='flex h-full items-center ml-8' >
      <img src={phone} alt='phone' className='h-[16px] w-[16px] mr-1'/>  
      <a href="#" className="text-white font-bold text-sm">(225) 555-0118</a>
      <img src={mail} alt='mail' className='h-[16px] w-[16px] mr-1 ml-11 hidden md:block' />
      <a href="#" className="text-white font-bold text-sm hidden md:block">michelle.rivera@example.com</a>
    </div>
   
    <div className=''>
        <p className='text-white hidden text-sm xl:block'>Follow Us  and get a chance to win 80% off</p>
    </div>

    
    <div className="space-x-4 flex h-full items-center mr-8">
        <span className='text-white text-sm'>Follow Us  :</span>
        <img src={instagram} alt='instagram' className='h-[16px] w-[16px] mr-1' />
        <img src={youtube} alt='youtube' className='h-[16px] w-[16px] mr-1' />
        <img src={facebook} alt='facebook' className='h-[16px] w-[16px] mr-1' />
        <img src={twitter} alt='twitter' className='h-[16px] w-[16px] mr-1' />
    </div>
     </div>
    </div>
    <div className='h-[78px] w-full flex justify-between items-center'>
        <div className='flex items-center h-full ml-8 justify-center'>
            <h1 className='font-bold text-[24px] lg:mr-28'>BrandName</h1>

            {/* Icono de hamburguesa solo visible en móviles */}
            <div className='lg:hidden mr-5 cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <img src={menu} alt='menu' className='h-[14px] w-[24px]' />
            </div>

            {/* Menú para móviles */}
            {isMobileMenuOpen && (
                <div className='absolute top-[78px] left-0 w-full bg-white flex flex-col p-5 lg:hidden items-center'>
                    <a href="#" className="text-custom-gray font-bold text-xl mb-3">Home</a>
                    <a href="#" className="text-custom-gray font-bold text-xl mb-3">Shop</a>
                    <a href="#" className="text-custom-gray font-bold text-xl mb-3">About</a>
                    <a href="#" className="text-custom-gray font-bold text-xl mb-3">Blog</a>
                    <a href="#" className="text-custom-gray font-bold text-xl mb-3">Contact</a>
                    <button className='text-custom-sky-blue '>Login / register</button>
                </div>
            )}

            {/* Menú para escritorio */}
            <div className='hidden lg:flex'>
                <a href="#" className="text-custom-gray font-bold text-xl ml-28">Home</a>
                <a href="#" className="text-custom-gray font-bold text-xl ml-5">Shop</a>
                <a href="#" className="text-custom-gray font-bold text-xl ml-5">About</a>
                <a href="#" className="text-custom-gray font-bold text-xl ml-5">Blog</a>
                <a href="#" className="text-custom-gray font-bold text-xl ml-5">Contact</a>
            </div>
        </div>
        <div className='hidden lg:flex items-center mr-16'>
            <img src={login} alt='login' className='h-[12] w-[12] mr-1'/>
            <button className='text-custom-sky-blue mr-8 font-bold'>Login / register</button>
            <img src={search} alt='search' className='h-[16] w-[16] mr-8' /> 
            <img src={cart} alt='search' className='h-[16] w-[16]' /> 
        </div>
    </div>
    </div>  

  )
}

export default Navbar