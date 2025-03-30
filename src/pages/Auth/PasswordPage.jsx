import React from 'react';
import AuthImage from '../../assets/auth/auth.png';
import { Link } from 'react-router-dom';

const PasswordPage = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='flex-1 hidden md:block h-[100%]'>
                <img src={AuthImage} alt='' className='h-[100%] w-[100%]' />
            </div>

            <div className='flex-1 flex justify-center items-center flex-col h-[100%]'>
                <div className='w-full max-w-md p-6'>
                    <div className='text-right mb-10'>
                        <p>Remember your password? {' '}<Link to='/login' className='text-green-500'>Login</Link></p>
                    </div>

                    <h2 className='text-2xl font-semibold mb-4'>Create new password</h2>
                    <p className='text-gray-600 mb-6 text-sm'>Please enter your new password</p>

                    <form className='space-y-4'>



                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                            <div className='mt-1'>
                                <input type='password' placeholder='Password' id='password' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='Confirmpassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                            <div className='mt-1'>
                                <input type='password' placeholder='Confirm Password' id='Confirmpassword' className='mb-3 shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
                            </div>
                        </div>


                        <Link to={"/login"} className=''>
                            <button type='submit' className='mb-3 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>Reset Password</button>
                        </Link>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordPage