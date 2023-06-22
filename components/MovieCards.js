import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function MovieCards({ movie, posterPath }) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="flex justify-center m-1">
        <img
          src={`${posterPath}${movie.poster_path}`}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="ml-1">
        <h1 className="font-bold">Title: {movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
      </div>
    </div>
  );
}
