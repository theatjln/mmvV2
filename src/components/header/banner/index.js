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
  <div className={`p-4 ${div1className} h-full w-full`}>
    <div
      className={`lg:h-48 md:h-36 w-full rounded-lg overflow-hidden relative ${div2className} flex`}
    >
      <SwiperCarousel
        items={dummyImages}
        imgClassName={`w-full h-full object-cover object-center max-w-none flex justify-self-center rounded-lg max-w-none-imp max-h-none-imp`}
      />
    </div>
  </div>
);

const BannerCarouselVid = ({ div1className, div2className, ads }) => (
  <div className={`p-4 ${div1className} h-full w-full`}>
    <div
      className={`md:h-36 w-full rounded-lg overflow-hidden relative ${div2className} flex`}
    >
      <SwiperCarousel
        items={dummyVideos}
        vidClassName={`w-full h-full max-w-none flex justify-self-center rounded-lg ${ads ? `md:w-160% xl:h-106% 2xl:h-126% 3xl:h-200%` : ` md:h-126% lg:h-110% xl:h-130% 2xl:h-160% 3xl:h-200%`}`}
      />
    </div>
  </div>
);

const BannerCaption = ({heading, subheading}) => (
  <div className="flex flex-col text-center w-full mb-20 md:mt-14 mt-40">
    <h1 className="text-5xl font-medium title-font mb-4 text-indigo-200">
      {heading ? heading : `A Different Travel Experience`}
    </h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200 mb-4">
      {subheading ? subheading : `“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes`}
    </p>
  </div>
);

export default function Banner({heading, subheading}) {
  return (
    <section className="banner text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <BannerCaption heading={heading} subheading={subheading} />
        <div className="flex flex-wrap w-full justify-center items-center">

          <BannerCarouselImg
            div1className="md:w-30%"
            div2className="md:top-6"
          />

          <BannerCarouselVid
            div1className="md:w-2/5"
            /*  div2className="md:-top-12 lg:h-60 md:h-48" */
            div2className="md:-top-12 lg:h-52 md:h-36 lg:w-101%"
            ads={false}
          />

          <BannerCarouselVid
            div1className="md:w-30%"
            div2className="md:top-6 lg:h-48"
            ads={true}
          />

        </div>
      </div>
    </section>
  );
}
