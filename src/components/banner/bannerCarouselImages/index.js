// modules

// components
import SwiperCarousel from "../../carousel/swiper";
import Wrapper from "../../wrapper";

// for photo carousel
const dummyImages = [
  {
    imgSrc: `https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    imgSrc: `https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
];

export default function BannerCarouselImages() {
  return (
    <Wrapper style={`p-6 rounded-lg bg-white shadow-xl h-full absolute`}>
      <SwiperCarousel
        items={dummyImages}
        imgClassName={`w-full h-full object-cover object-center max-w-none flex justify-self-center rounded-lg max-w-none-imp max-h-none-imp`}
      />
    </Wrapper>
  );
}
