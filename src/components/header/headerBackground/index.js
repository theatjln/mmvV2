// modules
import { useRouter } from "next/router";

// components
import PolygonComponent from "../../polygonComponent";
import Video from "../../video";
import VisitsCounter from "../../visits";

const fallbackVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-2/3";
};

export default function HeaderBackground({ bgVidSrc, uploadedBgVideo }) {
  const style = `video-and-polygon header-background w-full h-81% absolute container-fluid bg-indigo-200 overflow-hidden`; 

  const videoSource = bgVidSrc || fallbackVidSrc;

  return ( 
    <div className={style}>
      
      <Video videoSource={videoSource} uploadedBgVideo={uploadedBgVideo} />
      <PolygonComponent color="shape-fill-white" position="bottom" />
    </div>
  );
}
