import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Footer from "../../components/Footer";

const studies = [
  { id: 1, name: "Study 1", value: "paste think or swim study" },
  { id: 2, name: "Study 2", value: "paste think or swim study" },
  { id: 3, name: "Study 3", value: "paste think or swim study" },
  { id: 4, name: "Study 4", value: "paste think or swim study" },
  { id: 5, name: "Study 5", value: "paste think or swim study" },
]

const Scanner = () => {

  const [optionTickers, setOptionTickers] = useState(
    [
      {
        stockPrice: { from: "1.3456", to: "1.3666" },
        dailyVolume: { from: "1.3456", to: "1.3666" },
        marketCap: { from: "1.3456", to: "1.3666" },
        stockBidAskSpread: { from: "1.3456", to: "1.3666" },
      },
      {
        stockOptionBidAskedSpreadkPrice: { from: "1.3456", to: "1.3666" },
        optionPrice: { from: "1.3456", to: "1.3666" },
        Moneyness: { from: "1.3456", to: "1.3666" },
        VOD: { from: "1.3456", to: "1.3666" },
      },
      {
        LOD: { from: "1.3456", to: "1.3666" },
        HOD: { from: "1.3456", to: "1.3666" },
        OOD: { from: "1.3456", to: "1.3666" },
        OI: { from: "1.3456", to: "1.3666" },
      },
      {
        Expiry: { from: "1.3456", to: "1.3666" },
        Timeframe: { from: "1.3456", to: "1.3666" },
      },
      {
        Theo: { from: "1.3456", to: "1.3666" },
        Delta: { from: "1.3456", to: "1.3666" },
      },
      {
        Vega: { from: "1.3456", to: "1.3666" },
        RHO: { from: "1.3456", to: "1.3666" },
      },
      {
        Gamma: { from: "1.3456", to: "1.3666" },
        Theta: { from: "1.3456", to: "1.3666" },
      },
      {
        IVRanke: { from: "1.3456", to: "1.3666" },
      },
    ]
  );

  const handleOptionTickerChange = (outerIndex, field, value, type) => {
    setOptionTickers((prevTickers) => {
      const newTickers = [...prevTickers];
      newTickers[outerIndex] = {
        ...newTickers[outerIndex],
        [field]: {
          ...newTickers[outerIndex][field],
          [type]: value,
        },
      };
      return newTickers;
    });
  };

  return (


    <div className="flex-1 overflow-x-auto">


      <h2 className="text-xl font-semibold text-[#049F30]">Scanner</h2>

      <div className="flex justify-between items-center overflow-x-auto bg-white my-4 p-5 rounded-md">
        <div className="text-[#049F30]">Set 1</div>
        <div className="text-[#676767]">Set 2</div>
        <div className="text-[#676767]">Set 3</div>
        <div className="text-[#676767]">Set 4</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {studies.map((study) => (
          <div>

            <h3 className="text-sm text-[#049F30] mb-2">{study.name}</h3>

            <div key={study.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <p>paste think or swim study</p>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaDownload />
                </button>
              </div>
            </div>

            <h3 className="text-[#049F30] mt-2">Add Labels</h3>


          </div>
        ))}
      </div>


      <div className="flex items-center gap-x-3 flex-wrap my-2">

        <h2 className="text-xl font-semibold text-[#049F30] my-2">Option Tickers</h2>

        <div className="flex items-center my-2">
          <input type="checkbox" id="manualList" className="mr-2" />
          <label htmlFor="manualList" className="text-sm text-[#676767] mr-4">Manual List</label>
        </div>

        <div className="flex items-center my-2">
          <input type="checkbox" id="scanTickers" className="mr-2" />
          <label htmlFor="scanTickers" className="text-sm text-[#676767]">Scan Tickers</label>
        </div>

        <span className="text-xs text-red-500 my-2">opens box to type tickers</span>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {optionTickers?.map((tickerObject, outerIndex) =>
          Object.entries(tickerObject).map(([field, values]) => (
            <div key={field} className="">
              <h3 className="text-sm text-[#049F30] mb-2 capitalize">
                {field.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex items-center">
                <p className="text-[#F92C2C] mr-2">$</p>
                <input
                  type="text"
                  value={values.from}
                  onChange={(e) =>
                    handleOptionTickerChange(outerIndex, field, e.target.value, "from")
                  }
                  className="border rounded-md p-2 w-1/3 mr-2 text-center"
                />
                <span className="mx-1 text-sm text-[#049F30]">To</span>
                <input
                  type="text"
                  value={values.to}
                  onChange={(e) =>
                    handleOptionTickerChange(outerIndex, field, e.target.value, "to")
                  }
                  className="border rounded-md p-2 w-1/3 text-center"
                />
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-end items-end my-3 mr-[4rem]">
        <button className="bg-[#049F30] text-white px-8 py-2 rounded-md">Apply</button>
      </div>

    </div>
  );
};

export default Scanner;
