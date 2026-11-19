import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../services/allAPI'
import { useContext } from 'react'
import { searchContext } from '../../contextAPI/ShareContext'

function Books() {
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")
  const [allBooks, setAllBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const { searchKey, setSearchKey } = useContext(searchContext)

  useEffect(() => {
    const userToken = sessionStorage.getItem("token")
    if (userToken) {
      setToken(userToken)
      getBooks()
    }
  }, [searchKey])

  const getBooks = async () => {
    const result = await getAllBooksAPI(searchKey)
    if (result.status === 200) {
      setAllBooks(result.data)
      setFilteredBooks(result.data)
      const categories = [...new Set(result.data.map(book => book.category))]
      setCategoryList(categories)
      console.log(allBooks,filteredBooks,categories)
    }
  }

  const filterBooks = (category) => {
    if (category === 'all') {
      setFilteredBooks(allBooks)
    } else {
      const filtered = allBooks.filter(book => book.category === category)
      setFilteredBooks(filtered)
    }
  }

  const handleSearch = () => {
    if (searchKey.trim() === "") {
      setFilteredBooks(allBooks)
    } else {
      const searched = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchKey.toLowerCase())
      )
      setFilteredBooks(searched)
    }
  }

  return (
    <>
      <Header />
      {token ? (
        <div>
          <div className="flex flex-col justify-center items-center my-5">
            <h1 className="text-3xl font-bold my-5">All Books</h1>
            <div className='flex my-5'>
              <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className='p-2 border border-gray-200 w-full md:w-80'
                placeholder='Search by Book Title'
              />
            </div>
          </div>

          {/* grid-filter & book card */}
          <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
            {/* filter */}
            <div className='col-span-1'>
              <div className='flex justify-between'>
                <h1 className="text-2xl font-bold">Filter</h1>
                <button onClick={() => setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars /></button>
              </div>
              {/* filter category */}
              <div className={toggle ? "block" : "hidden md:block"}>
                <div className="mt-3">
                  <input onChange={() => filterBooks('all')} type="radio" name='filter' id='no-filter' defaultChecked />
                  <label htmlFor="no-filter" className='ms-3'>All</label>
                </div>
                {/* duplicate filter category */}
                {
                  categoryList?.map(category => (
                    <div key={category} className='mt-3'>
                      <input onChange={() => filterBooks(category)} type="radio" name='filter' id={category} />
                      <label htmlFor={category} className='ms-3'>{category}</label>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Book card */}
            <div className='col-span-3'>
              <div className="md:grid grid-cols-4 md:my-0 gap-4">
                {
                  filteredBooks?.length > 0 ? (
                    filteredBooks.map(book => (
                      <div key={book?._id} className="shadow rounded p-3 m-4 md:my-0">
                        <img className="w-full h-75 object-cover" src={book?.imageURL} alt="book" />
                        <div className="flex flex-col justify-center items-center mt-4">
                          <h2 className='text-blue-600 font-bold text-xl'>{book?.author}</h2>
                          <h3 className="text-lg">{book?.title}</h3>
                          <Link to={`/books/${book?._id}`} className='font-bold bg-blue-500 p-2 text-white mt-2'>View Book</Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='col-span-4 text-center font-bold my-5'>Books Not Found!!!</div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[60vh] text-2xl font-semibold text-gray-600">
          Please login to view books.
        </div>
      )}
    </>
  )
}

export default Books