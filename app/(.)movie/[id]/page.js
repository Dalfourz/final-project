"use client";

import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "next/navigation";
import axios from "axios";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);

  const movieId = useParams().id;
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: { type: "Trailer" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDIxYTNmODk4ZjJmYTM5ZWUyYWU0NWI0NGNiMGU4MyIsInN1YiI6IjY0NGEzNWNkZjc5NGFkMDRkNDNjZTg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE2EbE6AcsffLvFzyZy7Z6mtAWqBTT4PONFsCeIOQ0A",
      },
    };

    async function fetchMovie() {
      try {
        const { data } = await axios.request(options);
        setMovie(data);
        console.log(data.results[0].key);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          {movie && (
            <>
              <div>
                <ReactPlayer
                  key={movie.id}
                  url={`https://www.youtube.com/watch?v=${movie.results[0].key}`}
                />
              </div>
              <div>
                <p></p>
              </div>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
