import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className="container min-h-screen flex justify-center items-center">
        <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
            <div>
                <h1 className='text-blue-600 md:text-4xl font-bold'>Congratulations!</h1>
                <p className='text-2xl my-10'>Thank you for your purchase</p>
                <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold'>Explore more books</Link>
            </div>
            <div>
                <img src="https://fastpan.utiindia.in/WL-CNT/main/assest/img/success.gif" alt="payment success" />
            </div>
        </div>
    </div>
    </>
  )
}

export default PaymentSuccess