// modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import Image from "next/image";

//  components
import Overlay from "../overlay";
import Wrapper from "../wrapper";
import MediaDetails from "./mediaDetails";

// styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageWrapper from "./imageWrapper";

export default function FullpageMediarender({ photoGalleryImages }) {
  return (
    <div className="w-screen bg-black h-auto">
      <Swiper
        className="mySwiper w-full h-auto bg-white"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {photoGalleryImages.map((image) => (
          <SwiperSlide key={image.sys.id}>
            <Wrapper style={`w-full h-auto flex flex-col justify-center`}>
              <Wrapper style="w-full h-screen lg:px-20 lg:py-5 bg-black">
                <ImageWrapper image={image} />
              </Wrapper>
              <MediaDetails image={image} />
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-prev, .swiper-button-next {
            color: #22d3ee;
            top: 30%;
            --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #ffff), var(--tw-ring-shadow, 0 0 #ffff), var(--tw-shadow);	
        }

        .swiper-button-prev{
            left: 10%;
        }
        .swiper-button-next{
            right: 10%;
        }
      `}</style>
    </div>
  );
}
