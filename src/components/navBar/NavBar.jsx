import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav id="homePage" className="flex justify-center p-4 mx-11 max-sm:mx-2">
      <div className="w-full max-w-[1000px] flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="">
          <p className="text-2xl font-bold text-white">COINTRACK</p>
        </div>
        <div className="flex justify-center items-center">
          <a href="#cryptoTable" className="navBar_links ml-0">
            Market
          </a>
          <a href="#whyChooseUs" className="navBar_links">
            Choose Us
          </a>
          <a href="#joinDiscord" className="navBar_links">
            Join
          </a>
        </div>
        <div className="mt-0 w-[70px] flex justify-between">
          <FaTwitter className="navBar_faIcons" />
          <FaDiscord className="navBar_faIcons" />
        </div>
      </div>
    </nav>
  );
}
