import SwiperCarousel from "../src/components/carousel/swiper";
import Layout from "../src/components/layout";
const dummyImages = [
  {
    imgSrc: `https://dummyimage.com/700x410/000/fff.jpg`,
  },
  {
    imgSrc: `https://dummyimage.com/700x410/5c005c/fff.jpg`,
  }, 
];

export default function temp() {
  return (
    <Layout>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-96 h-56 rounded-lg flex overflow-hidden">
          <SwiperCarousel items={dummyImages} />
        </div>
      </div>
    </Layout>
  );
}
