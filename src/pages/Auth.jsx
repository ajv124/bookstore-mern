import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {
  const [togglePassword,setTogglePassword]=useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='text-center font-bold text-3xl'>BOOKSTORE</h1>
        <div style={{ width: '400px' }} className='bg-blue-900 text-white p-5 flex justify-center items-center flex-col my-5'>
          <FaUserAlt className='text-3xl' />
        </div>
        <h1 className='3xl'>{insideRegister ? "Register" : "Login"}</h1>
        <form className='my-5 w-full'>
          {/* username */}
          {
            insideRegister &&
            <input className='bg-white p-2 w-full rounded my-5 text-blue-900' type="text" placeholder='UserName' />
          }
          {/* email */}
          <input className='bg-white p-2 w-full rounded my-5 text-blue-900' type={"text"} placeholder='Mail' />
          {/* password */}
          <div>
            <input className='bg-white p-2 w-full rounded my-5 text-blue-900' type={togglePassword?"text":"password"} placeholder='Password' />
            {
              togglePassword?
              <FaEyeSlash onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '330px' }}/>
              :
              <FaEye onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '330px' }} />
            }
          </div>
          {/* forgot password */}
          <div className='flex justify-between mb-5'>
            <p className='text-xs text-orange-300'>*Never Share Your Password</p>
            {
              !insideRegister&&
              <button className='text-xs underline'>Forgot Password</button>
            }
          </div>
          {/* Login/Register Button */}
          <div className='text-center'>
            {
              insideRegister?
              <button className='bg-green-600 p-2 w-full rounded'>Register</button>
              :
              <button className='bg-green-600 p-2 w-full rounded'>Login</button>
            }
          </div>
          {/* google login */}
          {
            !insideRegister &&
            <div className='my-5 text-center'>
              <p>-------------or---------------</p>
              <div className='mt-2 flex justify-center items-center w-full'>
                Google Authentication
              </div>
            </div>
          }
          {/* new/Already */}
          <div>
            {
              insideRegister?
              <p className='text-blue-300'>Existing User?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
              :
              <p className='text-pink-300'>New User?<Link to={'/register'} className='underline ms-5'>Register</Link></p>
            }
          </div>
        </form>
      </div>

    </div>
  )
}

export default Auth