import Link from "next/link";

/* tiktok, yt, fb, ig */

const TikTokLink = () => (
  <Link href="/">
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-tiktok`}></i>
    </a>
  </Link>
);

const YoutubeLink = () => (
  <Link href="/">
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-youtube`}></i>
    </a>
  </Link>
);

const FbLink = () => (
  <Link href="/">
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-facebook`}></i>
    </a>
  </Link>
);

const IgLink = () => (
  <Link href="/">
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-instagram`}></i>
    </a>
  </Link>
);

export default function SocialIcons() {
  return (
    <span className="inline-flex">
      <TikTokLink />
      <YoutubeLink />
      <FbLink />
      <IgLink />
    </span>
  );
}
