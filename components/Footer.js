import Image from "next/image";
import tmdbLogo from "../public/assets/blue_square_2_tmdb.svg";

function Footer() {
  return (
    <section className="bg-black text-white text-center py-8">
      <div className="">
        <p className="">© Julius 2023</p>
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB
        </p>
      </div>
      <div>
        <Image src={tmdbLogo} width={100} height={100} alt="TMDB logo" className="m-auto mt-8"/>
      </div>
    </section>
  );
}

export default Footer;
