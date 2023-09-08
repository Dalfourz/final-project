import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full md:px-8 sm:py-4 md:py-4 md:m-auto backdrop-blur-lg shadow-sm z-10 pt-2">
      <div className="flex justify-between md:items-center ">
        <Link href="/" className="">
          <div className="flex hover:cursor-pointer justify-center md:m-auto m-2">
            <FontAwesomeIcon icon={faFilm} className="w-10 h-10 mr-2" />
            <h1 className="font-bold text-2xl">CineBase</h1>
          </div>
        </Link>
        <div className="p-2">
          <HamburgerMenu className="md:hidden w-9 h-9 hover:cursor-pointer" />
        </div>
        <ul className="justify-around items-center mx-8 gap-8 text-lg hidden md:flex">
          {/* Note to self, fix animation later */}
          <li className="relative group">
            <Link href="/">
              <span className="hover:cursor-pointer">Home</span>
              <span className="absolute -bottom-1 right-0 w-0 h-[3px] bg-[#00AEAE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <span className="hover:cursor-pointer">Find your Movies</span>
            <span className="absolute -bottom-1 right-0 w-0 h-[3px] bg-[#00AEAE] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="border text-white rounded-full bg-[#00AEAE] w-[120px] h-[36px] flex justify-center items-center hover:cursor-not-allowed hover:bg-opacity-80">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}
