import React from "react";

const JoinDiscord = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mb-40">
        <div className=" max-w-screen-lg mx-auto mt-20 flex items-top justify-center">
          <img
            className="w-16 animate-shake max-lg:w-12"
            src="icons/bitcoin.png"
            alt="BTC"
          />
          <p className="text-center text-white text-6xl px-4 font-bold max-lg:text-5xl">
            JOIN US VIA
          </p>
          <img
            className="w-16 animate-shake max-lg:w-12"
            src="icons/ethereum.png"
            alt="ETH"
          />
        </div>
        <div className=" max-w-screen-lg mx-auto flex items-center justify-center">
          <p className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2100fc] to-[#ff00ff] max-lg:text-5xl">
            DISCORD
          </p>
        </div>
        <p className=" text-white my-10">
          Invest and manage all your crypto at one place.
        </p>
        <button className=" font-extrabold bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-3xl px-7 py-4 text-white">
          Join Via Discord
        </button>
      </div>
    </>
  );
};

export default JoinDiscord;
