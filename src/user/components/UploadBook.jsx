import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
    return (
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Total Pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white' />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book image */}
                    <div className='mb-3 flex justify-center items-center mt-10'>
                        <label htmlFor="bookImage">
                            <input type="file" id='userProfile' hidden />
                            <img src="https://imgs.search.brave.com/eB-GijCyoNsviNeu4oiD20Zs4Dn3kTaadVLCKyvLImA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjM2LzcxMC9zbWFs/bC91cGxvYWQtZmls/ZS1kYXRhYmFzZS1w/bmcucG5n" alt="Book File Not Found" />
                        </label>
                    </div>
                    {/* preview of uploaded books */}
                    <div>
                        <img width={'70px'} height={'70px'} src="https://imgs.search.brave.com/bZciB_bWPT6baxQsHq3yJbrTkCwJXyIGb-JTiFpShME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LTIwMjctY292/ZXJzLWZvci10b3It/bWFsYXphbi1wYXBl/cmJhY2tzLXYwLW5z/OWV3a3h6dW55ZzEu/cG5nP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTgxZGNkYjI4MTIy/Njg3MmNlMjFhYjVk/OGVlZDIyMjY4OWM4/MTc3OTI" alt="Book Image" />
                        <label htmlFor="bookUpload" hidden>
                            <FaPlus className='text-3xl ms-2' />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-end justify-center w-full p-5 mt-5">
                <button className="bg-yellow-500 text-white p-3 rounded me-2">Reset</button>
                <button className="bg-green-500 text-white p-3 rounded">Add Book</button>
            </div>
        </div>
    )
}

export default UploadBook