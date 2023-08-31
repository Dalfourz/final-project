"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useModalStore, createIdStore } from "@/zustand/store";
import MovieCards from "./MovieCards";


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [showOption, setShowOption] = useState(false)

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const { toggleModal } = useModalStore();

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  async function fetchMovies(searchQuery) {
    setShowOption(false)
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    const sortedMovies = data?.results.sort(
      (a, b) => b.vote_count - a.vote_count
    );
    setMovies(sortedMovies);
    setLoading(false);
    setShowOption(true)
  }

  function onSearch() {
    fetchMovies(searchQuery);
  }

  return (
    <div className="mb-[200px]">
      <p className="font-bold text-center mb-4">
        Search your favourite movie here:
      </p>
      <div className="flex m-auto justify-center items-center">
        <input
          required
          autoFocus
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onSearch()}
          type="input"
          placeholder="Where the magic happens..."
          className="border focus:outline-none rounded-lg xl:max-w-2xl mr-2 px-2 py-1 "
        />
        <button
          disabled={!searchQuery}
          className="hidden sm:block w-full max-w-[40px] bg-[#00AEAE] rounded-lg disabled:opacity-50"
        >
          <FontAwesomeIcon
            onClick={() => onSearch()}
            className="w-5 h-5 p-1 text-white"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>

      <section className="max-w-7xl m-auto">
        {showOption ? (
          <div className="m-auto mx-4">
          <h1 className="mb-4">Search Results:</h1>
          <select
            value={selectedValue}
            name=""
            id=""
            className="border"
            onChange={handleInputChange}
          >
            <option value="" disabled defaultValue={true}>
              Sort by
            </option>
            <option value="MOST_POPULAR">Most Popular</option>
            <option value="LOW_TO_HIGH">Ascending</option>
            <option value="HIGH_TO_LOW">Descending</option>
          </select>
        </div>
        ): null}
        

        {loading ? (
          
          <div className="grid grid-cols-3 gap-3 mx-4 my-4 ">
            {new Array(6).fill(0).map((_, index) => (
              <div
                className="border border-gray-200 rounded-lg w-[384px] max-w-sm m-auto"
                key={index}
              >
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
          <div className="max-w-7xl m-auto">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4 my-4">

              {selectedValue === "LOW_TO_HIGH"
                ? movies

                    .sort(function (a, b) {
                      return (
                        new Date(a.release_date) - new Date(b.release_date)
                      );
                    })
                    .slice(0, 6)
                    .map((movie) => (
                      <div
                        className="border border-gray-200 rounded-lg w-full max-w-sm m-auto hover:cursor-pointer mb-4"
                        key={movie.id}
                      >
                        <MovieCards movie={movie} />
                      </div>
                    ))
                : selectedValue === "HIGH_TO_LOW"
                ? movies

                    .sort(function (a, b) {
                      return (
                        new Date(b.release_date) - new Date(a.release_date)
                      );
                    })
                    .slice(0, 6)
                    .map((movie) => (
                      <div
                        className="border border-gray-200 rounded-lg  w-full max-w-sm m-auto hover:cursor-pointer mb-4"
                        key={movie.id}
                      >
                        <MovieCards movie={movie} />
                      </div>
                    ))
                : movies
                    .sort(function (a, b) {
                      return new Date(b.vote_count) - new Date(a.vote_count);
                    })
                    .slice(0, 6)
                    .map((movie) => (
                      <div
                        className="border border-gray-200 rounded-lg w-full max-w-sm m-auto hover:cursor-pointer mb-4"
                        key={movie.id}
                      >
                        <MovieCards movie={movie} />
                      </div>
                    ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
