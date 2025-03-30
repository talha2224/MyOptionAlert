import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/about' },
        { text: 'FAQs', href: '/faq' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className=" px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">


                    <div className="flex-shrink-0">
                        <span className="text-xl">My Option Alert</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link to={item.href} key={item.text} className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link to="/login" className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                            <Link to="/register"><button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium ml-4">Get Started</button></Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">

                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <AiOutlineClose className="block text-white" aria-hidden="true" />
                            ) : (
                                <AiOutlineMenu className="block text-white" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link key={item.text} to={item.href} className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                            {item.text}
                        </Link>
                    ))}
                    <Link to="/login" className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                    <Link to={"/register"}><button className="bg-green-500 hover:bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-2 w-full">Get Started</button></Link>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;