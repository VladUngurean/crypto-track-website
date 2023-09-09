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
    return <div>Loading...</div>;
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="bg-gray-900 text-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium">Market Update</h3>
      </div>
      <div className="border-t border-gray-800">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Current Price
              </th>
              <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((list, index) => (
              <tr
                key={index}
                className="bg-gray-700 hover:bg-gray-800 transition duration-150 ease-in-out"
              >
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={list.image}
                        alt="Crypto Image"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-100">
                        {list.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-100">
                    $ {list.current_price.toLocaleString("en-US")}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span
                    className={` text-sm leading-5 ${
                      list.market_cap_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {list.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-100">
                    $ {list.market_cap.toLocaleString("en-US")}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Centered Pagination controls */}
      <div className="px-4 py-3 bg-gray-800 text-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-100 bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-900 active:text-gray-200 transition ease-in-out duration-150"
        >
          Previous
        </button>
        <div className="inline-flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 text-sm leading-5 ${
                currentPage === i + 1
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-100 bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-900 active:text-gray-200 transition ease-in-out duration-150"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CryptoTable;