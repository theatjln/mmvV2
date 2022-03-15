import React from "react";

const BannerCarousel = ({ div1className, div2className }) => (
  <div className={`p-4 md:w-1/3 ${div1className}`}>
    <div
      className={`lg:h-48 md:h-36 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative ${div2className}`}
    >
      <img
        className={`w-full h-full object-cover object-center`}
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
    </div>
  </div>
);

const BannerCaption = () => (
  <div className="flex flex-col text-center w-full mb-20 md:mt-0 mt-40">
    {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
      ROOF PARTY POLAROID
    </h2> */}
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
          <BannerCarousel div1className="md:w-30%" div2className="md:top-6" />
          <BannerCarousel div1className="md:w-2/5" div2className="md:-top-12 lg:h-60 md:h-48" />
          <BannerCarousel div1className="md:w-30%" div2className="md:top-6" />
        </div>
      </div>
    </section>
  );
}
