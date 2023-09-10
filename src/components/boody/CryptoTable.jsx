import React, { useEffect, useState } from "react";

function CryptoTable({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    // Ensure data is available before setting displayData
    if (data.length > 0) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setDisplayData(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, data, itemsPerPage]);

  if (!data.length) {
    // If data is not available yet, you can show a loading message or spinner
    return (
      <div className="flex justify-center text-white text-2xl animate-pulse">
        Loading...
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div
        id="cryptoTable"
        className="max-w-screen-lg mx-auto px-4 py-5 sm:px-6 text-white"
      >
        <h3 className="text-3xl leading-6 font-medium">
          Market Update <span className="text-sm leading-6">Every 60s</span>
        </h3>
      </div>
      <div className="max-w-screen-lg mx-auto text-white shadow overflow-hidden rounded-lg">
        <div className="min-h-[620px]">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-[#2100fc] to-[#ff00ff]">
              <tr>
                <th className="px-2 py-2 sm:px-6 sm:py-3 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-2 py-2 sm:px-6 sm:py-3 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-2 py-2 sm:px-6 sm:py-3 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                  24h Change
                </th>
                <th className="px-2 py-2 sm:px-6 sm:py-3 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((list, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition duration-150 ease-in-out border-b"
                >
                  <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 sm:h-12 sm:w-12 rounded-full"
                          src={list.image}
                          alt="Crypto Image"
                        />
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-100">
                          {list.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-100">
                      $ {list.current_price.toLocaleString("en-US")}
                    </div>
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap">
                    <span
                      className={`text-sm leading-5 ${
                        list.market_cap_change_percentage_24h >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {list.market_cap_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-100">
                      ${list.market_cap.toLocaleString("en-US")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Centered Pagination controls */}
        <div className=" max-sm:flex max-sm:flex-col  justify-center items-center px-4 py-3 text-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-2 py-1 max-sm:w-[80px] max-sm:mb-1 max-sm:mr-0 sm:px-3 sm:py-2 border border-black text-sm sm:text-base leading-5 font-medium rounded-md text-black bg-white hover:bg-gradient-to-t from-[#ff00ff] to-[#2100fc] hover:text-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-900 active:text-gray-200 transition ease-in-out duration-150"
          >
            Previous
          </button>
          <div className="inline-flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm leading-5 ${
                  currentPage === i + 1
                    ? "bg-gradient-to-t from-[#2100fc] to-[#ff00ff] text-gray-200 rounded"
                    : "bg-white text-black hover:bg-gradient-to-t from-[#2100fc] to-[#ff00ff]  hover:opacity-70 hover:text-gray-200 rounded"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="ml-2 px-2 py-1 max-sm:w-[80px] max-sm:mt-1 max-sm:ml-0 sm:px-3 sm:py-2 border border-black text-sm sm:text-base leading-5 font-medium rounded-md text-black bg-white hover:bg-gradient-to-t from-[#ff00ff] to-[#2100fc] hover:text-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-900 active:text-gray-200 transition ease-in-out duration-150"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CryptoTable;
