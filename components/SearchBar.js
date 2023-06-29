"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalComponent from "./modals/VideoModal";
import { useModalStore, createIdStore } from "@/zustand/store";
import MovieCards from "./MovieCards";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
  const { toggleModal } = useModalStore();


  async function fetchMovies(searchQuery) {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    setMovies(data);
    // console.log(data?.results[1].id)
    // console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  function onSearch() {
    fetchMovies(searchQuery);
  }

  const slicedMovies = movies?.results?.slice(0, 6);
  // const modalId = slicedMovies.
  // console.log(slicedMovies)

  return (
    <div className="">
      <p className="font-bold text-center">
        Search your favourite movies here:
      </p>
      <div className="flex m-auto justify-center items-center">
        <input
          required
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onSearch()}
          type="input"
          placeholder="Where the magic happens..."
          className="border border-black rounded-lg xl:max-w-2xl mr-2 h"
        />
        <button
          disabled={!searchQuery}
          className=" w-full max-w-[40px] bg-[#00AEAE] rounded-lg disabled:opacity-50"
        >
          <FontAwesomeIcon
            onClick={() => onSearch()}
            className="w-10 h-10 text-white"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>

      <section>
        <div className="">
          <h1 className="">Search Results:</h1>
          <select name="" id="" className="border">
            <option value="" disabled selected>
              Sort by Release Year
            </option>
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>

        {loading ? (
          <div className="grid grid-cols-3 gap-1">
            {new Array(6).fill(0).map((_, index) => (
              <div className="border border-gray-200 rounded-lg">
                <div className="bg-gray-300 h-[240px] rounded-lg flex justify-center m-1">
                  <img src="" alt="" className="" />
                </div>
                <div className="ml-1">
                  <h1 className="bg-gray-300 h-4 w-[220px] rounded-lg mb-1"></h1>
                  <p className="bg-gray-300 h-4 w-[120px] rounded-lg mb-1"></p>
                  <p className="bg-gray-300 h-4 w-[120px] rounded-lg mb-1"></p>
                  <p className="bg-gray-300 h-4 w-[120px] rounded-lg mb-1"></p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            // onClick={toggleModal}
            // onClick={console.log('object')}
            className="grid grid-cols-3 gap-1 hover:cursor-pointer"
          >
            {slicedMovies?.map((movie) => (
              <div className="border border-gray-200 rounded-lg" key={movie.id}>
                <MovieCards movie={movie}/>
              </div>
            ))}

            {/* <ModalComponent /> */}
          </div>
        )}
      </section>
    </div>
  );
}
