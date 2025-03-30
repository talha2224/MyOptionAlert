import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPage = () => {
    return (
        <div className='w-screen h-screen bg-[#FEFEFE]'>

            <Navbar />

            <div className="px-4 md:px-8 py-16">

                <h2 className="text-3xl font-semibold mb-6">Privacy & Policy</h2>

                <p className="text-gray-600 mb-4">
                    Welcome to MyOptionsAlerts. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our ThinkScript platform.
                </p>

                <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
                <p className="text-gray-600 mb-4">
                    We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Personal Information: Name, email, payment details, if subscribing.</li>
                    <li>Usage Data: How you interact with the platform (saved scans, alerts, ThinkScript studies).</li>
                    <li>Device Information: Browser type, IP address, and location for security.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
                <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Provide and improve platform functionality.</li>
                    <li>Process payments for Pro/Enterprise subscriptions.</li>
                    <li>Send notifications and updates.</li>
                    <li>Analyze usage trends to enhance features.</li>
                    <li>We do not sell or rent your data to third parties.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">3. Cookies & Tracking Technologies</h3>
                <p className="text-gray-600 mb-4">
                    We use cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Remember your login details.</li>
                    <li>Improve website performance.</li>
                    <li>Track analytics to enhance user experience.</li>
                    <li>You can disable cookies in your browser settings, but some features may not work properly.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
                <p className="text-gray-600 mb-4">
                    We use encryption and secure protocols (SSL) to protect your personal information. However, no online platform is 100% secure, so always use strong passwords and enable two-factor authentication when possible.
                </p>

                <h3 className="text-xl font-semibold mb-2">5. Third-Party Services</h3>
                <p className="text-gray-600 mb-4">
                    We may integrate with ThinkOrSwim, Stripe for payments, Google Analytics, and other third-party services. These services have their own privacy policies, and we recommend reviewing them separately.
                </p>

                <h3 className="text-xl font-semibold mb-2">6. Your Rights & Choices</h3>
                <p className="text-gray-600 mb-4">
                    You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Request access to your data.</li>
                    <li>Update or delete your account.</li>
                    <li>Opt-out of marketing emails.</li>
                    <li>To exercise these rights, contact us at [Your Support Email].</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">7. Changes to This Policy</h3>
                <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app alert.
                </p>

                <h3 className="text-xl font-semibold mb-2">8. Contact Us</h3>
                <p className="text-gray-600 mb-4">
                    If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
                </p>
                <p className="text-gray-600 mb-6">
                    Email: support@myoptionsalerts.com
                </p>

                <p className="text-gray-600">
                    Thank you for trusting MyOptionsAlerts! We are committed to ensuring your privacy and delivering a seamless order-ahead experience.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default PrivacyPage