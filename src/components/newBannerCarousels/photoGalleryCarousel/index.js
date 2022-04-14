// modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// components
import Wrapper from "../../wrapper";
import Overlay from "../../overlay";

export default function PhotoGalleryCarousel({ photoGalleryImages }) {
  const [isHovered, setIsHovered] = useState(false);
  function mouseEnteredHandler() {
    console.log(`mouse entered`);
    setIsHovered(true);
  }
  function mouseLeftHandler() {
    console.log(`mouse left`);
    setIsHovered(false);
  }
  return (
    <Wrapper style="photoGalleryCarousel-wrapper w-full md:w-30% fold:h-40 xs:h-52 sm:h-72 md:h-48 xl:h-72 2xl:h-96 rounded-lg bg-white p-5 shadow-xl my-5">
      <Swiper
        className="w-full h-full rounded-lg"
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        {photoGalleryImages.map((image) => (
          <SwiperSlide key={image.sys.id}>
            <Link href="/fullpage-images" passHref>
              <a
                className="hover:cursor-pointer focus:cursor-pointer h-full w-full"
                target="_blank"
                onMouseEnter={mouseEnteredHandler}
                onMouseLeave={mouseLeftHandler}
              >
                <Image
                  src={`https:${image.fields.file.url}`}
                  alt={image.fields.title}
                  layout="fill"
                />
                <Overlay style="flex items-end">
                  <div className="absolute w-full h-7 bg-black opacity-60"></div>
                  <div className="absolute w-full h-7 text-white text-xs text-center flex items-center justify-center">
                    {image.fields.title}
                  </div>
                  {isHovered && (
                    <div className="absolute w-full h-full bg-black flex justify-center items-center opacity-60"></div>
                  )}
                  {isHovered && (
                    <div className="absolute w-full h-full flex justify-center items-center text-white">
                      View Gallery
                    </div>
                  )}
                </Overlay>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
