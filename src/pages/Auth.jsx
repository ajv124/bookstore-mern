import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { routeContext } from '../contextAPI/RouteGuard'

function Auth({ insideRegister }) {

    const { role, setRole, setAuthorizedUser } = useContext(routeContext)
    const [togglePassword, setTogglePassword] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: "Username",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().min(3, "Must be atleast 3 characters").required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().required("Required")
        }),
        onSubmit: (values, { resetForm }) => {
            if (insideRegister) {
                handleRegister(values)
            } else {
                handleLogin(values)
            }
            resetForm()
        }
    })

    const handleLogin = async (userData) => {
        try {
            const result = await loginAPI(userData)

            if (result.status === 200) {
                toast.success("Successfully Logged In...")

                sessionStorage.setItem("token", result.data.token)
                sessionStorage.setItem("user", JSON.stringify(result.data.user))

                setAuthorizedUser(true)
                setRole(result.data.user.role)

                setTimeout(() => {
                    if (result.data.user.role === "admin") {
                        navigate('/admin')
                    } else {
                        navigate('/')
                    }
                }, 2500)

            } else {
                toast.error("Login failed")
            }
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "Login failed")
        }
    }

    const handleRegister = async (userData) => {
        try {
            const result = await registerAPI(userData)

            if (result.status === 201) {
                toast.success("Successfully Registered... Please Login!!!")
                navigate("/login")
            } else {
                toast.error("Registration failed")
            }
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "Registration failed")
        }
    }

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const { email, name, picture } = jwtDecode(credentialResponse.credential)

            const result = await googleLoginAPI({
                username: name,
                email,
                password: "googlePassword",
                picture
            })

            if (result.status === 200) {
                toast.success("Login Successful")

                sessionStorage.setItem("token", result.data.token)
                sessionStorage.setItem("user", JSON.stringify(result.data.user))

                setAuthorizedUser(true)
                setRole(result.data.user.role)

                setTimeout(() => {
                    if (result.data.user.role === "admin") {
                        navigate('/admin')
                    } else {
                        navigate('/')
                    }
                }, 2500)
            }
        } catch (error) {
            console.error(error)
            toast.error("Google login failed")
        }
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center text-blue-900 px-4 py-8'>

            <div className='w-full max-w-md'>

                <h1 className='text-center font-bold text-3xl mb-6'>
                    BOOKSTORE
                </h1>

                <div className='bg-blue-900 text-white p-6 sm:p-8 rounded-lg shadow-xl'>

                    <div className='flex justify-center mb-5'>
                        <FaUserAlt className='text-4xl' />
                    </div>

                    <h1 className='text-center font-bold text-2xl mb-6'>
                        {insideRegister ? "Register" : "Login"}
                    </h1>

                    <form onSubmit={formik.handleSubmit} className='w-full'>

                        {insideRegister && (
                            <div className='mb-4'>
                                <input
                                    name='username'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    className='bg-white p-3 w-full rounded text-blue-900 outline-none'
                                    type="text"
                                    placeholder='Username'
                                />
                                <div className='text-yellow-400 text-sm mt-1'>
                                    {formik.errors.username}
                                </div>
                            </div>
                        )}

                        <div className='mb-4'>
                            <input
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className='bg-white p-3 w-full rounded text-blue-900 outline-none'
                                type="email"
                                placeholder='Email'
                            />
                            <div className='text-yellow-400 text-sm mt-1'>
                                {formik.errors.email}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='relative'>
                                <input
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    className='bg-white p-3 pr-12 w-full rounded text-blue-900 outline-none'
                                    type={togglePassword ? "text" : "password"}
                                    placeholder='Password'
                                />

                                <button
                                    type='button'
                                    onClick={() => setTogglePassword(!togglePassword)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                                >
                                    {togglePassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className='text-yellow-400 text-sm mt-1'>
                                {formik.errors.password}
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='bg-green-600 hover:bg-green-700 p-3 w-full rounded font-semibold transition'
                        >
                            {insideRegister ? "Register" : "Login"}
                        </button>

                        {!insideRegister && (
                            <div className='my-6 text-center'>
                                <p className='mb-3'>---------- or ----------</p>

                                <div className='flex justify-center items-center w-full'>
                                    <GoogleLogin
                                        onSuccess={handleGoogleLogin}
                                        onError={() => {
                                            console.log('Login Failed')
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div className='text-center mt-5'>
                            {insideRegister ? (
                                <p className='text-blue-300'>
                                    Existing User?
                                    <Link to={'/login'} className='underline ml-2'>
                                        Login
                                    </Link>
                                </p>
                            ) : (
                                <p className='text-pink-300'>
                                    New User?
                                    <Link to={'/register'} className='underline ml-2'>
                                        Register
                                    </Link>
                                </p>
                            )}
                        </div>

                    </form>
                </div>
            </div>

            <ToastContainer
                position='top-center'
                theme='colored'
                autoClose={3000}
            />
        </div>
    )
}

export default Auth