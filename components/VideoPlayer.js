'use client'
import ReactPlayer from "react-player";

function VideoPlayer({video}) {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`}/>
        </div>
    );
}

export default VideoPlayer;