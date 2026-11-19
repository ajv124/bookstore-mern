import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {routeContext} from '../contextAPI/RouteGuard'

function Pnf() {
  const {role,setRole,authorizedUser,setAuthorizedUser}=useContext(routeContext)
  const navigate=useNavigate()
  const backToHome=()=>{
    if(role=="user"){
      navigate("/")
    }else{
      navigate('/admin')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center text-white">

      {/* 404 Image */}
      <img
        src="https://illustrations.popsy.co/gray/page-not-found.svg"
        alt="Page Not Found"
        className="w-72 md:w-96 mb-8"
      />

      {/* Error Code */}
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-base md:text-lg max-w-md">
        Sorry, the page you are looking for doesn't exist
        or may have been moved.
      </p>

      {
        authorizedUser?
        <button onClick={backToHome} className='bg-black mt-5 px-3 py-2'>Home</button>
        :
        <Link to={'/'} className='bg-black mt-5 px-3 py-2'>Home</Link>
      }

    </div>
  )
}

export default Pnf