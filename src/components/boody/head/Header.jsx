import React from "react";

const Header = () => {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto mt-20 flex items-top justify-center">
        <img
          className="w-16 animate-shake max-lg:w-12"
          src="icons/bitcoin.png"
          alt="BTC"
        />
        <p className="text-center text-white text-6xl px-4 font-bold max-lg:text-5xl">
          TRACK AND TRADE
        </p>
        <img
          className="w-16 animate-shake max-lg:w-12"
          src="icons/ethereum.png"
          alt="ETH"
        />
      </div>
      <div className=" max-w-screen-lg mx-auto flex items-center justify-center">
        <p className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2100fc] to-[#ff00ff] max-lg:text-5xl">
          CRYPTO CURRENCIES
        </p>
      </div>
    </>
  );
};

export default Header;
