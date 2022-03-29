import React from "react";
import Overlay from "../overlay";

export default function Video({ videoSource, uploadedBgVideo }) {
  const vimeoWrapperStyle = {
    padding: "56.25% 0 0 0",
    position: "relative",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="video-wrapper relative h-150% md:h-full lg:h-2/3 xl:h-130% w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute fold:w-524% xs:w-422% md:w-321% lg:w-206% xl:w-160% max-w-none"
      >
        <source src={uploadedBgVideo} type="video/mp4" />
        <p>{`Your browser doesn't support HTML5 video.`}</p>
      </video>
      {/* end uploaded video */}

      {/* video overlay */}
      <Overlay style={`bg-indigo-900 opacity-80 lg:h-150% xl:h-130%`} />
      {/* end video overlay */}
    </div>
  );
}
