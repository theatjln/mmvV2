// modules
import Link from "next/link";

// components
import BannerCarouselVid from "./bannerCarouselVid";
import BannerCarouselImages from "./bannerCarouselImages";
import BannerCaption from "./bannerCaption";
import Wrapper from "../wrapper";
import SwiperCarousel from "../carousel/swiper";
import Button from "../button/index";
import BannerCarousels from "./bannerCarousels";
import NewBannerCarousels from "../newBannerCarousels";

const dummyImages = [
  {
    imgSrc: `https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    imgSrc: `https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
];

const dummyVideos = [
  {
    vidSrc: `https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761`,
  },
  {
    vidSrc: `https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761`,
  },
];

export default function Banner({
  heading,
  subheading,
  photoGalleryUploads,
  featuredVblogGalleryUploads,
  videoGalleryUploads,
  photoGalleryImages
}) {
  const style = `banner relative w-screen h-200% lg:h-screen flex flex-col items-center justify-between px-5 md:px-20 md:pt-16`;

  return (
    <section className={style}>
      {/* banner caption */}
      <Wrapper
        style={`banner-caption justify-evenly md:items-center relative flex flex-col w-full md:h-3/5 text-center items-between pt-24 md:py-8 h-37r md:px-0 fold:px-0 xs:px-5 mb-6 md:mb-0`}
      >
        <BannerCaption heading={heading} subheading={subheading} />
      </Wrapper>
      {/* end banner caption */}

      {/* scroll down button */}
      <Link href="/#aboutExcerpt" passHref>
        <button className="flex text-white mx-auto mb-8 animate-bounce">
          <i className="fa fa-2x fa-angle-double-down hover:scale-125 "></i>
        </button>
      </Link>
      {/* end scroll down button */}

      {/* banner carousels */}
      {/* <BannerCarousels
        photoGalleryUploads={photoGalleryUploads} 
        featuredVblogGalleryUploads={featuredVblogGalleryUploads}
        videoGalleryUploads={videoGalleryUploads}
      /> */}
      {/* end banner carousels */}
 
      {/* new banner carousels */}
      <NewBannerCarousels photoGalleryImages={photoGalleryImages} />
      {/* end new banner carousels */}
    </section>
  );
}
