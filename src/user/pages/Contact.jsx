import React from 'react'
import Header from '../components/Header'
import { FaLocationPin } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 p-5 my-5'>
        <h1 className='text-center my-5 font-bold text-3xl'>Contact US</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum cumque et consectetur molestias doloremque omnis nobis sint unde quo. Adipisci minus nemo laborum? Architecto, provident nam! Reiciendis, iste minus?</p>
        <div className='md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0'>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <FaLocationPin />
            </div>
            <p className='ms-5'>125 Main Street,123456</p>
          </div>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <FaPhoneAlt />
            </div>
            <p>1234567890</p>
          </div>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <MdEmail/>
            </div>
            <p className='mt-5'>bookstore@gmail.com</p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40 items-center'>
          <div className='bg-gray-200 p-5'></div>
        </div>

      </div>
    </>
  )
}

export default Contact