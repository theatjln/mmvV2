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

const BannerCarousel = ({ div1className, div2className }) => (
  <div className={`p-4 ${div1className}`}>
    <div
      className={`lg:h-48 md:h-36 w-full rounded-lg overflow-hidden relative ${div2className}`}
    >
      <img
        className={`w-full h-full object-cover object-center`}
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
    </div>
  </div>
);

const BannerCarouselImg = ({ div1className, div2className }) => (
  <div className={`p-4 ${div1className} h-full w-full`}>
    <div
      className={`lg:h-48 md:h-36 w-full rounded-lg overflow-hidden relative ${div2className} flex`}
    >
      <SwiperCarousel
        items={dummyImages}
        imgClassName={`w-full h-full object-cover object-center`}
      />
    </div>
  </div>
);

const BannerCarouselVid = ({ div1className, div2className }) => (
  <div className={`p-4 ${div1className} h-full w-full`}>
    <div
      className={`lg:h-48 md:h-36 w-full rounded-lg overflow-hidden relative ${div2className} flex`}
    >
      <SwiperCarousel
        items={dummyVideos}
        vidClassName="w-full h-full max-w-none md:w-30rem"
      />
    </div>
  </div>
);

const BannerCaption = () => (
  <div className="flex flex-col text-center w-full mb-20 md:mt-0 mt-40">
    <h1 className="text-5xl font-medium title-font mb-4 mt-4 text-indigo-200">
      A Different Travel Experience
    </h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200">
      {`“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes`}
    </p>
  </div>
);

export default function Banner() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <BannerCaption />
        <div className="flex flex-wrap md:-m-4">
          <BannerCarouselImg
            div1className="md:w-30%"
            div2className="md:top-6"
          />

          <BannerCarouselVid
            div1className="md:w-2/5"
            div2className="md:-top-12 lg:h-60 md:h-48"
          />
          <BannerCarouselVid
            div1className="md:w-30%"
            div2className="md:top-6"
          />
        </div>
      </div>
    </section>
  );
}
