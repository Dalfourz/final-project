"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function SearchInput({ initialMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(initialMovies);
  

  async function fetchMovies(searchQuery) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    setMovies(data)
    console.log(data);

  }

  function onSearch() {
    fetchMovies(searchQuery);
  }

  return (
    <div>
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
    </div>
  );
}

export async function getServerSideProps() {
  
  const initialQuery = `fast` // Set your initial search query here
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${initialQuery}&api_key=${API_KEY}`
  );
  const initialMovies = data;

  return {
    props: {
      initialMovies,
    },
  };
}

export default SearchInput
