import React from 'react';
import AuthImage from '../../assets/auth/auth.png';
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  return (

    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex-1 hidden md:block h-[100%]'>
        <img src={AuthImage} alt='' className='h-[100%] w-[100%]' />
      </div>

      <div className='flex-1 flex justify-center items-center flex-col h-[100%]'>
        <div className='w-full max-w-md p-6'>
          <div className='text-right mb-10'>
            <p> Already have an account?{' '}<Link to='/login' className='text-green-500'>Login</Link></p>
          </div>

          <h2 className='text-2xl font-semibold mb-4'>Create your account</h2>
          <p className='text-gray-600 mb-6'>Master data analysis with expert-led courses.</p>

          <form className='space-y-4'>
            <div>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>Full name</label>
              <div className='mt-1'>
                <input type='text' placeholder='Full Name' id='fullName' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <div className='mt-1'>
                <input type='email' placeholder='Email' id='email' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
              <div className='mt-1 relative'>
                <input type='password' placeholder='Password' id='password' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
              </div>
            </div>

            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password
              </label>
              <div className='mt-1 relative'>
                <input type='password' placeholder='Confirm Password' id='confirmPassword' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
              </div>
            </div>

            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input id='terms' name='terms' type='checkbox' className='shadow-sm p-2 block w-full border outline-none border-gray-300 rounded-md' />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='terms' className='font-medium text-gray-700'>I agree to the{' '}<a href='/privacy' className='text-green-500'>Terms of Service</a>{' '}and{' '}<a href='/privacy' className='text-green-500'>Privacy Policy</a></label>
              </div>
            </div>

            <Link to={"/dashboard/home"}>
              <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>

  )
}

export default RegisterPage

