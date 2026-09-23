import React from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png" alt="Admin" />
      </div>
      {/* name */}
      <h3 className='text-xl font-bold my-5 text-center'>Name</h3>
      {/* links */}
      <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='mt-3'>
          <Link to={'/admin'} className='flex items-center'><FaChartBar className='me-2'/>Dashboard</Link>
        </div>
        <div className='mt-3'>
          <Link to={'/admin/resources'} className='flex items-center'><FaDatabase  className='me-2'/>Collections</Link>
        </div>
        <div className='mt-3'>
          <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-2'/>Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar