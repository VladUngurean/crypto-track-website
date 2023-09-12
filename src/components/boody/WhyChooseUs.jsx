import React from "react";
import {
  FaChessKnight,
  FaClipboard,
  FaClone,
  FaPencilRuler,
  FaSatellite,
  FaSatelliteDish,
  FaWallet,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <>
      <div
        id="whyChooseUs"
        className="flex justify-center items-center flex-col mb-60"
      >
        <div className="flex text-center text-6xl font-extrabold text-white my-20 max-sm:text-4xl">
          WHY
          <p className="ml-4 text-center text-transparent bg-clip-text text-6xl font-extrabold bg-gradient-to-r from-[#2100fc] to-[#ff00ff] max-sm:text-4xl">
            CHOOSE US
          </p>
        </div>

        <div className="flex flex-row max-sm:flex-col justify-center items-center">
          <div className=" text-black lg:text-white relative z-10 mr-[440px] max-lg:mr-[150px] max-md:mr-14 max-sm:mr-0 max-sm:mb-[48px]">
            <div className="w-[280px] h-[120px] flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaWallet className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">CONNECT YOU WALLET</p>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </span>
            </div>
            <div className="w-[280px] h-[120px] my-12 flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaPencilRuler className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">SELECT YOUR QUANTITY</p>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </span>
            </div>
            <div className="w-[280px] h-[120px] flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaClipboard className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">CONFIRM TRANSACTION</p>
                <p>Earn by selling your crypto on our marketplace.</p>
              </span>
            </div>
          </div>
          <div className=" z-0 absolute top-auto left-auto w-[370px]">
            <img
              className=" w-[370px] h-[500px]"
              src="./images/cryptoHand.png"
              alt="img"
            />
          </div>
          <div className=" text-black lg:text-white relative z-10">
            <div className="w-[280px] h-[120px] flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaSatelliteDish className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">RECIVE YOUR OWN NFTS</p>
                <p>Invest all your crypto at one place on one platform.</p>
              </span>
            </div>
            <div className="w-[280px] h-[120px] my-12 flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaChessKnight className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">TAKE A MARKET TO SELL</p>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </span>
            </div>
            <div className="w-[280px] h-[120px] flex flex-row justify-center items-center max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-30 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaClone className="w-[27px] h-[27px] text-white" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">DRIVE YOUR COLLECTION</p>
                <p>We make it easy to Discover, Invest and manage.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
