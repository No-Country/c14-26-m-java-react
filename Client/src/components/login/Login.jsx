import React from 'react';
import Register from '../register/Register'
import { useState } from 'react';
import axios from 'axios';

const Login = ({ show, onClose, onOpenRegister }) => {
  if (!show) {
    return null;
  }
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);


  const handleRegisterOpen = () => {
    onOpenRegister();
    onClose()
  };

  const postLogin = (e) => {
    e.preventDefault()
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
 
    axios.post('https://ecommerce-nocountry.fly.dev/auth/login', data)
    .then(res => console.log(res.data))
    .catch(err=> console.log(err))
  }

  return (
    <form onSubmit={postLogin}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded shadow-lg w-full md:w-[600px] h-[659px] z-10">

          <button onClick={onClose} className="text-right w-full">X</button>
          <h1 className='font-bold mt-6 text-center text-3xl'>BrandName</h1>
          <p className='text-center text-sm text-custom-gray'>Please sign In</p>

          <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Email Address</p>
            <div className="flex border-b-2">
              <input
                className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                type="text"
                placeholder="your@email.com"
                name='username'
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
                name='password'
              />
            </div>
          </div>

          <div className='w-full md:w-[372px]  md:ml-[80px] mt-[20px]'>
            <button type='submit' className='w-full rounded h-[46px] text-white font-bold  bg-sky-500	'>Sign In</button>
          </div>
          <p className='text-center mt-[10px] text-xs'>or continue with</p>
          <div className="flex w-[372px] md:ml-[80px] mt-[20px]">
            <button className='w-[170px] rounded text-white font-bold h-[46px] bg-blue-800'>Facebook</button>
            <button className='ml-[31px] rounded text-white font-bold w-[170px] h-[46px] bg-cyan-500'>Google</button>
          </div>
          <div className='w-[372px]  md:ml-[80px] mt-[40px] text-center'>
            <button onClick={handleRegisterOpen}>Create an Account</button>
            <Register show={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;

