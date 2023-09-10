import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="flex justify-center p-4 mx-11 max-sm:mx-2">
      <div className="w-full max-w-[1000px] flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="">
          <p className="text-2xl font-bold text-white">COINTRACK</p>
        </div>
        <div className="flex justify-center items-center">
          <a href="#" className="nav_links ml-0">
            Home
          </a>
          <a href="#" className="nav_links">
            Market
          </a>
          <a href="#" className="nav_links">
            Choose Us
          </a>
          <a href="#" className="nav_links">
            Join
          </a>
        </div>
        <div className="mt-0 w-[70px] flex justify-between">
          <FaTwitter className=" w-6 h-full text-white" />
          <FaDiscord className=" w-6 h-full text-white" />
        </div>
      </div>
    </nav>
  );
}
