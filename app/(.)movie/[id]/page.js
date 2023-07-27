"use client";

import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MovieImage from "@/components/MovieImage";
import { useRouter } from "next/navigation";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const movieId = useParams().id;
  const [movie, setMovie] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchMovie() {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      const movie = await res.json();
      setMovie(movie);
    }
    fetchMovie(movie);
  }, [movieId]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white w-[850px] h-[450px]">
          <>
            <div className="">
              <div className="my-6 ">
                <div className="relative w-[200px] h-[300px] m-auto">
                  <MovieImage movie={movie} fill className="" />
                </div>
                <div className="w-full">
                  <h1 className="text-center font-bold">{movie.title}</h1>
                  <p className="text-center">{movie.tagline}</p>
                </div>
              </div>
              <button onClick={() => window.location.reload()} className="flex m-auto w-[150px] border-blue-400">
                <p className="m-auto border border-blue-400 rounded-md px-5">Full Info</p>
              </button>
            </div>
          </>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
