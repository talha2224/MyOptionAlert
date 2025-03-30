import React from 'react'
import Navbar from '../components/Navbar'
import Suuport from '../assets/landing/support.png'
import { FaChartLine, FaCog, FaBell, FaWallet, FaFileCode, FaCheckCircle, FaExchangeAlt, FaTimesCircle, FaHeadphonesAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import Footer from '../components/Footer';


const faqData = [
    {
        question: 'What is ThinkScript, and how does it work?',
        answer: 'ThinkScript is a scripting language used in ThinkOrSwim to create custom indicators, scans, and alerts. It allows traders to automate technical analysis and enhance their trading strategies.',
        icon: <FaFileCode />,
    },
    {
        question: 'Do I need a ThinkOrSwim account to use this platform?',
        answer: 'Yes, since ThinkScript is specific to ThinkOrSwim TOS, you\'ll need an active TOS account to apply and use scripts effectively.',
        icon: <FaCheckCircle />,
    },
    {
        question: 'Can I import my own ThinkScript studies?',
        answer: 'Absolutely! You can paste, edit, and manage your ThinkScript studies directly in our platform for better organization and quick access.',
        icon: <FaExchangeAlt />,
    },
    {
        question: 'Does the platform provide real-time market data?',
        answer: 'Yes, our platform offers real-time and historical market data to help you analyze trends and make informed trading decisions.',
        icon: <FaChartLine />,
    },
    {
        question: 'What are saved scans and active alerts?',
        answer: 'Saved scans let you store and reuse ThinkScript-based market scans. Active alerts notify you in real-time when a script condition is met.',
        icon: <FaBell />,
    },
    {
        question: 'What’s the difference between the free and paid plans?',
        answer: 'The Free Plan offers limited scans, basic alerts, and access to public ThinkScript studies. The Pro Plan includes unlimited scans, advanced alerts, and priority study access. The Enterprise Plan provides API access, strategy automation, and expert support.',
        icon: <FaMoneyBillAlt />,
    },
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes! You can cancel your subscription at any time from your account settings. Your access will remain active until the end of your billing cycle.',
        icon: <FaTimesCircle />,
    },
    {
        question: 'Does this platform support automated trading?',
        answer: 'We provide ThinkScript-based automation tools, but direct trade execution is still managed via ThinkOrSwim.',
        icon: <FaCog />,
    },
    {
        question: 'What kind of support do you offer?',
        answer: 'Basic Plan: Community forum support. Pro Plan: Email and priority support. Enterprise Plan: 1-on-1 expert support & dedicated assistance.',
        icon: <FaHeadphonesAlt />,
    },
    {
        question: 'How do I get started?',
        answer: 'Sign up for free. Paste and manage your ThinkScript studies. Set alerts, save scans, and optimize your trades!',
        icon: <FaCalendarAlt />,
    },
];



const FaqPage = () => {


    return (


        <div className='w-screen h-screen bg-[#FEFEFE]'>

            <Navbar />

            {/* ADD FAQS HERE  */}
            <div className="px-4 md:px-8 py-16">
                <h2 className="text-3xl font-semibold text-center mb-3">Frequently Asked Questions (FAQs)</h2>
                <p className='text-gray-600 mb-12 w-[100%] text-center'>We understand that you might have questions about how our platform works. Below, we’ve answered some of the most common ones to help you get started with ease. If you need further assistance, feel free to reach out to our support team.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqData.map((faq, index) => (
                        <div key={index} className="flex items-start">
                            <div className="mr-4 text-[#049F30] min-w-[2rem] min-h-[2rem] rounded-md border border-[#049F30] flex justify-center items-center">{faq.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="px-4 md:px-8 py-16 flex justify-center gap-x-10 items-start md:flex-row flex-col flex-wrap">

                <div className='flex-1 mt-3'>
                    <img src={Suuport} alt="" className='h-[25rem]' />
                </div>
                <div className='flex-1 mt-3'>
                    <h1 className='text-xl font-semibold'>How can we help you ?</h1>
                    <p className='mt-3 text-[#2D2D2DCC]'>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>
                    <input type="text" placeholder="Full Name" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <input type="email" placeholder="Email Adress" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <input type="text" placeholder="Subject" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3" />
                    <textarea placeholder="Message" className="bg-[#FAFAFA] border border-[#CECECE] rounded-md p-2 block mb-2 md:w-[80%] w-[100%] mt-3 resize-none outline-none h-[13rem]" />
                    <button className="bg-[#049F30] hover:bg-green-600 text-white rounded-md p-2 md:w-[80%] w-[100%] mt-3">Subscribe</button>

                </div>

            </div>





            <Footer/>




        </div>



    )


}

export default FaqPage