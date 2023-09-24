import React, { useEffect, useState } from "react";

function CryptoTable({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setDisplayData(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, data, itemsPerPage]);

  if (!data.length) {
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
            <thead className="bg-gradient-to-b from-[#2100fc] to-[#ff00ff]">
              <tr>
                <th className="cryptoTable_tableHead">Name</th>
                <th className="cryptoTable_tableHead">Current Price</th>
                <th className="cryptoTable_tableHead">24h Change</th>
                <th className="cryptoTable_tableHead">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((list, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition duration-150 ease-in-out border-b"
                >
                  <td className="cryptoTable_tableCell">
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
                  <td className="cryptoTable_tableCell">
                    <div className="text-sm leading-5 text-gray-100">
                      $ {list.current_price.toLocaleString("en-US")}
                    </div>
                  </td>
                  <td className="cryptoTable_tableCell">
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
                  <td className="cryptoTable_tableCell">
                    <div className="text-sm leading-5 text-gray-100">
                      ${list.market_cap.toLocaleString("en-US")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" max-sm:flex max-sm:flex-col  justify-center items-center px-4 py-3 text-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="paginationButton_previous"
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
            className="paginationButton_next"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CryptoTable;
