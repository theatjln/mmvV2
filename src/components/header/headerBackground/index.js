import { useRouter } from "next/router";

const introVidSrc =
  "https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761";

const getHeight = (path) => {
  if (path === "/") return "md:h-4/5";
  else if (path === "/contact") return "";
  else return "md:h-3/5";
};

export default function HeaderBackground() {
  const router = useRouter();
  const mdHeight = getHeight(router.pathname);
  return (
    <div className="w-full h-screen absolute">
      <div
        className={`container-fluid ${mdHeight} bg-indigo-300 h-full overflow-hidden relative`}
      >
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute w-206% md:w-screen max-w-none"
          >
            <source src={introVidSrc} type="video/mp4" />
            <p>{`Your browser doesn't support HTML5 video.`}</p>
          </video>
          <div className="overlay w-full h-full bg-black opacity-80"></div>
        </div>
      </div>
    </div>
  );
}
