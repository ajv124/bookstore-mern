import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PaymentFailure() {
    return (
        <>
            <div>
                <Header />
                <div className="container min-h-screen flex justify-center items-center">
                    <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
                        <div>
                            <h1 className='text-blue-600 md:text-4xl font-bold'>Sorry.. payment declined</h1>
                            <p className='text-2xl my-10'>We apologize for the inconvenience</p>
                            <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold'>Explore more books</Link>
                        </div>
                        <div>
                            <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="payment failed" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentFailure