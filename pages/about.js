// modules
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { createClient } from "contentful";
/* code - render contentful rich text  */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
/* end code - render contentful rich text  */

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Layout from "../src/components/layout";
import SocialIcons from "../src/components/socialIcons";
import Spinner from "../src/components/spinner";
import PageTitle from "../src/components/pageTitle";

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

  /* code - render contentful rich text  */
  const H4 = ({ children }) => (
    <>
      <h4 className="font-bold text-3xl">{children}</h4>
      <br />
    </>
  );

  const P = ({ children }) => (
    <>
      <p className="text-base">{children}</p>
      <br />
    </>
  );

  const MYLINK = ({ children }) => (
    <a className="hover:cursor-pointer hover:font-display">{children}</a>
  );

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
      [INLINES.HYPERLINK]: (node, children) => <MYLINK>{children}</MYLINK>,
    },
  };

  const aboutpageEssay = documentToReactComponents(essay, options);
  /* end code - render contentful rich text  */
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;

  /* conditional spinner */
  if (
    !homepageData ||
    !aboutpageData ||
    !bloggerDetails ||
    !audio ||
    !aboutpageEssay
  )
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
        <section className="lg:w-4/6 md:mt-0 flex flex-col text-gray-600 body-font relative items-center h-full w-screen p-10">
          <PageTitle>About</PageTitle>

          {/* youtube vid wrapper */}
          <div className="youtube-vid-wrapper rounded-lg overflow-hidden w-full my-10 mt-16 flex justify-center">
            <Image
              alt="profile"
              src={`https:${profilePicture.fields.file.url}`}
              height={320}
              width={320}
              className="object-cover object-center rounded-50% h-full w-full"
            />
          </div>
          {/* end youtube vid wrapper */}

          {/* blog text & content wrapper */}
          <div className="flex flex-col sm:flex-row bg-white  rounded-lg p-8 mb-10">
            {/* left side of card */}
            <div className="flex flex-col items-center text-center sm:w-1/3 px-5 mb-10 md:mb-0">
              {/* location */}
              <h2 className="font-medium title-font mt-4 text-gray-900 leading-relaxed">
                {name}
              </h2>
              {/* aesthetics hr */}
              <div className="w-12 h-1 bg-indigo-700 rounded my-5"></div>
              {/* end aesthetics hr */}
              <p className="font-display">
                Interest:
                <h2 className="mt-4 text-gray-900 text-lg">
                  {interests.map((interest) => interest + ", ")}
                </h2>
              </p>
              {/* end location */}
              {/* aesthetics hr */}
              <div className="w-12 h-1 bg-indigo-700 rounded my-5"></div>
              {/* end aesthetics hr */}
              {/* blog title */}
              <p className="text-base">
                {/*   {title} */}{" "}
                <Link href="/contact" passHref>
                  <button className="inline-flex text-white bg-indigo-700 border-0 focus:outline-none hover:bg-indigo-700 rounded text-lg items-center mb-5 px-4 py-2">
                    Contact
                  </button>
                </Link>
                <SocialIcons {...bloggerDetails} />
              </p>
              {/* end blog title */}
            </div>
            {/* end left side of card */}

            {/* right side of card */}
            <div className="blog-content-wrapper sm:w-2/3 sm:pl-8   border-gray-200 text-center flex justify-center items-center px-5">
              <p className="leading-relaxed text-lg mb-4">
                {/*   {blogDetailsBody} */} {aboutpageEssay}
              </p>
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
