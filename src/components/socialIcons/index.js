import Link from "next/link";

/* tiktok, yt, fb, ig */

const TikTokLink = ({ href }) => (
  <Link href={`https:${href}`}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-tiktok`}></i>
    </a>
  </Link>
);

const YoutubeLink = ({ href }) => (
  <Link href={`https:${href}`}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-youtube`}></i>
    </a>
  </Link>
);

const FbLink = ({ href }) => (
  <Link href={`https:${href}`}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-facebook`}></i>
    </a>
  </Link>
);

const IgLink = ({ href }) => (
  <Link href={`${href}`}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-instagram`}></i>
    </a>
  </Link>
);

export default function SocialIcons(props) { 
  const { tiktokLink, youtubeChannelLink, facebookLink, instagramLink } = props;
  return (
    <span className="inline-flex">
      <TikTokLink href={tiktokLink} />
      <YoutubeLink href={youtubeChannelLink} />
      <FbLink href={facebookLink} />
      <IgLink href={instagramLink} />
    </span>
  );
}
