import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      {/* hero section */}
      <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.4' }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderful Books</h1>
          <p>Gift you family and friends a book</p>
          <div>
            <input type="text" placeholder='Search A Book' className='bg-white p-2 rounded-3xl w-100 text-black' />
            <FaSearch className='text-gray-500 cursor-pointer' style={{ marginTop: '-28px', marginLeft: '360px' }} />
          </div>
        </div>
      </div>
      {/* NEW Arrivals */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-3xl my-2'>Explore our Latest Collection</h1>
        <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicating card */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://imgs.search.brave.com/bZciB_bWPT6baxQsHq3yJbrTkCwJXyIGb-JTiFpShME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LTIwMjctY292/ZXJzLWZvci10b3It/bWFsYXphbi1wYXBl/cmJhY2tzLXYwLW5z/OWV3a3h6dW55ZzEu/cG5nP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTgxZGNkYjI4MTIy/Njg3MmNlMjFhYjVk/OGVlZDIyMjY4OWM4/MTc3OTI" alt="book" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
              <h3 className='font-bold text-red-500'>Price</h3>
            </div>
          </div>
        </div>
        {/* button */}
        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white font-black'>Explore More</Link>
        </div>
      </section>
      {/* Authors */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold'>FEATURED AUTHORS</h2>
          <h3 className='text-xl'>Captivates with every word</h3>
          <p className="my-5 text-justify">Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>

            <p className='text-justify'>Our Author Features include:</p>

            <p className='text-justify my-3'><span className='font-black'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

            <p className='text-justify my-3'><span className='font-black'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

            <p className='text-justify my-3'><span className='font-black'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author's creative world.</p>
            <div className='p-5 flex items-center justify-center'>
              <img src="https://imgs.search.brave.com/THwuugQiB9ndFnKCNZOxqr-EG7XP9l2Y5Abr9IKXjw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/MzQ0ODM1L3Bob3Rv/L2NoZWVyZnVsLWNv/bmZpZGVudC15b3Vu/Zy1hZnJpY2FuLWFt/ZXJpY2FuLWJ1c2lu/ZXNzd29tYW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU1r/R2NlQTVJb0V0VXpo/NXJaMzFkSkJjbGxY/TmdGeTZmc1RMN3l4/QThwcFk9" alt="" />
            </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h1 className='text-3xl my-2'>See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="" alt="User" />
          <h3 className='my-3'>Luca</h3>
          <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>
      </section>
    </>
  )
}

export default Home