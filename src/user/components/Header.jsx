import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaGear } from "react-icons/fa6";
import axiosInstance from '../../api/axiosInstance'
function Header() {
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")
  const [dp, setDp] = useState("")
  const [userId, setUserId] = useState("")
  const [dropDown, setDropDown] = useState("false")

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }
  }, [token])

  return (
    <>
      {/* Header top part */}
      <div className='grid grid-cols-3 p-5'>
        {/* logo */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://imgs.search.brave.com/vzBTrNPzyqYW0WT9qAVdlfMTuR1KcToa1QO7M7qcc9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIzMDMxOC9vdXJt/aWQvcG5ndHJlZS1y/ZWFkaW5nLWJvb2tz/LWljb24tdmVjdG9y/LXBuZy1pbWFnZV82/NjUzNTE5LnBuZw" alt="Logo" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        {/* login */}
        <div className='md:flex justify-end items-center hidden'>
          <FaInstagram />
          <FaTwitter className='mx-2' />
          <FaFacebook />
          {/* Login Link */}
          {
            !token ?
              <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded p-1 hover:bg-gray-200'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" : dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
                </button>
                {/* dropDown menu */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                    <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaGear /></Link>
                    <button className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />Logout</button>
                  </div>
                }
              </div>
          }
        </div>
      </div>
      {/* Navigation part */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>

        {/* menu icon login button */}
        <div className="flex justify-between items-center text-2xl py-2 md:hidden">
          <button onClick={() => setToggle(!toggle)}><IoMenu /></button>
          {
            !token ?
              <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center hover:bg-white hover:text-black'><FaUser className='me-1' />Login</Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded p-1 hover:bg-gray-200'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" : dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
                </button>
                {/* dropDown menu */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                    <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaGear /></Link>
                    <button className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />Logout</button>
                  </div>
                }
              </div>
          }
        </div>

        <ul className={toggle ? 'flex flex-col' : 'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-6'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-6'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-6'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header