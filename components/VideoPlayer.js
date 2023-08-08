"use client";

import dynamic from "next/dynamic";

function VideoPlayer({ video }) {
  const key = video.key;
  const youTubePath = "https://www.youtube.com/watch?v=";
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <>
      {key ? (
        <ReactPlayer
          url={`${youTubePath}${key}`}
          width="100%"
          heigth="100%"
          controls={true}
          className="max-w-2xl m-auto"
        />
      ) : (
        <p className="text-center ">Sadly, we couldn't find any video </p>
      )}
    </>
  );
}

export default VideoPlayer;
