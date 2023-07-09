"use client";

import MovieImage from "@/components/MovieImage";
import { useEffect } from "react";
import ReactPlayer from "react-player";

async function MoviePage({ params: { id } }) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const movie = await res.json();
  // console.log(movie);

  const officalVideos = movie.videos
  // const result = officalVideos.map(results => results.key)
  console.log(officalVideos)
  
  return (
    <div className="my-6 mx-8">
      <div className="flex ">
        <div className="relative w-[calc(100%/2)] h-screen">
          <MovieImage movie={movie} fill className="" />
        </div>
        <div className="w-[calc(100%/2)]">
          <h1 className="font-bold">{movie.title}</h1>
          <h2 className="">{movie.tagline}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>{movie.overview}</p>
          <h2>Videos</h2>

        </div>
      </div>
    </div>
  );
}

export default MoviePage;
