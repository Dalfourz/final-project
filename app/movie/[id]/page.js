// "use client";

import MovieImage from "@/components/MovieImage";
import axios from "axios";
import VideoPlayer from "@/components/VideoPlayer";
import CurrencyFormatter from "@/components/CurrencyFormatter";


async function MoviePage({ params: { id } }) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const OAUTH = process.env.NEXT_PUBLIC_OAUTH;
  console.log(id);
  
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    headers: {
      accept: "application/json",
      Authorization: OAUTH,
    },
  };

  const options2 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    // First API call
    const response = await axios.request(options);
    const people = response.data;

    // Second API call
    const response2 = await axios.request(options2);
    const movie = response2.data;

    const officalVideos = movie.videos;
    const videos = officalVideos.results;
    const trailers = videos.filter((video) => video.type === "Trailer");

    // Actors & Director
    const director = people.crew.find(
      (crewMembers) => crewMembers.known_for_department === "Directing"
    );
    const actors = people.cast.filter(
      (castMembers) => castMembers.known_for_department === "Acting"
    );

    return (
      <div className="my-6 mx-8 mt-[120px]">
        <div className="md:flex mb-4">
          <div className="relative md:w-[calc(100%/2)] h-screen md:mr-8">
            <MovieImage movie={movie} fill className="" />
          </div>
          <div className="md:w-[calc(100%/2)] text-center">
            <h1 className="font-bold text-xl">{movie.title}</h1>
            <h2 className="mb-4">{movie.tagline}</h2>
            <p className="mb-2">{movie.overview}</p>
            <p className="font-semibold">Release Date:</p> 
            <p className="mb-2 ">{movie.release_date}</p>
            <div className="mb-2 ">
              <p className="font-semibold">Budget:</p>
              <CurrencyFormatter movie={movie.budget} />
            </div>
            <div className="mb-2 ">
              <p className="font-semibold">Revenue:</p>
              <CurrencyFormatter movie={movie.revenue} />
            </div>
            <div className="mb-2 ">
              <p className="font-semibold">Director:</p> 
              <p>{director.name}</p>
            </div>
            <div className="mb-2 ">
              <p className="font-semibold">Actors:</p>
              {actors.slice(0, 8).map((actor) => (
                <p>{actor.name}</p>
              ))}
            </div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex-col">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Video Clips & Trailers
          </h2>
          <div
            className={
              trailers.length === 1
                ? "m-auto w-full max-w-2xl "
                : "md:grid grid-flow-col md:grid-cols-3  "
            }
          >
            {trailers?.slice(0, 4).map((video) => (
              <div className="mb-4 m-auto" key={id}>
                <VideoPlayer video={video} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>"Error fetching data"</p>;
  }
}

export default MoviePage;

