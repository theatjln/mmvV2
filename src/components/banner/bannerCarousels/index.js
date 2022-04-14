// modules
import Link from "next/link";

// components
import Wrapper from "../../wrapper";
import SwiperCarousel from "../../carousel/swiper";

export default function BannerCarousels({
  photoGalleryUploads,
  featuredVblogGalleryUploads,
  videoGalleryUploads,
}) {
  return (
    <Link href="/blog" passHref>
      <a
        className={`banner-carousels flex flex-col md:flex-row w-full h-auto md:h-2/5 justify-center items-end relative hover:cursor-pointer`}
      >
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
  );
}
