import Link from "next/link";

/* email, tiktok, yt, fb, ig */

const ToEmail = ({ href }) => (
  <a
    className="text-gray-500 hover:cursor-pointer mx-3"
    target="_blank"
    href={`mailto:${href}`}
    rel="noopener noreferrer"
  >
    <i className={`fa fa-envelope`}></i>
  </a>
);

const TikTokLink = ({ href }) => (
  <Link href={href}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-tiktok`}></i>
    </a>
  </Link>
);

const YoutubeLink = ({ href }) => (
  <Link href={href}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-youtube`}></i>
    </a>
  </Link>
);

const FbLink = ({ href }) => (
  <Link href={href}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-facebook`}></i>
    </a>
  </Link>
);

const IgLink = ({ href }) => (
  <Link href={href}>
    <a className="text-gray-500 hover:cursor-pointer mx-3" target="_blank">
      <i className={`fab fa-instagram`}></i>
    </a>
  </Link>
);

export default function SocialIcons(props) {
  const { tiktokLink, youtubeChannelLink, facebookLink, instagramLink, email } =
    props;
  return (
    <span className="inline-flex">
      <TikTokLink href={tiktokLink} />
      <YoutubeLink href={youtubeChannelLink} />
      <FbLink href={facebookLink} />
      <IgLink href={instagramLink} />
      <ToEmail href={email} />
    </span>
  );
}
