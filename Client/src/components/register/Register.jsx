import React, { useContext } from 'react';
import { useState } from 'react';
import Login from '../login/Login';
import { Context } from '../../context';
import axios from 'axios';
import logo from '/logo.png'

const Register = ({ show, onClose, onOpenLogin}) => {
    const {token, saveToken,isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen} = useContext(Context)
  if (!show) {
    return null;
  }

  
  
  
  const handleLoginOpen = () => {
    onOpenLogin()
    onClose()
  };

  const postRegister = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      lastName: e.target.lastName.value,  
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }

 
    axios.post('https://ecommerce-nocountry.fly.dev/auth/register', data)
    .then(res => {saveToken(res.data.token)
    setIsRegisterOpen(false)
    })
  
    .catch(err=> console.log(err))
  }
  return (
    <form onSubmit={postRegister}>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg w-full md:w-[600px] h-[850px] z-10">
        
        <button onClick={onClose} className="text-right w-full">X</button>
        <div className='flex items-center justify-center'>
          <img src={logo} alt='Logo' style={{ width: '200px', padding: '6px' }} /> 
          </div>
        {/* <h1 className='font-bold mt-6 text-center text-3xl'>BrandName</h1> */}
        <p className='text-center text-sm text-custom-gray'>Please sign Up</p>
        <div className="w-[372px] md:ml-[80px] mt-[35px]">
            <p className='text-sm text-custom-gray mb-2'>Name</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="John"
                    name='name'
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
                    name='lastName'
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
                    name='email'
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
                    name='username'
                />
            </div>
        </div>
        <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Password</p>
            <div className="flex border-b-2">
                <input
                    className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                    type="password"
                    placeholder=""
                    name='password'
                />
            </div>
        </div>
        <div className='w-[372px]  md:ml-[80px] mt-[20px]'>
        <button type='submit' className='w-full rounded h-[46px] text-white font-bold  bg-sky-500 mt-[10px]	'>Sign Up</button>
        </div>
        
        <div className='w-[372px]  md:ml-[80px] mt-[20px] text-center'>
        <button onClick={handleLoginOpen}>Login</button>
        <Login show={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
      </div>
    </div>
    </form>
  );
}

export default Register;