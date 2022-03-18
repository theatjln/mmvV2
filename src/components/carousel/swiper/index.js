//modules
import uniqid from "uniqid";
import Image from "next/image";
import {useRouter} from "next/router";
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
// end import required Swiper modules

export default function SwiperCarousel({ items, imgClassName, vidClassName }) {
  const router = useRouter()

  const swiperSlidesImg = items.map((item) => { 

    const imgSrc = router.pathname === `/blog/[slug]` ? `https:${item.fields.file.url}` : item.imgSrc;

    return (
      <SwiperSlide className="flex" key={uniqid()}>
        <Image
          src={imgSrc}
          className={imgClassName}
          height={400}
          width={720}
          alt="media-carousel"
        />
      </SwiperSlide>
    );
  });

  const swiperSlidesVid = items.map((item) => (
    <SwiperSlide className="flex" key={uniqid()}>
      <div className="relative h-full w-full flex">
        <video autoPlay loop muted className={vidClassName}>
          <source src={item.vidSrc} type="video/mp4" />
          <p>{`Your browser doesn't support HTML5 video.`}</p>
        </video>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {imgClassName && swiperSlidesImg}
        {vidClassName && swiperSlidesVid}
      </Swiper>
      <style>{`
          *:focus, .swiper-wrapper, .swiper-slide {
            outline: 0 !important;
            outline: none !important;
          }
    `}</style>
    </>
  );
}
