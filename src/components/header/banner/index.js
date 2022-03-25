// modules
import Link from "next/link";

// components
import SwiperCarousel from "../../carousel/swiper";
// for photo carousel
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

const BannerCarouselImg = ({ div1className, div2className }) => (
  <Link href="/blog" passHref>
    <div className={`hover:cursor-pointer p-4 ${div1className} h-full w-full`}>
      <SwiperCarousel
        items={dummyImages}
        imgClassName={`w-full h-full object-cover object-center max-w-none flex justify-self-center rounded-lg max-w-none-imp max-h-none-imp`}
      />
    </div>
  </Link>
);

const BannerCarouselVid = ({ div1className, div2className, ads }) => (
  <Link href="/blog" passHref>
    <div className={`hover:cursor-pointer p-4 ${div1className} h-full w-full`}>
      <SwiperCarousel
        items={dummyVideos}
        vidClassName={`w-full h-full max-w-none flex justify-self-center rounded-lg ${
          !ads
            ? `md:w-120% xl:h-106% 2xl:h-126% 3xl:h-200%`
            : ` md:h-126% lg:h-110% xl:h-130% 2xl:h-160% 3xl:h-200%`
        }`}
      />
    </div>
  </Link>
);

const BannerCaption = ({ heading, subheading }) => (
  <div className="banner-caption flex flex-col w-full justify-center items-center relative p-8 md:text-center md:mb-14 xl:mt-14">
    {/* heading */}
    <h1 className="text-5xl font-extrabold title-font  leading-relaxed mt-20 lg:mt-10 xl:mt-0 mb-8 md:mb-0 text-white">
      {heading ? heading : `A Different Travel Experience`}
    </h1>
    {/* end heading */}

    {/* subheading */}
    <p className="mx-auto tracking-widest text-xs leading-relaxed text-white">
      {subheading
        ? subheading
        : `“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes`}
    </p>
    {/* end subheading */}
  </div>
);

export default function Banner({ heading, subheading }) {
  return (
    <section className="banner h-150% md:w-screen md:h-screen justify-center items-center md:p-20 md:mb-14 flex flex-col">
      <BannerCaption heading={heading} subheading={subheading} />

      {/* banner carousels */}
      <div className="banner-carousels flex flex-wrap w-full justify-center items-center">
        <BannerCarouselImg
          div1className=" md:w-30%" /* div2className="md:top-6" */
        />

        <BannerCarouselVid
          div1className=" md:w-2/5 md:-mt-24 mt-0"
          /*  div2className="md:-top-12 lg:h-52 md:h-36 lg:w-101%" */
          ads={0}
        />

        <BannerCarouselVid
          div1className=" md:w-30%"
          /*  div2className="md:top-6 lg:h-48"  */
          ads={1}
        />
      </div>
      {/* end banner carousels */}
    </section>
  );
}
