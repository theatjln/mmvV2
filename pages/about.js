// modules
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Layout from "../src/components/layout";
import SocialIcons from "../src/components/socialIcons";
import Spinner from "../src/components/spinner";
import PageTitle from "../src/components/pageTitle";
import Hr from "../src/components/shapes/hr";
import RichtextRenderer from "../src/components/richtextRenderer";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      aboutpageData: await getData(client, "aboutpage"),
      audio: await getData(client, "audio"),
    },
  };
}

export default function About({
  homepageData,
  bloggerDetails,
  aboutpageData,
  audio,
}) {
  const { name, interests, profilePicture } = bloggerDetails;
  const { essay } = aboutpageData;
  const bgVideo = `https:${homepageData.videoUploadBackground.fields.file.url}`;
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;

  if (!homepageData || !aboutpageData || !bloggerDetails || !audio || !essay)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner isLoading={true} />
      </div>
    );
  /* end conditional spinner */ else
    return (
      <Layout
        bgVidSrc={homepageData.backgroundVideo}
        bloggerDetails={bloggerDetails}
        audioSrc={audioSrc}
        uploadedBgVideo={bgVideo}
      >
        <Head>
          <title>About - Markus Markus Viajero</title>
          <meta
            name="description"
            content="About Page: Blog for fun viajeros"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* blog details content wrapper */}
        <section className="lg:w-5/6 mx-auto md:mt-0 flex flex-col text-gray-600 body-font relative items-center h-full pt-10 md:pt-0 lg:px-10">
          {/* youtube vid wrapper */}
          <div className="youtube-vid-wrapper rounded-lg overflow-hidden h-40 w-40 lg:w-60 my-10 mt-16 flex justify-center">
            <Image
              alt="profile"
              src={`https:${profilePicture.fields.file.url}`}
              height={320}
              width={320}
              className="object-cover object-center rounded-full shadow-xl"
            />
          </div>
          {/* end youtube vid wrapper */}
          <PageTitle>About</PageTitle>
          {/* blog text & content wrapper */}
          <div className="flex flex-col bg-white md:rounded-lg p-8 mb-10">
            {/* left side of card */}
            <div className="flex flex-col items-center text-center px-5 mb-10 md:mb-0">
              {/* location */}
              <h2 className="font-medium title-font mt-4 text-gray-900 leading-relaxed">
                {name}
              </h2>

              <p className="font-display">
                Interest:
                <h2 className="mt-4 text-gray-900 text-lg">
                  {interests.map((interest) => interest + ", ")}
                </h2>
              </p>
              {/* end location */}

              <Hr />

              <p className="text-base">
                {/*   {title} */}{" "}
                <Link href="/contact" passHref>
                  <button className="inline-flex text-white bg-indigo-700 border-0 focus:outline-none hover:bg-indigo-700 rounded text-lg items-center mb-5 px-4 py-2 mx-6">
                    Contact
                  </button>
                </Link>
                <SocialIcons {...bloggerDetails} />
              </p>
            </div>
            {/* end left side of card */}

            {/* right side of card */}
            <div className="blog-content-wrapper mt-12 sm:pl-8 border-gray-200 flex justify-center items-center md:px-5">
              {/* <p className="leading-relaxed text-lg mb-4">
                 {aboutpageEssay}
              </p> */}
              <RichtextRenderer>{essay}</RichtextRenderer>
            </div>
            {/* end right side of the card */}
          </div>
          {/* end blog text & content wrapper */}

          {/* carousel wrapper */}
          <div className="rounded-lg w-full h-56 sm:h-64 md:h-full overflow-hidden mb-10 flex items-center justify-center">
            {/* <SwiperCarousel
              items={images}
              imgClassName={`w-full h-full object-cover object-center rounded-lg`}
            /> */}
          </div>
          {/* end carousel wrapper */}
        </section>
      </Layout>
    );
}
