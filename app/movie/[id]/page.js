import MovieImage from "@/components/MovieImage";

async function MoviePage({ params: { id } }) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  console.log(id);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div className="flex my-6">
      <div className="relative w-full h-screen">
        <MovieImage movie={movie} fill
        className=""/>
      </div>
      <div className="w-full">
        <h1 className="font-bold">{movie.title}</h1>
        <h2 className="">{movie.tagline}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MoviePage;
