import React from "react";
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-baseline relative">
        <div className="w-[300px] flex justify-start absolute bottom-0 left-0">
          <img className="max-w-[300px]" src="images/chest.png" alt="chest" />
        </div>
        <div className="text-white w-[200px] flex flex-row justify-between">
          <span className="h-[60px]">
            <FaTwitter className="w-[50px] h-[30px]" />
          </span>
          <span>
            <FaDiscord className="w-[50px] h-[30px]" />
          </span>
          <span>
            <FaFacebook className="w-[50px] h-[30px]" />
          </span>
          <span>
            <FaYoutube className="w-[50px] h-[30px]" />
          </span>
        </div>
        <div className="w-[300px] flex justify-end absolute bottom-0 right-0">
          <img className="max-w-[150px]" src="images/coinImg.png" alt="coin" />
        </div>
      </div>
    </>
  );
};

export default Footer;
