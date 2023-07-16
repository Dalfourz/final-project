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

  const trailers = video.filter((x) => x.type === "Trailer");
  // const officialTrailer = filterByValue(trailers, "official" || "Trailer")
  // console.log(trailers)
  // console.log(officialTrailer);

  // function filterByValue(array, string) {
  //   return array.filter((o) =>
  //     Object.keys(o).some((k) => {
  //       if (typeof o[k] === "string")
  //         return o[k].toLowerCase().includes(string.toLowerCase());
  //     })
  //   );
  // }

  // console.log(officialTrailer);

  return (
    <div className="my-6 mx-8">
      <div className="md:flex   ">
        <div className="relative md:w-[calc(100%/2)] h-screen md:mr-8">
          <MovieImage movie={movie} fill className="" />
        </div>
        <div className="md:w-[calc(100%/2)] text-center">
          <h1 className="font-bold text-xl">{movie.title}</h1>
          <h2 className="">{movie.tagline}</h2>
          <p className="mb-2">Release Date: {movie.release_date}</p>
          <p className="mb-2">{movie.overview}</p>
        </div>
      </div>
      <div className="flex-col">
        <h2 className="text-lg font-semibold mb-2 text-center">Video Clips & Trailers</h2>
        {trailers.slice(0, 3).map((video) => (
          <div className="mb-3 m-auto">
            <VideoPlayer video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
