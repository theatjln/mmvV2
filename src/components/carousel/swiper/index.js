//modules
import uniqid from "uniqid";
import Image from "next/image";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// End Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
// End Import Swiper styles

// import required Swiper modules
import { EffectFade, Autoplay } from "swiper";
import Overlay from "../../overlay";
// end import required Swiper modules

export default function SwiperCarousel({
  items,
  isImg,
  isAds,
  label,
  isSlug = false,
}) {
  const router = useRouter();

  const swiperSlidesImg = items.map((item) => {
    /* const imgSrc =
      router.pathname === `/blog/[slug]`
        ? `https:${item.fields.file.url}`
        : item.imgSrc;
 */
    console.log(`img item:`, item.imgSrc);
    return (
      <SwiperSlide className="absolute w-full h-full" key={uniqid()}>
        <Image
          src={item.imgSrc}
          className={`w-full h-full object-cover object-center flex justify-self-center rounded-xl`}
          layout="fill"
          alt="media-carousel"
        />
        <Overlay
          style={`absolute text-white text-xs leading-relaxed tracking-widest ml-3 mt-3`}
        >
          {label}
        </Overlay>
      </SwiperSlide>
    );
  });

  const swiperSlidesVid = items.map((item) => (
    <SwiperSlide className="w-full h-full" key={uniqid()}>
      <video
        autoPlay
        loop
        muted
        className={`absolute max-w-none flex justify-self-center ${
          !isAds
            ? ` md:w-120% xl:h-106% 2xl:h-126% 3xl:h-200%`
            : ` md:h-126% lg:h-110% xl:h-130% 2xl:h-160% 3xl:h-200%`
        }`}
      >
        <source src={item.vidSrc} type="video/mp4" />
        <p>{`Your browser doesn't support HTML5 video.`}</p>
      </video>
      <Overlay
        style={`absolute text-white text-xs leading-relaxed tracking-widest ml-3 mt-3`}
      >
        {label}
      </Overlay>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        className="absolute w-full h-full rounded-xl"
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {isImg && swiperSlidesImg}
        {!isImg && swiperSlidesVid}
      </Swiper>

      <style>{`
          *:focus, .swiper-wrapper, .swiper-slide {
            outline: 0 !important;
            outline: none !important;
          } 
          .max-w-none-imp {
            max-width: none !important;
            min-width: none !important;
          }
           .max-h-none-imp {
            max-height: none !important;
            min-height: none !important;
          }
    `}</style>
    </>
  );
}
