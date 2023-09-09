import NavBar from "./components/navBar/NavBar";
import Header from "./components/boody/head/Header";

import { useEffect, useState } from "react";

import Carousel from "./components/boody/head/Carousel";
import CryptoTable from "./components/boody/CryptoTable";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => response.json())
      .then((data) => setCryptoData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <Carousel />
      <CryptoTable itemsPerPage={itemsPerPage} data={cryptoData} />
    </>
  );
}

export default App;
