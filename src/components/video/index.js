// modules
import React from "react";
import Image from "next/image";

// components
import Overlay from "../overlay";

const fallbackVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

export default function Video({ uploadedBgVideo, fallbackBgImg }) {
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
      {/* fallback bg image */}
      <div className="bg-img-wrapper absolute h-full md:h-150% w-full">
        <Image
          alt="background-image"
          src={fallbackBgImg}
          layout="fill"
          className="relative"
        />
      </div>
      {/* end fallback image */}

      <video
        autoPlay
        loop
        muted
        className="absolute fold:w-700% xs:w-524% md:w-321% lg:w-206% xl:w-160% max-w-none"
      >
        <source src={uploadedBgVideo || fallbackVidSrc} type="video/mp4" />
        <p>{`Your browser doesn't support HTML5 video.`}</p>
      </video>

      {/* end uploaded video */}

      {/* video overlay */}
      <Overlay style={`bg-indigo-900 opacity-80 lg:h-150% xl:h-130%`} />
      {/* end video overlay */}
    </div>
  );
}
