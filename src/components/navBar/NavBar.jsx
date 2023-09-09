import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="flex justify-center p-4 mx-11 max-sm:mx-2">
      <div className="w-[1000px] flex justify-between">
        <div className="mb-2 sm:mb-0">
          <p className="text-2xl font-bold text-white">COINTRACK</p>
        </div>
        <div className=" max-sm:hidden">
          <a href="#" className="nav_links">
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
        <div className=" w-[70px] flex justify-between max-sm:hidden">
          <FaTwitter className=" w-6 h-full text-white" />
          <FaDiscord className=" w-6 h-full text-white" />
        </div>
      </div>
    </nav>
  );
}
