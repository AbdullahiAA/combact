import React from "react";

function VideoFrame({ src, title }) {
  return (
    <div className="videoFrame">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox=""
      />
    </div>
  );
}

export default VideoFrame;
