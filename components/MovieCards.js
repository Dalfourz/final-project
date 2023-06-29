import Link from "next/link";
import MovieImage from "./MovieImage";

export default function MovieCards({ movie }) {
  
  return (
    <Link href={`/movie/${movie.id}`} 
    className="border border-gray-200 rounded-lg">
      <div className="relative h-72 max-h-72 flex-1">
        <MovieImage movie={movie} fill/>
      </div>
      <div className="ml-1">
        <h1 className="font-bold">Title: {movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
      </div>
    </Link>
  );
}
