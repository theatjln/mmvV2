import { useRouter } from "next/router";
import PolygonComponent from "../../polygonComponent";
import VisitsCounter from "../../visits";

const introVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-3/5";
};

export default function HeaderBackground({ bgVidSrc }) {
  const router = useRouter();
  const mdHeight = getHeight(router.pathname);
  return (
    <div className="header-background w-full h-screen absolute">
      <div
        className={`container-fluid ${mdHeight} bg-indigo-300 overflow-hidden relative md:h-2/3 h-150%`}
      >
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
          <div className="overlay w-full h-full bg-black opacity-80 lg:h-150% xl:h-130%"></div>
        </div>
        <VisitsCounter />
        <PolygonComponent color="shape-fill-white" position="bottom" />
      </div>
    </div>
  );
}
