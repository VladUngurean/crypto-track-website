export default function Header() {
  return (
    <>
      <div className="flex items-baseline justify-center mt-9">
        <img
          className="w-16 animate-bounce"
          src="icons/bitcoin.png"
          alt="BTC"
        />
        <p className=" text-white text-8xl font-bold px-6">TRACK AND TRADE</p>
        <img
          className="w-16 animate-bounce"
          src="icons/ethereum.png"
          alt="ETH"
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2100fc] to-[#ff00ff]">
          CRYPTO CURRENCIES
        </p>
      </div>
    </>
  );
}
