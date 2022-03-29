// modules
import { useRouter } from "next/router";

// components
import HeaderBackground from "../header/headerBackground";
import Banner from "../banner";

export default function Header({
  bgVidSrc,
  uploadedBgVideo,
  photoGalleryUploads,
  featuredVblogGalleryUploads,
  videoGalleryUploads,
  heading,
  subheading,
}) {
  const router = useRouter();
  const style = `header w-screen md:h-screen text-gray-600 body-font ${
    router.pathname === `/` ? `relative h-300%` : `absolute h-full`
  }`;

  return (
    <header className={style}>
      <HeaderBackground bgVidSrc={bgVidSrc} uploadedBgVideo={uploadedBgVideo} />
      {router.pathname === `/` && (
        <Banner
          heading={heading}
          subheading={subheading}
          photoGalleryUploads={photoGalleryUploads}
          featuredVblogGalleryUploads={featuredVblogGalleryUploads}
          videoGalleryUploads={videoGalleryUploads}
        />
      )}
    </header>
  );
}
