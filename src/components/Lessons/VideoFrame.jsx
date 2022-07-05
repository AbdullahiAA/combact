import React from "react";

function VideoFrame({ src }) {
  return (
    <div className="videoFrame">
      {/* <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox=""
      ></iframe> */}

      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoFrame;
