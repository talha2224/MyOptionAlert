import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Hero from '../assets/landing/hero.svg'

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



const BlogPage = () => {
    return (


        <div className='w-screen bg-[#FEFEFE]'>

            <Navbar />

            <div className="px-4 md:px-8 pt-16">
                <div className="">
                    <h2 className="text-3xl font-semibold mb-4">The <span className='text-[#049F30]'>MyOptionsAlerts</span> Blog</h2>
                    <p className="text-gray-600 mb-8">Updates and announcements from Team Options</p>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md p-2 w-full md:w-auto" />
                        <button className="bg-[#049F30] hover:bg-green-600 text-white rounded-md p-2 px-4">Subscribe</button>
                    </div>

                    <p className="text-gray-600 mt-4 text-sm">You can unsubscribe at any time. Learn more about our{' '}
                        <Link to={"/privacy"} className="text-[#049F30] underline">Privacy Policy</Link>
                    </p>
                </div>
            </div>

            <div className="px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex justify-between items-start gap-x-11 md:flex-nowrap flex-wrap">

                            <div className='mt-4'>
                                <div className="text-gray-600 mb-2">{post.date}</div>
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4 text-xs">{post.description}</p>
                                <button className="bg-[#049F30] text-white px-3 py-1 rounded-md text-sm mt-auto">Read More</button>
                            </div>
                            <div className='min-w-[20rem] mt-4'>
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default BlogPage