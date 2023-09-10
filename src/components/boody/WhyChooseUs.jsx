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
      <div className="flex justify-center items-center flex-col mb-60">
        <p className="flex text-center text-6xl font-extrabold text-white my-20">
          WHY
          <p className="ml-4 text-center text-transparent bg-clip-text text-6xl font-extrabold bg-gradient-to-r from-[#2100fc] to-[#ff00ff]">
            CHOOSE US
          </p>
        </p>

        <div className="flex flex-row justify-center items-center">
          <div className="text-white">
            <div className="flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaWallet className="w-[27px] h-[27px]" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">CONNECT YOU WALLET</p>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </span>
            </div>
            <div className="my-20 flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaPencilRuler className="w-[27px] h-[27px]" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">SELECT YOUR QUANTITY</p>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaClipboard className="w-[27px] h-[27px]" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">CONFIRM TRANSACTION</p>
                <p>Earn by selling your crypto on our marketplace.</p>
              </span>
            </div>
          </div>
          <div>
            <img
              className=" w-[450px] h-[500px]"
              src="./images/cryptoHand.png"
              alt="img"
            />
          </div>
          <div className=" text-white">
            <div className="flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaSatelliteDish className="w-[27px] h-[27px]" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">RECIVE YOUR OWN NFTS</p>
                <p>Invest all your crypto at one place on one platform.</p>
              </span>
            </div>
            <div className="my-20 flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaChessKnight className="w-[27px] h-[27px]" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">TAKE A MARKET TO SELL</p>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <span className=" mr-3 flex justify-center items-center w-[46px] h-[46px] bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-xl">
                <FaClone className="w-[27px] h-[27px]" />
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
