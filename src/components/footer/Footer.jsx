import React from "react";
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-baseline relative">
        <div className="w-[300px] flex justify-start absolute z-0 bottom-0 left-0">
          <img className="max-w-[300px]" src="images/chest.png" alt="chest" />
        </div>
        <div className="text-white max-sm:text-yellow-400 w-[200px] flex flex-row justify-between relative z-10">
          <span className="h-[60px]">
            <FaTwitter className="footerFaIcons" />
          </span>
          <span>
            <FaDiscord className="footerFaIcons" />
          </span>
          <span>
            <FaFacebook className="footerFaIcons" />
          </span>
          <span>
            <FaYoutube className="footerFaIcons" />
          </span>
        </div>
        <div className="w-[300px] flex justify-end absolute z-0 bottom-0 right-0">
          <img className="max-w-[150px]" src="images/coinImg.png" alt="coin" />
        </div>
      </div>
    </>
  );
};

export default Footer;
