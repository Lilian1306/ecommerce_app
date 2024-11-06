import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

export default function Context() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
       <img className='w-full md:max-w-[480px]' src={assets.contact_img} alert=''/>
       <div className='flex flex-col justify-center items-start gap-6'>
         <p className='font-semibold text-xl text-gray-600'>Our Store</p>
         <p className='text-gray-500'>ISABEL BOUTIQUE ✨, <br/> P4R6+9JG, Entrada, Comalapa</p>
         <p className='text-gray-500'> Tel: (502) 7777-7777 <br/> Email: isabel@gmail.com</p>
         <p></p>
         <p></p>
       </div>
      </div>
    </div>
  )
}
