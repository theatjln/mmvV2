import Layout from "../src/components/layout";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "../src/components/socialIcons";

export default function About() {
  return (
    <Layout>
      <section className="text-gray-600 body-font md:top-0 top-40 relative md:mb-0 mb-20">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* image here should have same height and width */}
          {/* <img
              className="lg:w-2/6 md:w-3/6 w-3/5 mb-10 object-cover object-center rounded-50% md:mt-0 -mt-16"
              alt="hero"
              src="https://dummyimage.com/720"
            />   */}
          <Image
            alt="profile"
            src={`https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            height={320}
            width={320}
            className="lg:w-2/6 md:w-3/6 w-3/5 mb-10 object-cover object-center rounded-50% md:mt-0 -mt-16"
          />
          <div className="mt-5 text-center lg:w-2/3 w-full bg-white md:pt-0 pt-10 rounded-lg">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Markus Markus Viajero
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center relative">
              <Link href="/contact">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
                  Contact
                </button>
              </Link>
              <div className="inline-flex ml-2 text-white bg-gray-200 border-0 py-3 px-6 focus:outline-none rounded text-lg items-center">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
