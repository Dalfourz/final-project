import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <div className="mx-8 my-8">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faFilm} className="w-10 h-10 text-4xl mr-2" />
          <h1 className="font-bold text-2xl">CineBase</h1>
        </div>
        <ul className="flex justify-around items-center mx-8 gap-8 text-lg">
          {/* Note to self, fix animation later */}
          <li className="relative group">
            <span className="hover:cursor-pointer">Home</span>
            <span className="absolute -bottom-1 right-0 w-0 h-[3px] bg-[#00AEAE] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <span className="hover:cursor-pointer">Find your Movies</span>
            <span className="absolute -bottom-1 right-0 w-0 h-[3px] bg-[#00AEAE] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="border text-white rounded-full bg-[#00AEAE] w-[120px] h-[36px] flex justify-center items-center hover:cursor-pointer hover:bg-opacity-80">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
