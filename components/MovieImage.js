import Image from "next/image";

function MovieImage({ movie, fill }) {
  const posterPath = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {fill ? (
        <Image
          src={`${posterPath}${movie.poster_path}`}
          alt="Image"
          fill
          className="object-scale-down"
        />
      ) : (
        <Image
          src={`${posterPath}${movie.poster_path}`}
          alt="Image"
          width={400}
          height={1000}
          className="object-contain"
        />
      )}
    </>
  );
}

export default MovieImage;
