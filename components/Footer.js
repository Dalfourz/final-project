import Image from "next/image";
import tmdbLogo from "../public/assets/blue_square_2_tmdb.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="bg-black text-white text-center py-4 w-screen lg:flex lg:justify-around lg:items-center fixed bottom-0 mt-auto overflow-scroll">
      <div className="lg:flex">
        <div className="flex hover:cursor-pointer justify-center md:m-auto mb-2">
          <FontAwesomeIcon icon={faFilm} className="w-10 h-10 mr-2" />
          <h1 className="font-bold text-2xl">CineBase</h1>
        </div>
      </div>
        <div>
          <p className="">© Julius 2023</p>
          <p className="">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB
          </p>
        </div>
      <div>
        <Image
          src={tmdbLogo}
          width={100}
          height={100}
          alt="TMDB logo"
          className="m-auto my-4 hidden md:block"
        />
      </div>
    </section>
  );
}

export default Footer;
