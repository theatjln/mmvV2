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
    <a className="text-indigo-400 hover:cursor-pointer hover:font-display">
      {children}
    </a>
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
    else
  /* end conditional spinner */ 
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
        <section className="text-gray-600 body-font md:-top-12 top-24 relative md:mb-0 mb-20">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            {/* image here should have same height and width */}
            <Image
              alt="profile"
              /*  src={`https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} */
              src={`https:${profilePicture.fields.file.url}`}
              height={320}
              width={320}
              className="lg:w-2/6 md:w-3/6 w-3/5 mb-10 object-cover object-center rounded-50% md:mt-0 -mt-16"
            />
            <div className="about-card mt-5 text-center lg:w-2/3 w-full bg-white md:pt-0 pt-10 rounded-lg md:px-10">
              <h1 className="title-font sm:text-3xl text-3xl mt-8 mb-8 font-medium text-gray-900 px-10 md:px-0">
                {name}
              </h1>
              <p className="text-md font-display leading-relaxed px-10 md:px-0">
                Interests:
                <p className="text-lg font-bold mt-3">
                  {interests.map((interest) => interest + ", ")}
                </p>
              </p>
              <hr className="my-5" />
              <p className="mb-8 leading-relaxed">{aboutpageEssay}</p>
              <div className="flex justify-center relative">
                <Link href="/contact" passHref>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
                    Contact
                  </button>
                </Link>
                <div className="inline-flex ml-2 text-white bg-gray-200 border-0 py-3 px-6 focus:outline-none rounded text-lg items-center">
                  <SocialIcons {...bloggerDetails} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}
