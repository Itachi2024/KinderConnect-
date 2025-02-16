import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>KinderConnect is a dedicated platform designed to help parents easily connect with experienced child psychiatrists and therapists. Our mission is to provide a safe, accessible, and hassle-free way for children to receive expert mental health support.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>KinderConnect</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Address</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 7340350360</li>
            <li>kinderconnect1098@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ KinderConnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
