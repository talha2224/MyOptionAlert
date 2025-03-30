import React from 'react'
import Navbar from '../components/Navbar'
import Suuport from '../assets/landing/support.png'
import Footer from '../components/Footer';


const ContactPage = () => {


    return (


        <div className='w-screen h-screen bg-[#FEFEFE]'>

            <Navbar />

            <div className='pt-16 px-4 md:px-8 '>
                <h2 className="text-3xl font-semibold text-center mb-3">CONTACT US</h2>
                <p className='text-gray-600 mb-12 w-[100%] text-center'>We value your feedback and are here to assist you! If you have any questions, concerns, or suggestions, please don't hesitate to reach out to us.</p>

            </div>
            <div className="px-4 md:px-8 py-16 flex justify-center gap-x-10 items-start md:flex-row flex-col flex-wrap">


                <div className='flex-1 flex justify-center items-center mt-3'>
                    <img src={Suuport} alt="" className='h-[25rem]' />
                </div>
                <div className='mt-3'>
                    <h1 className='text-xl font-semibold'>How can we help you ?</h1>
                    <p className='mt-3 text-[#2D2D2DCC]'>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>
                    <input type="text" placeholder="Full Name" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <input type="email" placeholder="Email Adress" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <input type="text" placeholder="Subject" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <textarea placeholder="Message" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3 resize-none outline-none h-[13rem]" />
                    <button className="bg-[#049F30] hover:bg-green-600 text-white rounded-md p-2 md:w-[80%] w-[100%] mt-3">Subscribe</button>

                </div>

            </div>





            <Footer />




        </div>



    )


}

export default ContactPage