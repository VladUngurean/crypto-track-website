import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel() {
  const [records, setRecords] = useState([]);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&precision=2"
    )
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const items = records.map((list, index) => (
    <div
      className="  list-none flex  flex-col items-center justify-center"
      key={index}
    >
      <img className=" w-16" src={list.image} alt="coin" />
      <div className=" text-center">
        <div className=" text-white text-sm font-bold">
          {list.name}{" "}
          <span
            className={` font-bold ${
              list.market_cap_change_percentage_24h >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {list.market_cap_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <div className="text-white font-bold">
          $ {list.current_price.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className=" max-w-screen-xl mt-20 mb-40 mx-auto">
        <AliceCarousel
          mouseTracking
          disableButtonsControls
          disableDotsControls
          autoHeight
          autoPlay
          infinite
          autoPlayInterval={2000}
          animationDuration={1500}
          items={items}
          responsive={responsive}
        />
      </div>
    </>
  );
}

export default Carousel;
