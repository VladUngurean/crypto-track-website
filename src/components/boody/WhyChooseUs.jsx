import React from "react";
import {
  FaChessKnight,
  FaClipboard,
  FaClone,
  FaPencilRuler,
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
          <div className="text-black lg:text-white relative z-10 mr-[440px] max-lg:mr-[150px] max-md:mr-14 max-sm:mr-0 max-sm:mb-[48px]">
            <div className="whyChooseUs_card_container">
              <span className="whyChooseUs_card_container-icon">
                <FaWallet className="whyChooseUs_card_container-iconSize" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">CONNECT YOU WALLET</p>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </span>
            </div>
            <div className="whyChooseUs_card_containerMid">
              <span className="whyChooseUs_card_container-icon">
                <FaPencilRuler className="whyChooseUs_card_container-iconSize" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">SELECT YOUR QUANTITY</p>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </span>
            </div>
            <div className="whyChooseUs_card_container">
              <span className=" whyChooseUs_card_container-icon">
                <FaClipboard className="whyChooseUs_card_container-iconSize" />
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
            <div className="whyChooseUs_card_container">
              <span className=" whyChooseUs_card_container-icon">
                <FaSatelliteDish className="whyChooseUs_card_container-iconSize" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">RECIVE YOUR OWN NFTS</p>
                <p>Invest all your crypto at one place on one platform.</p>
              </span>
            </div>
            <div className="whyChooseUs_card_containerMid">
              <span className=" whyChooseUs_card_container-icon">
                <FaChessKnight className="whyChooseUs_card_container-iconSize" />
              </span>
              <span className="max-w-[200px]">
                <p className=" font-extrabold">TAKE A MARKET TO SELL</p>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </span>
            </div>
            <div className="whyChooseUs_card_container">
              <span className=" whyChooseUs_card_container-icon">
                <FaClone className="whyChooseUs_card_container-iconSize" />
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
