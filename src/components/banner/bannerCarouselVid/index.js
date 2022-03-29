// modules

// components
import SwiperCarousel from "../../carousel/swiper";
import Wrapper from "../../wrapper";

const dummyVideos = [
  { 
    vidSrc: `https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761`,
  },
  {
    vidSrc: `https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761`,
  },
];

export default function BannerCarouselVid({ div1className, ads }) {
  return (
    <Wrapper style={`p-6 rounded-xl bg-white shadow-lg h-full absolute`}>
      <SwiperCarousel
        items={dummyVideos}
        vidClassName={`rounded-lg w-full h-full max-w-none flex justify-self-center ${
          !ads
            ? ` md:w-120% xl:h-106% 2xl:h-126% 3xl:h-200%`
            : ` md:h-126% lg:h-110% xl:h-130% 2xl:h-160% 3xl:h-200%`
        }`}
      />
    </Wrapper>
  );
}
