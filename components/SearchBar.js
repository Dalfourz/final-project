"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  function onSearch() {
    fetchMovies(searchQuery);
  }

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=1fd6092d&s=${searchQuery}`
    );
    setMovies(data);
    console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const slicedMovies = movies?.Search?.slice(0, 6);
  console.log(slicedMovies);

  return (
    <div className="">
      <div className="flex flex-col m-auto text-center">
        Search your favourite movies here:
        <input
          required
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onSearch()}
          type="input"
          placeholder="Where the magic happens..."
          className="border border-black"
        />
        <button 
        disabled={!searchQuery}
        className="w-full max-w-sm bg-[#00AEAE] rounded-lg disabled:opacity-50">
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
          onClick={() => console.log('test')}
          className="grid grid-cols-3 gap-1 hover:cursor-pointer">
            {slicedMovies?.map((movie) => (
              <div className="border border-gray-200 rounded-lg" key={movie.id}>
                <div className="flex justify-center m-1">
                  <img src={movie.Poster} alt="" className="rounded-lg" />
                </div>
                <div className="ml-1">
                  <h1 className="font-bold">Title: {movie.Title}</h1>
                  <p>Release Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  <p>Imdb ID: {movie.imdbID}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
