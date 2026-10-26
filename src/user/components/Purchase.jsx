import React, { useState, useEffect } from 'react'
import { getUserBoughtBooksAPI } from '../../services/allAPI'

function Purchase() {

    const [purchaseBooks, setPurchaseBooks] = useState([])
    console.log(purchaseBooks)

    useEffect(() => {
        getBoughtBooks()
    }, [])

    const getBoughtBooks = async () => {
        const result = await getUserBoughtBooksAPI()
        setPurchaseBooks(result.data)
    }

    return (
        <div className='p-10 my-15 shadow rounded'>
            {/* duplicate book */}
            {
                purchaseBooks?.length > 0 ?
                    purchaseBooks?.map(book => (
                        <div key={book?._id} className="p-5 rounded mt-4 bg-blue-100">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className="px-4">
                                    <h1 className="text-2xl">{book?.title}</h1>
                                    <h2 className="text-xl">{book?.author}</h2>
                                    <h3 className="text-lg text-blue-700">$ {book?.discountPrice}</h3>
                                    <p className='text-justify'>{book?.abstract}</p>
                                    {/* status image */}
                                    <div className="flex my-3">
                                        <img width={'120px'} height={'120px'} src="https://as2.ftcdn.net/jpg/04/77/57/15/1000_F_477571543_KP5JZby2U1ungllkwSrdw0wsI7nkKFVQ.jpg" alt="Pending" />
                                    </div>
                                </div>
                                <div className="px-4 mt-4 md:mt-0">
                                    <img src={book?.imageURL} alt="Book" />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center font-bold my-5'>No Books Purchased Yet</div>
            }
        </div>
    )
}

export default Purchase