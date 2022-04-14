// modules
import { useRouter } from "next/router";

// components
import PolygonComponent from "../../polygonComponent";
import Video from "../../video"; 

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-2/3";
};

export default function HeaderBackground({ uploadedBgVideo, fallbackBgImg }) {
  const style = `video-and-polygon header-background w-full h-81% absolute container-fluid overflow-hidden -mt-1`;

  return (
    <div className={style}>
      <Video uploadedBgVideo={uploadedBgVideo} fallbackBgImg={fallbackBgImg} />
      <PolygonComponent color="shape-fill-white" position="bottom" />
    </div>
  );
}
