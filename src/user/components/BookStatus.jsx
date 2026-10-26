import React, { useState, useEffect } from 'react'
import { deleteUserBookAPI, getUserBooksAPI } from '../../services/allAPI'

function BookStatus() {

    const [uploadBooks, setUploadBooks] = useState([])
    console.log(uploadBooks)

    useEffect(() => {
        getUploadBooks()
    }, [])

    const getUploadBooks = async () => {
        const result = await getUserBooksAPI()
        setUploadBooks(result.data)
    }

    const deleteBook = async (id) => {
        const result = await deleteUserBookAPI(id)
        getUploadBooks()
    }

    return (
        <div className='p-10 my-15 shadow rounded'>
            {/* duplicate book */}
            {
                uploadBooks?.length > 0 ?
                    uploadBooks?.map(book => (
                        <div key={book?._id} className="p-5 rounded mt-4 bg-blue-100">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className="px-4">
                                    <h1 className="text-2xl">{book?.title}</h1>
                                    <h2 className="text-xl">{book?.author}</h2>
                                    <h3 className="text-lg text-blue-700">$ {book?.discountPrice}</h3>
                                    <p className='text-justify'>{book?.abstract}</p>
                                    {/* status image */}
                                    <div className="flex my-3">
                                        {
                                            book?.status == "pending" ?
                                                <img width={'120px'} height={'120px'} src="https://imgs.search.brave.com/BOPlwOsHce-ZVnnI-NnTxH-U6ckwlIYdOlfxHtCP7v4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wZW5k/aW5nLXN0aWNrZXIt/c2lnbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLXJlY3Rhbmd1/bGFyLWJ1dHRvbi0z/NzUxMzY4ODQuanBn" alt="Pending" />
                                                :
                                                book?.status == "approved" ?
                                                    <img width={'120px'} height={'120px'} src="https://imgs.search.brave.com/ULB9GKNZwDgZ2rCTcIB9S6aFe5jbW5zLrjE6lU1HqPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBy/b3ZlZC1yaWJib24t/aXNvbGF0ZWQtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC0zOTQ3/MTIwNDUuanBn" alt="Approved" />
                                                    :
                                                    <img width={'120px'} height={'120px'} src="https://imgs.search.brave.com/GNQoyrBjjx3wPNUG7B0tFxFlh7BwEAdlNKnq0m1vRNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9z/b2xkLW91dC1zdGFt/cC0xMTUyMzQzNTYw/MWtqcmhhc3VhcmYu/cG5n" alt="Sold" />
                                        }
                                    </div>
                                </div>
                                <div className="px-4 mt-4 md:mt-0">
                                    <img src={book?.imageURL} alt="Book" />
                                    <div className="mt-4 flex justify-end">
                                        <button onClick={() => deleteBook(book?._id)} className='bg-red-700 text-white p-2 rounded'>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center font-bold my-5'>Book Not Found!!!</div>
            }
        </div>
    )
}

export default BookStatus