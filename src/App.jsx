import { useState } from "react";
import { FaBeer, FaGithub } from "react-icons/fa";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/boody/head/Header";
import PopularCrypto from "./components/boody/head/PopularCrypto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <PopularCrypto />
    </>
  );
}

export default App;
