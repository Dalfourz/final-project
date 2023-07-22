"use client";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

function VideoPlayer({ video }) {
  const key = video.key;
  const youTubePath = "https://www.youtube.com/watch?v="
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })
//   console.log(youTubePath)

  return (
    <>
      <ReactPlayer url={`${youTubePath}${key}`}
      width="100%"
      // heigth="100%"
      controls={true}
      className=""/>
    </>
  );
}

export default VideoPlayer;
