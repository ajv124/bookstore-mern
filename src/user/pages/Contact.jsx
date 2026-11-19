
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { MdEmail } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { FaLocationPin } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
function Contact() {
  const form = useRef(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    const { name, email, message } = form.current.elements

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      toast.error('Please fill in all fields.')
      return
    }

    if (!email.checkValidity()) {
      toast.error('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )

      toast.success(
        'Thank you for contacting us! Our team will get back to you soon.'
      )

      form.current.reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <div className="md:px-20 px-5 py-5 my-5">

        {/* Heading */}
        <h1 className="text-center my-5 font-bold text-3xl">
          Contact US
        </h1>

        <p className="text-justify leading-7 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate harum cumque et consectetur molestias doloremque
          omnis nobis sint unde quo. Adipisci minus nemo laborum?
          Architecto, provident nam! Reiciendis, iste minus?
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:px-40 p-5 mt-5">

          <div className="flex items-center gap-4">
            <div className="w-12.5 h-12.5 shrink-0 rounded-full flex items-center justify-center bg-gray-200">
              <FaLocationPin className="text-xl" />
            </div>
            <p>125 Main Street, 123456</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12.5 h-12.5 shrink-0 rounded-full flex items-center justify-center bg-gray-200">
              <FaPhoneAlt className="text-xl" />
            </div>
            <p>1234567890</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12.5 h-12.5 shrink-0 rounded-full flex items-center justify-center bg-gray-200">
              <MdEmail className="text-xl" />
            </div>
            <p>bookstore@gmail.com</p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 p-5 md:px-40 items-center">

          <div className="bg-gray-200 p-6 md:p-8 rounded-lg w-full">

            <h2 className="text-xl font-semibold mb-6">
              Send us a message
            </h2>

            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-5">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  maxLength={100}
                  className="bg-white w-full p-3 rounded outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-5">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  className="bg-white w-full p-3 rounded outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows="5"
                  maxLength={5000}
                  className="bg-white w-full p-3 rounded outline-none resize-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>

            </form>

          </div>

        </div>

        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />

      </div>
    </>
  )
}

export default Contact
