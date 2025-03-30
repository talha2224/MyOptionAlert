import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/landing/hero.svg'
import { FaChartLine, FaCog, FaBell, FaWallet, FaFileCode, FaCheckCircle, FaExchangeAlt, FaTimesCircle, FaHeadphonesAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const stepsData = [
    {
        title: 'Create Your Free Account',
        description: 'Register in seconds to access our ThinkScript tools and start managing your studies.',
    },
    {
        title: 'Import & Manage ThinkScript Studies',
        description: 'Paste, edit, and optimize your ThinkScript studies within an intuitive dashboard.',
    },
    {
        title: 'Set Alerts & Optimize Your Trades',
        description: 'Enable real-time alerts, analyze market data, and improve your trading strategy.',
    },
];
const featuresData = [
    {
        icon: <FaChartLine />,
        title: 'Real-Time Market Data',
        description: 'Stay ahead with live market insights and instant updates.',
    },
    {
        icon: <FaCog />,
        title: 'Advanced ThinkScript Management',
        description: 'Paste, edit, and organize ThinkScript studies effortlessly.',
    },
    {
        icon: <FaBell />,
        title: 'Smart Alerts & Notifications',
        description: 'Never miss an opportunity with real-time alerts and automated insights.',
    },
    {
        icon: <FaWallet />,
        title: 'Flexible Subscription Plans',
        description: 'Choose from free and premium plans tailored to your trading needs.',
    },
];
const subscriptionPlans = [
    {
        title: 'Basic Plan (Free) - For Beginners',
        price: '$0',
        description: 'Casual traders and beginners exploring ThinkScript.',
        features: [
            'Limited saved scans: Up to 5',
            'Basic alerts: Price, volume, moving averages',
            'Access to public ThinkScript studies',
            'Community forum access',
        ],
        buttonText: 'CHOOSE PLAN',
    },
    {
        title: 'Pro Plan - For Active Traders',
        price: '$19',
        description: 'Traders who want deeper market insights and more automation.',
        features: [
            'Unlimited saved scans',
            'Advanced alerts: Custom ThinkScript-based conditions',
            'Priority access to new ThinkScript studies',
            'Customizable dashboard for tracking multiple indicators',
            'Email & mobile push notifications',
        ],
        buttonText: 'CHOOSE PLAN',
    },
    {
        title: 'Enterprise Plan - For Professionals',
        price: '$49',
        description: 'Professional traders and firms needing top-tier customization.',
        features: [
            'All Pro features +',
            'API access for custom ThinkScript integrations',
            'Automated strategy execution',
            'Private 1-on-1 support with experts',
            'Exclusive indicators and premium ThinkScript studies',
        ],
        buttonText: 'CHOOSE PLAN',
    },
];
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
const blogPosts = [
    {
        date: 'Feb 2025',
        title: 'How ThinkScript Can Elevate Your Trading Strategy',
        description: 'ThinkScript is a powerful tool that allows traders to create custom indicators, scans, and alerts. In this article, we explore how to maximize the benefits of ThinkScript and give you a competitive edge in the market. We also show how to write simple scripts, backtest strategies, and integrate them into ThinkOrSwim.',
        imageUrl: Hero,
        readMoreLink: '#',
    },
    {
        date: 'Oct 2025',
        title: 'Top 5 ThinkScript Indicators Every Trader Should Know',
        description: 'ThinkScript allows you to build highly customizable indicators tailored to your trading style. From moving averages to volume-based signals, we’ve compiled a list of the top 5 ThinkScript indicators that can improve your decision-making. Whether you trade stocks, forex, or options, these indicators will help you spot trends faster.',
        imageUrl: Hero,
        readMoreLink: '#',
    },
    {
        date: 'Mar 2025',
        title: 'Automate Your Trading Alerts with ThinkScript',
        description: 'Tired of manually watching the market? With ThinkScript, you can automate alert triggers based on your criteria. Set up MA/CD crossovers, price levels, or even custom conditions. Get instant notifications that notify you instantly when your conditions are met—so you never miss a trading opportunity.',
        imageUrl: Hero,
        readMoreLink: '#',
    },
    {
        date: 'Dec 2025',
        title: 'ThinkScript vs. Other Trading Scripting Languages: Which One is Right for You?',
        description: 'ThinkScript isn’t the only scripting language for traders, but how does it compare to others like Pine Script, TradingView, and EasyLanguage / TradeStation? We break down the pros and cons of each and help you decide which one suits your trading style best.',
        imageUrl: Hero,
        readMoreLink: '#',
    },
];


const LandingPage = () => {


    return (


        <div className='w-screen h-screen bg-[#FEFEFE]'>

            <Navbar />


            {/* HERO  */}
            <div className="px-4 md:px-8 py-7 md:py-16">
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
                    <div className="mt-4">

                        <h2 className="text-4xl font-bold text-green-600 mb-4 leading-[3rem]">Unlock the Power of ThinkScript - <br /> <span className="text-black">Manage, Analyze, and Trade Smarter!</span></h2>
                        <p className="text-gray-600 mb-6 md:max-w-[60%]">Seamlessly track real-time market data, create and manage custom ThinkScript studies, set up automated alerts, and optimize your trading strategy—all from a single, intuitive platform designed for traders of all levels.</p>
                        <div className="flex space-x-4">
                            <button className="bg-[#064919] hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm">Get Started</button>
                            <button className="border border-[#064919] text-gray-800 px-6 py-3 rounded-md text-sm">
                                Explore Pricing
                            </button>
                        </div>
                    </div>
                    <img src={Hero} alt="ThinkScript Trading" className="rounded-lg mt-4" />
                </div>
            </div>

            {/* How To Get Started */}
            <p className='text-[#049F30] text-center text-2xl font-semibold'>How To Get Started</p>
            <div className="px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stepsData.map((step, index) => (
                        <div key={index} className="border border-green-500 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                            <p className="text-gray-600 text-center">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* ADD FEATURE DATA  */}
            <div className="bg-[#001A12] text-white mt-16 py-16 mx-4 md:mx-8 px-10 rounded-xl">
                <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
                <p className="text-gray-400 text-center mb-12">We provide the most powerful and user-friendly ThinkScript tools to help you trade smarter. 🚀</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-[#0649191A] rounded-lg py-[3rem] px-6 border border-white">
                            <div className="mb-4 border border-white w-[2rem] h-[2rem] flex justify-center items-center rounded-full">{feature.icon}</div>
                            <h3 className="text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SUBSCRIPTION PLAN  */}

            <div className="px-4 md:px-8 py-16">
                <h2 className="text-3xl font-semibold text-center mb-12 text-[#049F30]">Subscription Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {subscriptionPlans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 border md:w-[25rem] w-[100%] h-[40rem] relative">
                            <h3 className="text-xl font-semibold mb-4 mt-10">{plan.title}</h3>
                            <p className="text-3xl text-[#049F30] mb-4">{plan.price} <span className="text-sm font-normal">/month</span></p>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <ul className="list-disc list-inside mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-gray-600 mb-2">{feature}</li>
                                ))}
                            </ul>
                            <div className=' absolute bottom-10 w-[90%]'>
                                <button className="bg-[#049F30] hover:bg-green-600 text-white py-3 px-6 rounded-md w-full">{plan.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ADD FAQS HERE  */}
            <div className="px-4 md:px-8 py-16">
                <h2 className="text-3xl font-semibold text-center mb-12 text-[#049F30]">Frequently Asked Questions (FAQs)</h2>
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

            {/* BLOGS  */}

            <div className="px-4 md:px-8 py-16">
                <h2 className="text-3xl font-semibold text-center mb-12 text-[#049F30]">Press & Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex justify-between items-start gap-x-11 md:flex-nowrap flex-wrap">

                            <div className='mt-4'>
                                <div className="text-gray-600 mb-2">{post.date}</div>
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4 text-xs">{post.description}</p>
                                <a href={post.readMoreLink} className="text-[#049F30] font-semibold mt-auto">Read More</a>
                            </div>
                            <div className='min-w-[20rem] mt-4'>
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>




        </div>



    )


}

export default LandingPage