// modules
import { useRouter } from "next/router";

// components
import PolygonComponent from "../../polygonComponent";
import VisitsCounter from "../../visits";

// just comment
const introVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-2/3";
};

export default function HeaderBackground({ bgVidSrc }) {
  const router = useRouter();
  const videoSource = bgVidSrc || introVidSrc;
  return (
    <>
      {/* video, visits counter, and polygon */}
      <div
        className={`video-and-polygon header-background w-full h-full absolute container-fluid bg-indigo-300 overflow-hidden`}
      >
        <VisitsCounter />
        {/* for premium vimeo */}
        <div className="video-wrapper relative h-150% md:h-full lg:h-2/3 xl:h-130% w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute w-422% md:w-321% max-w-none"
          >
            <source src={videoSource} type="video/mp4" />
            <p>{`Your browser doesn't support HTML5 video.`}</p>
          </video>
          {/* end for premium vimeo */}

          {/* video overlay */}
          <div className="overlay w-full h-full bg-black opacity-50 lg:h-150% xl:h-130%"></div>
          {/* video end overlay */}
        </div>
        <PolygonComponent
          color="shape-fill-white"
          position="bottom"
          addedStyle=""
        />
      </div>
      {/* end video and polygon */}

      <style>{`
        .iframe-wrapper {
          padding:56.25% 0 0 0;
          position:relative;
        }
        .iframe {
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
        }
      `}</style>
    </>
  );
}
