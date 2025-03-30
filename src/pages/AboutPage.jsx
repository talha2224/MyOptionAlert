import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaBullseye, FaFlagCheckered } from 'react-icons/fa';
import Approach from '../assets/landing/approach.svg'
import User1 from '../assets/landing/user1.png'
import User2 from '../assets/landing/user2.png'

const AboutPage = () => {
    return (
        <div className='w-screen bg-[#FEFEFE]'>
            <Navbar />

            {/* Company Overview Section */}
            <div className="px-4 md:px-8 py-16">
                <h2 className="text-3xl font-semibold text-center mb-8">COMPANY OVERVIEW</h2>
                <p className="text-gray-600 mb-6 text-center">MyOptionsAlerts is a cutting-edge platform designed for traders who use ThinkScript to enhance their market analysis. We provide tools that allow users to view real-time market data, manage ThinkScript studies, set active alerts, and optimize their trading strategies.</p>
                <p className="text-gray-600 mb-12 text-center">Our platform simplifies ThinkScript management, helping traders automate their analysis and make informed decisions faster.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-white rounded-lg shadow-md p-6 border">
                        <div className="flex items-center mb-4">
                            <FaBullseye className="text-[#049F30] text-2xl mr-4" />
                            <h3 className="text-xl font-semibold">Our Goal</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Our goal is to empower traders with cutting-edge ThinkScript tools that enhance efficiency, accuracy, and profitability. We aim to create a platform where traders can seamlessly manage scripts, automate alerts, and optimize their strategies—all in one place. Whether you’re a beginner or an experienced trader, we provide the tools to help you trade smarter and stay ahead in the market. 🚀</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 border">
                        <div className="flex items-center mb-4">
                            <FaFlagCheckered className="text-[#049F30] text-2xl mr-4" />
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Our mission is to simplify ThinkScript trading by providing intuitive tools that help traders analyze data, automate strategies, and make smarter decisions. We strive to create a seamless trading experience where users can effortlessly manage their scripts, set real-time alerts, and stay ahead in the market. 🚀</p>
                    </div>
                </div>
            </div>
            {/* End Company Overview Section */}

            {/* Our Approach & Focus Section */}
            <div className="px-4 md:px-8 py-16">
                <div className="flex justify-between gap-x-10 md:flex-nowrap flex-wrap">
                    <div className='mt-3'>
                        <h2 className="text-3xl font-semibold mb-8">Our Approach</h2>
                        <p className="text-gray-600 mb-6">
                            We take a user-first approach by combining powerful ThinkScript automation with a seamless and intuitive experience. Our platform is built to ensure traders can easily analyze data, create custom indicators, and receive real-time alerts without the complexity of traditional trading tools.
                        </p>
                        <p className="text-gray-600 mb-6">
                            We believe in continuous innovation, regularly improving our features based on user feedback to provide the most efficient ThinkScript management system available.
                        </p>
                        <h2 className="text-3xl font-semibold mb-8">We Focus On</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="mb-2">Ease of Use - Simplifying ThinkScript management for traders of all levels.</li>
                            <li className="mb-2">Real-Time Insights - Providing live market data and instant alerts.</li>
                            <li className="mb-2">Customization & Automation - Enabling traders to create and automate strategies effortlessly.</li>
                            <li className="mb-2">Security & Reliability - Ensuring a secure, high-performance platform for all users.</li>
                        </ul>
                        <p className="text-gray-600 mt-4">🚀 Our focus is to help traders save time, reduce errors, and maximize trading potential</p>
                    </div>
                    <img src={Approach} alt="" className='mt-3' />

                </div>
            </div>

            {/* Our Team Section */}
            <div className="mx-4 md:mx-8 py-10 bg-[#0649190D] rounded-md px-5">

                <div className="flex justify-between gap-8 flex-wrap sm:flex-row flex-col">


                    <div className="flex-1 flex flex-col items-center">
                        <img src={User1} alt="Abdurrazzaq" className="w-64 h-80 object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl font-semibold">ABDURRAZZAQ</h3>
                        <p className="text-gray-600">CO-FOUNDER</p>
                    </div>


                    <div className='flex-1'>
                        <h2 className="text-3xl font-semibold text-center mb-8">OUR TEAM</h2>
                        <p className="text-gray-600 text-center text-sm">Our team is made up of trading enthusiasts, developers, and financial experts who are passionate about making ThinkScript more accessible and powerful. With a shared vision of simplifying trading automation, we work tirelessly to build a platform that helps traders analyze, optimize, and execute strategies with confidence. 🚀</p>
                    </div>


                    <div className="flex-1 flex flex-col items-center">
                        <img src={User2} alt="Co-Founder" className="w-64 h-80 object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl font-semibold">CO-FOUNDER</h3>
                        <p className="text-gray-600">CO-FOUNDER</p>
                    </div>

                </div>
            </div>
            {/* End Our Team Section */}

            <Footer />
        </div>
    );
};

export default AboutPage;