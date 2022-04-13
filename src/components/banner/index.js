// modules
import Link from "next/link";

// components
import BannerCarouselVid from "./bannerCarouselVid";
import BannerCarouselImages from "./bannerCarouselImages";
import BannerCaption from "./bannerCaption";
import Wrapper from "../wrapper";
import SwiperCarousel from "../carousel/swiper";
import Button from "../button/index";

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
}) {
  const style = `banner relative w-screen w-screen h-200% md:h-screen flex flex-col items-center justify-between px-5 md:px-20 md:pt-16`;

  return (
    <section className={style}>
      {/* banner caption */}
      <Wrapper
        style={`banner-caption justify-evenly md:items-center relative flex flex-col w-full md:h-3/5 text-center items-between pt-24 md:py-8 h-37r md:px-0 fold:px-0 xs:px-5 mb-6 md:mb-0`}
      >
        <BannerCaption heading={heading} subheading={subheading} />
      </Wrapper>
      {/* end banner caption */}
      <Link href="/#aboutExcerpt" passHref>
        <button className="flex text-white mx-auto mb-8 animate-bounce">
          <i className="fa fa-2x fa-angle-double-down hover:scale-125 "></i>
        </button>
      </Link>

      <Link href="/blog" passHref>
        <a
          className={`banner-carousels flex flex-col md:flex-row w-full h-auto md:h-2/5 justify-center items-end relative hover:cursor-pointer`}
        >
          {/* banner carousels */}
          {/* carousel images */}
          <Wrapper
            style={`md:absolute w-full md:w-30% h-52 my-2 md:my-0 md:h-5/6 md:left-0 md:pr-6`}
          >
            <Wrapper
              style={`w-full h-full p-6 bg-white rounded-lg shadow-2xl overflow-hidden`}
            >
              <SwiperCarousel
                items={photoGalleryUploads}
                isImg={true}
                label={`Adventure Photos`}
              />
            </Wrapper>
          </Wrapper>
          {/* end carousel images */}

          {/* blog carousel vids */}
          <Wrapper
            style={`w-full md:w-2/5 h-52 md:h-110% my-2 md:my-0 self-start p-6 bg-white md:py-0 md:px-1 rounded-lg shadow-2xl`}
          >
            <Wrapper style={`w-full h-full md:p-6 overflow-hidden`}>
              <SwiperCarousel
                isImg={false}
                items={featuredVblogGalleryUploads}
                isAds={false}
                label={`Featured VBlogs`}
              />
            </Wrapper>
          </Wrapper>
          {/* end blog carousel vids */}

          {/* ads carousel */}
          <Wrapper
            style={`md:absolute w-full md:w-30% h-52 md:h-5/6 my-2 md:my-0   md:right-0 md:pl-6`}
          >
            {/*  <BannerCarouselVid isAds={false} /> */}
            <Wrapper
              style={`w-full h-full p-6 bg-white rounded-lg shadow-2xl overflow-hidden`}
            >
              <SwiperCarousel
                isImg={false}
                items={videoGalleryUploads}
                isAds={false}
                label={`Videos`}
              />
            </Wrapper>
          </Wrapper>
          {/* end ads carousel */}
        </a>
      </Link>
      {/* end banner carousels */}
    </section>
  );
}
