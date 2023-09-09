export default function Header() {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center mt-9 md:flex-row">
        <img
          className="w-16 animate-bounce md:mr-4"
          src="icons/bitcoin.png"
          alt="BTC"
        />
        <p className="text-center text-white text-3xl md:text-6xl font-bold px-6">
          TRACK AND TRADE
        </p>
        <img
          className="w-16 animate-bounce md:ml-4"
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
