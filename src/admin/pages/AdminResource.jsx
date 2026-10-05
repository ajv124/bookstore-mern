import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {

  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-3xl font-bold text-center mb-10">All Resources</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-400 border-b rounded cursor-pointer"}>Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-400 border-b rounded cursor-pointer"}>Users</p>
          </div>
          {/* tab content */}
          {
            currentTab == 1 &&
            <div className='md:grid grid-cols-4 md:my-0'>
              {/* duplicating card */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://imgs.search.brave.com/bZciB_bWPT6baxQsHq3yJbrTkCwJXyIGb-JTiFpShME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LTIwMjctY292/ZXJzLWZvci10b3It/bWFsYXphbi1wYXBl/cmJhY2tzLXYwLW5z/OWV3a3h6dW55ZzEu/cG5nP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTgxZGNkYjI4MTIy/Njg3MmNlMjFhYjVk/OGVlZDIyMjY4OWM4/MTc3OTI" alt="book" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
                  <h3 className='font-bold text-red-500'>Price</h3>
                  {/* approve button */}
                  <button className="bg-green-600 text-white p-2 mt-2 w-full">APPROVE</button>
                </div>
              </div>
            </div>
          }
          {
            currentTab == 2 &&
            <div>
              <div className='md:grid grid-cols-3 my-5 w-full'>
                {/* duplicating card */}
                <div className='shadow rounded p-2 m-2  bg-blue-100'>
                  <p className='flex mt-3 items-center'>
                    <img width={'80%'} height={'80px'} style={{borderRadius:'50%'}} src="https://th.bing.com/th/id/OIP.RLquPRs_tN4rA6t8W-onAwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="user" />
                    <div className="flex flex-col ml-3 w-full">
                      <h2 className='text-blue-600 font-bold text-md'>Username</h2>
                      <h3 className='text-xs'>Mail</h3>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminResource