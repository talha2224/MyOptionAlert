import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { BsCheckCircleFill, BsXCircleFill, BsFlagFill } from 'react-icons/bs';

const alerts = [
    {
        name: 'AAPL Breakout Alert',
        condition: 'Price > $180',
        lastTriggered: '5 mins ago',
        status: 'Active',
    },
    {
        name: 'RSI Overbought Alert',
        condition: 'RSI > 70',
        lastTriggered: '10 mins ago',
        status: 'Active',
    },
    {
        name: 'High Volume Scan',
        condition: 'Volume > 10M',
        lastTriggered: '15 mins ago',
        status: 'Expired',
    },
    {
        name: 'TSLA Bearish Signal',
        condition: 'MACD Cross Below Signal Line',
        lastTriggered: '30 mins ago',
        status: 'Triggered',
    },
    {
        name: 'AAPL Breakout Alert',
        condition: 'Price > $180',
        lastTriggered: '5 mins ago',
        status: 'Active',
    },
    {
        name: 'RSI Overbought Alert',
        condition: 'RSI > 70',
        lastTriggered: '10 mins ago',
        status: 'Active',
    },
    {
        name: 'High Volume Scan',
        condition: 'Volume > 10M',
        lastTriggered: '15 mins ago',
        status: 'Expired',
    },
    {
        name: 'TSLA Bearish Signal',
        condition: 'MACD Cross Below Signal Line',
        lastTriggered: '30 mins ago',
        status: 'Triggered',
    },
    {
        name: 'TSLA Bearish Signal',
        condition: 'MACD Cross Below Signal Line',
        lastTriggered: '30 mins ago',
        status: 'Triggered',
    },
]

const AlertPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 22;
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active':
                return <BsCheckCircleFill className="text-green-500" />;
            case 'Expired':
                return <BsXCircleFill className="text-red-500" />;
            case 'Triggered':
                return <BsFlagFill className="text-blue-500" />;
            default:
                return null;
        }
    };


    return (
        <div className='flex-1 overflow-x-auto'>
            <div className='flex justify-between items-center mb-6 flex-wrap'>
                <div className='flex items-center mt-2'>
                    <h2 className='text-xl text-[#049F30] mr-2'>Alerts & Notifications</h2>
                    <span className='text-sm text-[#049F30]'>300 Found</span>
                </div>
                <button className='border border-[#049F30] text-[#049F30] py-2 px-4 rounded mt-2'>Create a new Alert</button>
            </div>

            <div className='flex justify-between items-center mb-6 bg-white p-3 rounded-md'>
                <input type='text' placeholder='Search for scan name, criteria, etc...' className='border border-[#049F30] rounded-md p-2 w-1/2 mr-2' />
                <button className='bg-white text-[#049F30]  py-2 px-4 rounded border'>Filters</button>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead className='bg-[#EBF2ED]'>
                        <tr>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Alert Name</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Condition</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Last Triggered</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Status</th>
                            <th className='py-2 px-4'></th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {alerts.map((alert, index) => (
                            <tr key={index} className='border-b'>
                                <td className='py-2 px-4 text-nowrap'>{alert.name}</td>
                                <td className='py-2 px-4 text-nowrap'>{alert.condition}</td>
                                <td className='py-2 px-4 text-nowrap'>{alert.lastTriggered}</td>
                                <td className='py-2 px-4 text-nowrap flex items-center gap-1'>
                                    {getStatusIcon(alert.status)} {alert.status}
                                </td>
                                <td><HiDotsVertical /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className='flex justify-between items-center px-3 py-5 bg-white flex-wrap'>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className='text-gray-500 border border-[#049F304D] px-3 py-2 rounded-lg'>&lt; Previous</button>

                <div className='flex items-center'>
                    {[...Array(5)].map((_, index) => {
                        const page = currentPage - 2 + index;
                        if (page > 0 && page <= totalPages) {
                            return (
                                <button key={index} onClick={() => setCurrentPage(page)} className={`mx-1 px-3 py-1 rounded-md ${page === currentPage ? 'bg-green-500 text-white' : 'border'}`}>{page}</button>
                            );
                        }
                        return null;
                    })}
                    {currentPage + 2 < totalPages && <span className='mx-1'>...</span>}
                    {currentPage + 2 < totalPages && (<button onClick={() => setCurrentPage(totalPages)} className='mx-1 px-3 py-1 border rounded-md'>{totalPages}</button>)}
                </div>

                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className='ext-gray-500 border border-[#049F304D] px-3 py-2 rounded-lg'>Next &gt;</button>
            </div>
        </div>
    );
};

export default AlertPage;