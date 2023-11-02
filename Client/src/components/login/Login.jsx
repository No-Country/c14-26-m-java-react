import React, { useContext } from 'react';
import Register from '../register/Register'
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context';
import smartlife from '/smartlife.png'




const Login = ({ show, onClose, onOpenRegister }) => {
  const {token, saveToken,isLoginOpen, setIsLoginOpen,saveName,name} = useContext(Context)
  
  if (!show) {
    return null;
  }

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
    .then(res => {saveToken(res.data.token)
    setIsLoginOpen(false)
    return res
    })
    .then(res => {saveName(res.data.username)})
    .catch(err=> console.log(err))
  }
  return (
    <form onSubmit={postLogin}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded shadow-lg w-full md:w-[600px] h-[600px] z-10">

          <button onClick={onClose} className="text-right w-full">X</button>
          <div className='flex items-center justify-center'>
          <img src={smartlife} alt='smartlife' className='h-[150px] w-[180px] '/>
          </div>
          {/* <h1 className='font-bold mt-6 text-center text-3xl'>BrandName</h1> */}
          <p className='text-center text-sm text-custom-gray'>Please sign In</p>

          <div className="w-[372px] md:ml-[80px] mt-[20px]">
            <p className='text-sm text-custom-gray mb-2'>Username</p>
            <div className="flex border-b-2">
              <input
                className="bg-transparent border-none outline-none w-full h-[47px] text-gray-600 placeholder-gray-400"
                type="text"
                placeholder="johndoe"
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

          <div className='w-full md:w-[372px]  md:ml-[80px] mt-[20px]'>
            <button type='submit' className='w-full rounded h-[46px] text-white font-bold  bg-sky-500	'>Sign In</button>
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

