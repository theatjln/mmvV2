import { useRouter } from "next/router";
import PolygonComponent from "../../polygonComponent";
import VisitsCounter from "../../visits";

const introVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-2/3";
};

export default function HeaderBackground({ bgVidSrc }) {
  const router = useRouter();
  const mdHeight = getHeight(router.pathname);
  return (
    <div className="header-background w-full h-screen absolute">
      <div
        className={`container-fluid ${mdHeight} bg-indigo-300 overflow-hidden relative lg:h-4/5 h-150%`}
      >
        {/* for premium vimeo */}
        <div className="video-wrapper relative h-150% md:h-full lg:h-2/3 xl:h-130% w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute w-422% md:w-321% max-w-none"
          >
            <source src={bgVidSrc} type="video/mp4" />
            <p>{`Your browser doesn't support HTML5 video.`}</p>
          </video>
          <div className="overlay w-full h-full bg-black opacity-50 lg:h-150% xl:h-130%"></div>
        </div>
        {/* end for premium vimeo */}

        {/* from basic vimeo acc */}
        {/*  <div className="video-wrapper relative h-150% md:h-full lg:h-2/3 xl:h-130% w-full">
          <div className="iframe-wrapper">
            <iframe
              src="https://player.vimeo.com/video/690927410?h=6218d2113b&autoplay=1&loop=1&title=0&byline=0&portrait=0"
              className="iframe"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> 
          <div className="overlay w-full h-full bg-black opacity-80 lg:h-150% xl:h-130% z-20"></div>
        </div> */}
        {/* end from basic vimeo acc */}

        <VisitsCounter />
        <PolygonComponent color="shape-fill-white" position="bottom" />
      </div>
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
    </div>
  );
}
