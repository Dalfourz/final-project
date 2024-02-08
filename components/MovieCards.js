import Link from "next/link";
import MovieImage from "./MovieImage";

export default function MovieCards({ movie }) {
  const releaseDate = movie.release_date
  const year = releaseDate.substring(0,4)
  
  return (
    <Link href={`/movie/${movie.id}`} 
    className="border border-gray-200 rounded-lg">
      <div className="relative h-72 max-h-72 flex-1">
        {movie.poster_path ? 
        (<MovieImage movie={movie} fill/>) : ( 
          <p className="text-center">Sadly, we couldn't find any image :( </p>
        )
      }
      </div>
      <div className="ml-1 ">
        <h1 className="font-bold text-center my-4">{movie.title}</h1>
        <p className="text-center">Released : {year}</p>
        <p className="text-center">Rating: {movie.vote_average}</p>

      </div>
    </Link>
  );
}
