import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { bookListAPI, editBookStatusAPI, userListAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'


function AdminResource() {

  const [currentTab, setCurrentTab] = useState(1)
  const [allUsers, setAllUsers] = useState([])
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    if (currentTab == 2) {
      getAllUsers()
    } else {
      getAllBooks()
    }
  }, [currentTab])

  const getAllUsers = async () => {
    const result = await userListAPI()
    if (result.status == 200) {
      setAllUsers(result.data)
    }
  }

  const getAllBooks = async () => {
    const result = await bookListAPI()
    if (result.status == 200) {
      setAllBooks(result.data)
    }
  }

  const updateBookStatus=async (id)=>{
    const result=await editBookStatusAPI(id)
    if(result.staus==200){
      toast.success("Book Approved successfully")
      getAllBooks
    }
  }

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
              {
                allBooks?.length > 0 ?
                  allBooks?.map(book => {
                    <div className='shadow rounded p-3 m-4 md:my-0'>
                      <img width={'100%'} height={'300px'} src={book?.imageURL} alt="book" />
                      <div className="flex flex-col justify-center items-center mt-4">
                        <h2 className='text-blue-600 font-bold text-xl'>{book?.author}</h2>
                        <h3 className='font-bold text-red-500'>{book?.price}</h3>
                        {/* approve button */}
                        {
                          book?.status=="pending"?
                          <button onClick={()=>updateBookStatusController(book?._id)} className="bg-green-600 text-white p-2 mt-2 w-full">APPROVE</button>
                          :
                          <img src="https://static.vecteezy.com/system/resources/previews/016/746/182/original/green-check-mark-icon-symbol-logo-in-a-circle-tick-symbol-green-color-illustration-free-vector.jpg" alt="approved" />
                        }
                      </div>
                    </div>
                  })
                  :
                  <div>No books added yet!!!</div>
              }

            </div>
          }
          {
            currentTab == 2 &&
            <div>
              <div className='md:grid grid-cols-3 my-5 w-full'>
                {/* duplicating card */}
                {
                  allUsers.length > 0 ?
                    allUsers?.map(user => {
                      <div key={user._id} className='shadow rounded p-2 m-2  bg-blue-100'>
                        <p className='flex mt-3 items-center'>ID:{user._id}</p>
                        <img width={'80%'} height={'80px'} style={{ borderRadius: '50%' }} src={user?.picture == "" ? "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" : user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture : `${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`} alt="user" />
                        <div className="flex flex-col ml-3 w-full">
                          <h2 className='text-blue-600 font-bold text-md'>{user?.username}</h2>
                          <h3 className='text-xs'>{user.email}</h3>
                        </div>
                      </div>
                    })
                    :
                    <div></div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminResource