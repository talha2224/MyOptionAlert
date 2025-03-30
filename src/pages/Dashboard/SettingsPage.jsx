const SettingsPage = () => {
    return (
        <div className="flex-1 overflow-x-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">First Name</label>
                        <input type="text" value="Wittig"className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Last Name</label>
                        <input
                            type="text"
                            value="Mustapha"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Email Address</label>
                        <input
                            type="email"
                            value="abdurrazzaqabdulmuhsin7@gmail.com"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Phone Number</label>
                        <input
                            type="tel"
                            value="+2348102871336"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Timezone</label>
                        <input
                            type="text"
                            value="+1 GMT"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Date Format</label>
                        <input
                            type="text"
                            value="24 hours"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Password</label>
                        <input
                            type="password"
                            value="********"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Confirm Password</label>
                        <input
                            type="password"
                            value="********"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#049F30]">Two-Factor Authentication 2FA</label>
                        <input
                            type="email"
                            value="Email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                </div>
            </div>

            <div>
                <button className="border border-[#F92C2C] text-[#F92C2C] py-2 px-4 rounded">Delete Account</button>
            </div>
        </div>
    );
};

export default SettingsPage;