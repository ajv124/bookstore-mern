
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'
import { toast } from 'react-toastify'

function Home() {
  const navigate = useNavigate()
  const { searchKey, setSearchKey } = useContext(searchContext)

  const [homeBooks, setHomeBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getHomeBooks = async () => {
      try {
        const result = await getHomeBooksAPI()

        if (result?.status === 200) {
          setHomeBooks(
            Array.isArray(result.data) ? result.data : []
          )
        } else {
          toast.error('Unable to load books.')
        }
      } catch (error) {
        console.error('Error fetching books:', error)
        toast.error('Something went wrong while loading books.')
      } finally {
        setLoading(false)
      }
    }

    getHomeBooks()
  }, [])

  const handleSearch = (e) => {
    e?.preventDefault()

    const searchValue = searchKey?.trim()

    if (!searchValue) {
      toast.warning('Please Input a Book Title')
      return
    }

    if (!sessionStorage.getItem('token')) {
      toast.warning('Please login to explore more...')
      setTimeout(() => navigate('/login'), 2000)
      return
    }

    navigate('/books')
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="min-h-105 md:min-h-125 flex flex-col
        justify-center items-center bg-[url('/landing.png')]
        bg-cover bg-center text-white"
      >
        <div className="w-full min-h-105 md:min-h-125
          bg-black/50 flex flex-col justify-center items-center
          text-center px-5">

          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Wonderful Books
          </h1>

          <p className="text-base md:text-lg mb-7">
            Gift your family and friends a book
          </p>

          <form
            onSubmit={handleSearch}
            className="w-full max-w-md flex items-center
            bg-white rounded-full p-1 shadow-lg"
          >
            <input
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              type="text"
              placeholder="Search A Book"
              className="flex-1 min-w-0 bg-transparent
              text-black outline-none px-4 py-3 rounded-full"
            />

            <button
              type="submit"
              aria-label="Search books"
              className="bg-black text-white p-3 rounded-full
              hover:bg-gray-700 transition"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="md:px-20 lg:px-40 my-10 p-5
        flex flex-col justify-center items-center">

        <h1 className="text-3xl font-bold text-center">
          NEW ARRIVALS
        </h1>

        <h2 className="text-xl md:text-3xl my-2 text-center">
          Explore our Latest Collection
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-4 gap-6 my-8">

          {loading ? (
            <p className="col-span-full text-center text-gray-500">
              Loading books...
            </p>
          ) : homeBooks.length > 0 ? (
            homeBooks.map((book, index) => (
              <div
                key={book?._id || book?.id || index}
                className="shadow-md rounded-lg p-3
                hover:shadow-xl transition duration-300
                bg-white"
              >
                <img
                  className="w-full h-70 object-cover rounded"
                  src={book?.imageURL}
                  alt={book?.title || 'Book cover'}
                  loading="lazy"
                />

                <div className="flex flex-col justify-center
                  items-center mt-4 text-center">

                  <h3 className="text-blue-600 font-bold text-xl">
                    {book?.author}
                  </h3>

                  <h4 className="text-gray-800 mt-1">
                    {book?.title}
                  </h4>

                  <p className="font-bold text-red-500 mt-2">
                    {book?.discountPrice}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No books available right now.
            </p>
          )}
        </div>

        {/* Explore More Button */}
        <div className="text-center my-5">
          <Link
            to="/books"
            className="inline-block bg-black px-7 py-3
            text-white font-bold rounded
            hover:bg-gray-700 transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="md:grid md:grid-cols-2 items-center
        gap-10 p-5 md:px-20 lg:px-40 my-10">

        <div className="text-center">
          <h2 className="text-2xl font-bold">
            FEATURED AUTHORS
          </h2>

          <h3 className="text-xl mt-2">
            Captivates with every word
          </h3>

          <p className="my-5 text-justify leading-relaxed">
            Welcome to the Author Spotlight section of our bookstore
            website! This feature is designed to celebrate writers,
            showcase their creative journeys, and help readers
            discover the minds behind their favorite books.
          </p>

          <p className="text-justify font-semibold">
            Our Author Features include:
          </p>

          <p className="text-justify my-3 leading-relaxed">
            <span className="font-bold">
              Author Profiles:
            </span>{' '}
            Get to know each author through detailed profiles that
            highlight their biography, writing style, achievements,
            and personal inspirations.
          </p>

          <p className="text-justify my-3 leading-relaxed">
            <span className="font-bold">
              Published Works:
            </span>{' '}
            Explore a curated list of books written by the author
            with quick access to book details, reviews, and
            purchase options.
          </p>

          <p className="text-justify my-3 leading-relaxed">
            <span className="font-bold">
              Interviews & Insights:
            </span>{' '}
            Exclusive interviews, behind-the-scenes stories, and
            writing tips that offer a deeper look into the
            author's creative world.
          </p>
        </div>

        <div className="flex justify-center items-center p-5">
          <img
            className="w-full max-w-md h-87.5 object-cover
            rounded-lg shadow-md"
            src="https://images.pexels.com/photos/39039372/pexels-photo-39039372/free-photo-of-woman-writing-in-library-with-bookshelves.jpeg?cs=tinysrgb&dpr=1&w=500"
            alt="Featured author"
            loading="lazy"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="md:px-40 my-10 p-5
        flex flex-col justify-center items-center">

        <h1 className="text-3xl font-bold text-center">
          TESTIMONIALS
        </h1>

        <h2 className="text-xl md:text-3xl my-2 text-center">
          See What Others Are Saying
        </h2>

        <div className="my-8 max-w-3xl w-full
          flex flex-col justify-center items-center
          bg-gray-50 shadow-sm rounded-lg p-6">

          <img
            className="w-37.5 h-37.5 rounded-full
            object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToju74pZnVdhvMLo1EFvhXnhByR8GCt9Zy02Q3eXfwNgJt4SL0i-DYIfw&s=10"
            alt="Customer profile"
            loading="lazy"
          />

          <h3 className="my-3 font-bold text-xl">
            Luca
          </h3>

          <p className="text-justify leading-relaxed text-gray-700">
            This bookstore has completely changed the way I
            discover new books. The recommendations are always
            spot-on, and the delivery is super fast. I love the
            clean interface and the huge collection! The user
            experience is amazing! Easy navigation, great deals,
            and beautifully organized categories. I appreciate
            how quickly customer support responds too.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
