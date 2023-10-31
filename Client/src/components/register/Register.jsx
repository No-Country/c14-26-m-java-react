import React from 'react';
import { useState } from 'react';
import Login from '../login/Login';

const Register = ({ show, onClose, onOpenLogin}) => {
  if (!show) {
    return null;
  }

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  const handleLoginOpen = () => {
    onOpenLogin()
    onClose()
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg w-full md:w-[600px] h-[850px] z-10">
        
        <button onClick={onClose} className="text-right w-full">X</button>
        <h1 className='font-bold mt-6 text-center text-3xl'>BrandName</h1>
        <p className='text-center text-sm text-custom-gray'>Please sign Up</p>
        <div className="w-[372px] md:ml-[80px] mt-[80px]">
            <p className='text-sm text-custom-gray mb-2'>Name</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="John"
                />
            </div>
        </div>
        <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Last name</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Doe"
                />
            </div>
        </div>
        <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Email Address</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="your@email.com"
                />
            </div>
        </div>
        <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Username</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder=" Johndoe"
                />
            </div>
        </div>
        <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Password</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder=""
                />
            </div>
        </div>
        <div className='w-[372px]  md:ml-[80px] mt-[20px]'>
        <button className='w-full rounded h-[46px] text-white font-bold  bg-sky-500 mt-[10px]	'>Sign Up</button>
        </div>
        
        <div className='w-[372px]  md:ml-[80px] mt-[40px] text-center'>
        <button onClick={handleLoginOpen}>Login</button>
        <Login show={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default Register;