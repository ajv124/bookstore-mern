import React from 'react'

function Purchase() {
  return (
    <div className='p-10 my-15 shadow rounded'>
            {/* duplicate book */}
            <div className="p-5 rounded mt-4 bg-blue-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <h1 className="text-2xl">Title</h1>
                        <h2 className="text-xl">Author</h2>
                        <h3 className="text-lg text-blue-700">$ Discount Price</h3>
                        <p className='text-justify'>Abstract</p>
                        {/* status image */}
                        <div className="flex my-3">
                            <img width={'120px'} height={'120px'} src="https://as2.ftcdn.net/jpg/04/77/57/15/1000_F_477571543_KP5JZby2U1ungllkwSrdw0wsI7nkKFVQ.jpg" alt="Pending" />
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src="https://imgs.search.brave.com/bZciB_bWPT6baxQsHq3yJbrTkCwJXyIGb-JTiFpShME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LTIwMjctY292/ZXJzLWZvci10b3It/bWFsYXphbi1wYXBl/cmJhY2tzLXYwLW5z/OWV3a3h6dW55ZzEu/cG5nP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTgxZGNkYjI4MTIy/Njg3MmNlMjFhYjVk/OGVlZDIyMjY4OWM4/MTc3OTI" alt="Book" />
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default Purchase