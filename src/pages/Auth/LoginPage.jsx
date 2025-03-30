import React from 'react';
import AuthImage from '../../assets/auth/auth.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='flex-1 hidden md:block h-[100%]'>
                <img src={AuthImage} alt='' className='h-[100%] w-[100%]' />
            </div>

            <div className='flex-1 flex justify-center items-center flex-col h-[100%]'>
                <div className='w-full max-w-md p-6'>
                    <div className='text-right mb-10'>
                        <p>Don’t  have an account? {' '}<Link to='/register' className='text-green-500'>Sign Up</Link></p>
                    </div>

                    <h2 className='text-2xl font-semibold mb-4'>Welcome Back</h2>
                    <p className='text-gray-600 mb-6'>Dive into back and keep learning. 🤩</p>

                    <form className='space-y-4'>



                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                            <div className='mt-1'>
                                <input type='email' placeholder='Email' id='email' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                            <div className='mt-1 relative'>
                                <input type='password' placeholder='Password' id='password' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md  mb-4' />
                            </div>
                        </div>

                        <Link to={"/forget"} className='text-[#049F30]'>Forget Password?</Link>

                        <Link to={"/dashboard/home"}>
                            <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>Sign In</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;