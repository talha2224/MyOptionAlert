import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#fff] text-black py-12 px-4 md:px-8">
            <div className="flex justify-between items-start flex-wrap">
                <div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <FaPhone className="mr-2" />
                            <span>+2348102871334</span>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp className="mr-2" />
                            <span>+2348102871334</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <span>Email Support</span>
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <div className='min-w-[2.5rem] h-[2.5rem] rounded-md flex justify-center items-center border cursor-pointer'><FaFacebook className="text-xl" /></div>
                        <div className='min-w-[2.5rem] h-[2.5rem] rounded-md flex justify-center items-center border cursor-pointer'><FaTwitter className="text-xl" /></div>
                        <div className='min-w-[2.5rem] h-[2.5rem] rounded-md flex justify-center items-center border cursor-pointer'><FaInstagram className="text-xl" /></div>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Login</a></li>
                        <li><a href="#" className="hover:text-gray-300">Sign Up</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Plans</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Free</a></li>
                        <li><a href="#" className="hover:text-gray-300">Premium</a></li>
                        <li><a href="#" className="hover:text-gray-300">Enterprise</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Subscribe</h3>
                    <p className="mb-4">1.18K+ of our students are subscribe around the world.</p>
                    <div className="flex flex-col space-y-2">
                        <input type="email" placeholder="Email" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2" />
                        <button className="bg-[#049F30] hover:bg-green-600 text-white rounded-md p-2">Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="text-center mt-10">
                <p>© 2025 MYOPTIONSALERTS ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    )
}

export default Footer