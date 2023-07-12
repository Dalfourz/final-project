// "use client";

import MovieImage from "@/components/MovieImage";
import axios from "axios";
// import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";

async function MoviePage({ params: { id } }) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const movie = data;
  const officalVideos = movie.videos;
  const video = officalVideos.results;
  console.log(video);

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
          <div className="">
            {video?.slice(0, 3).map((video) => (
              <VideoPlayer video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
