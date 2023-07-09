import Link from "next/link";
import MovieImage from "./MovieImage";

export default function MovieCards({ movie }) {
  
  return (
    <Link href={`/movie/${movie.id}`} 
    className="border border-gray-200 rounded-lg">
      <div className="relative h-72 max-h-72 flex-1">
        {movie.poster_path ? 
        (<MovieImage movie={movie} fill/>) : ( 
          <p className="text-center">Sadly, we couldn't find any image here :( </p>
        )
      }
      </div>
      <div className="ml-1">
        <h1 className="font-bold">{movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
      </div>
    </Link>
  );
}
