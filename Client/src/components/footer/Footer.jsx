// import React from 'react'
// import facebook from '/facebook.png'
// import instagram from '/instagram.png'
// import twitter from '/twitter.png'

// const Footer = () => {
//   return (
//     <div>
//         <div className='w-full justify-around flex mb-[100px]'>
//             <p className='font-bold text-2xl'>
//                 Bandage
//             </p>
//             <div className='flex gap-7'>
//             <img src={facebook} alt='facebook' className='w-[24px] h-[24px] bg-sky-500' />
//             <img src={instagram} alt='instagram' className='w-[24px] h-[24px] bg-sky-500' />
//             <img src={twitter} alt='twitter' className='w-[24px] h-[24px] bg-sky-500' />
//             </div>
//         </div>
//         <div className="flex justify-around p-8">
//             <div>
//                 <h4 className="font-bold mb-2">Company Info</h4>
//                 <ul>
//                     <li className="mb-1 text-custom-gray">About Us</li>
//                     <li className='text-custom-gray'>Blog</li>
//                 </ul>
//             </div>
//             <div>
//                 <h4 className="font-bold mb-2">Legal</h4>
//                 <ul>
//                     <li className="mb-1 text-custom-gray">Policy privacy</li>
//                     <li className='text-custom-gray'>Carrier</li>
//                 </ul>
//             </div>
//             <div>
//                 <h4 className="font-bold mb-2">Features</h4>
//                 <ul>
//                     <li className="mb-1 text-custom-gray">Business Marketing</li>
//                     <li className='text-custom-gray'>Unlimited Support</li>
//                 </ul>
//             </div>
//             <div>
//                 <h4 className="font-bold mb-2">Resources</h4>
//                 <ul>
//                     <li className='text-custom-gray'>Watch a Demo</li>
//                 </ul>
//             </div>
//             <div>
//                 <h4 className="font-bold mb-4">Get In Touch</h4>
//                 <input 
//                     type="email" 
//                     placeholder="Your Email" 
//                     className="mb-4 p-2 border rounded w-60"
//                 />
//                 <button className="mb-4 p-2 w-60 bg-blue-500 text-white rounded">Subscribe</button>
//                 <p className="text-sm text-custom-gray">Lore imp sum dolor Amit</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import facebook from '/facebook.png'
import instagram from '/instagram.png'
import twitter from '/twitter.png'

const Footer = () => {
  return (
    <div className='mt-14'>
        <div className='ml-5 sm:ml-0 w-full justify-around flex flex-col sm:flex-row mb-[100px]'>
    <p className='font-bold text-2xl mb-4 sm:mb-0'>
        Bandage
    </p>
    <div className='flex gap-7'>
        <img src={facebook} alt='facebook' className='w-[24px] h-[24px] bg-sky-500' />
        <img src={instagram} alt='instagram' className='w-[24px] h-[24px] bg-sky-500' />
        <img src={twitter} alt='twitter' className='w-[24px] h-[24px] bg-sky-500' />
    </div>
</div>

        <div className="flex flex-col sm:flex-row justify-around p-8 gap-4">
            <div>
                <h4 className="font-bold mb-2">Company Info</h4>
                <ul>
                    <li className="mb-1 text-custom-gray">About Us</li>
                    <li className='text-custom-gray'>Blog</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-2">Legal</h4>
                <ul>
                    <li className="mb-1 text-custom-gray">Policy privacy</li>
                    <li className='text-custom-gray'>Carrier</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-2">Features</h4>
                <ul>
                    <li className="mb-1 text-custom-gray">Business Marketing</li>
                    <li className='text-custom-gray'>Unlimited Support</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-2">Resources</h4>
                <ul>
                    <li className='text-custom-gray'>Watch a Demo</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Get In Touch</h4>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="mb-4 p-2 border rounded w-60"
                />
                <button className="mb-4 p-2 w-60 bg-blue-500 text-white rounded">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
