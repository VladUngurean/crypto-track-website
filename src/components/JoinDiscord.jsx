import React from "react";

const JoinDiscord = () => {
  return (
    <>
      <div
        id="joinDiscord"
        className="flex justify-center items-center flex-col mb-40"
      >
        <div className=" max-w-screen-lg mx-auto flex items-top justify-center">
          <img
            className="w-16 animate-shake max-lg:w-12"
            src="icons/bitcoin.png"
            alt="BTC"
          />
          <p className="text-center text-white text-6xl px-4 font-bold max-sm:text-4xl max-lg:text-5xl">
            JOIN US VIA
          </p>
          <img
            className="w-16 animate-shake max-lg:w-12"
            src="icons/ethereum.png"
            alt="ETH"
          />
        </div>
        <div className=" max-w-screen-lg mx-auto flex items-center justify-center">
          <p className="boldGradiendText">DISCORD</p>
        </div>
        <p className=" text-center text-white font-mono my-10 max-sm:max-w-[280px]">
          Invest and manage all your crypto at one place.
        </p>
        <button className="font-extrabold mb-8 bg-gradient-to-t from-[#2100fc] to-[#ff00ff] rounded-3xl px-7 py-4 text-white">
          Join Via Discord
        </button>
      </div>
    </>
  );
};

export default JoinDiscord;
