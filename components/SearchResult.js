import { useState } from "react";
import MovieCards from "./MovieCards";

export default function SearchResult({ initialMovies }) {
  return (
    <div>
      <h1>Search Result</h1>
      {initialMovies?.map((movie) => (
        <MovieCards
          key={movie.id}
          movie={movie}
          posterPath="https://image.tmdb.org/t/p/original/" // Replace with your poster path
        />
      ))}
    </div>
  );
}