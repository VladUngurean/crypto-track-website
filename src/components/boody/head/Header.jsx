export default function Header() {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto mt-20 flex items-top justify-center">
        <img
          className="w-16 animate-bounce max-sm:w-12"
          src="icons/bitcoin.png"
          alt="BTC"
        />
        <p className="text-center text-white text-6xl px-4 font-bold max-sm:mx-2">
          TRACK AND TRADE
        </p>
        <img
          className="w-16 animate-bounce max-sm:w-12"
          src="icons/ethereum.png"
          alt="ETH"
        />
      </div>
      <div className=" max-w-screen-lg mx-auto flex items-center justify-center">
        <p className="text-center text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2100fc] to-[#ff00ff]">
          CRYPTO CURRENCIES
        </p>
      </div>
    </>
  );
}
