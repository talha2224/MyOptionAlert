import { useState } from 'react';

const SavedPage = () => {
    const [scans] = useState([
        {
            name: 'Bullish Breakout',
            criteria: 'RSI > 70, Price above 50MA',
            lastRun: '5 mins ago',
            results: '12 stocks',
        },
        {
            name: 'Oversold Reversal',
            criteria: 'RSI < 30, MACD Cross',
            lastRun: '10 mins ago',
            results: '8 stocks',
        },
        {
            name: 'High IV Options',
            criteria: 'IV Rank > 50, Volume > 1M',
            lastRun: '15 mins ago',
            results: '20 options',
        },
        {
            name: 'Golden Cross Stocks',
            criteria: '50MA crossing 200MA',
            lastRun: '30 mins ago',
            results: '5 stocks',
        },
        {
            name: 'Bullish Breakout',
            criteria: 'RSI > 70, Price above 50MA',
            lastRun: '35 mins ago',
            results: '12 stocks',
        },
        {
            name: 'Golden Cross Stocks',
            criteria: '50MA crossing 200MA',
            lastRun: '1 hour ago',
            results: '5 stocks',
        },
        {
            name: 'High IV Options',
            criteria: 'IV Rank > 50, Volume > 1M',
            lastRun: '2 hour ago',
            results: '20 options',
        },
        {
            name: 'Oversold Reversal',
            criteria: 'RSI < 30, MACD Cross',
            lastRun: '3 hour ago',
            results: '8 stocks',
        },
        {
            name: 'High IV Options',
            criteria: 'IV Rank > 50, Volume > 1M',
            lastRun: '4 hour ago',
            results: '20 options',
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 22; // Assuming you have 22 pages

    return (
        <div className='flex-1 overflow-x-auto'>
            <div className='flex justify-between items-center mb-6 flex-wrap'>
                <div className='flex items-center mt-2'>
                    <h2 className='text-xl text-[#049F30] mr-2'>Saved Scans</h2>
                    <span className='text-sm text-[#049F30]'>300 Scans</span>
                </div>
                <button className='border border-[#049F30] text-[#049F30] py-2 px-4 rounded mt-2'>+ Import a new ThinkScript</button>
            </div>

            <div className='flex justify-between items-center mb-6 bg-white p-3 rounded-md'>
                <input type='text' placeholder='Search for scan name, criteria, etc...' className='border border-[#049F30] rounded-md p-2 w-1/2 mr-2' />
                <button className='bg-white text-[#049F30]  py-2 px-4 rounded border'>Filters</button>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead className='bg-[#EBF2ED]'>
                        <tr>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Scan Name</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Criteria</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Last Run</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Results</th>
                            <th className='py-2 px-4'></th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {scans.map((scan, index) => (
                            <tr key={index} className='border-b'>
                                <td className='py-2 px-4 text-nowrap'>{scan.name}</td>
                                <td className='py-2 px-4 text-nowrap'>{scan.criteria}</td>
                                <td className='py-2 px-4 text-nowrap'>{scan.lastRun}</td>
                                <td className='py-2 px-4 text-nowrap'>{scan.results}</td>
                                <td className='py-2 px-4 text-nowrap'>
                                    <button>...</button>
                                </td>
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

export default SavedPage;