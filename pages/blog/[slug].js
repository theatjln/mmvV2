// modules
import Head from "next/head";
import { createClient } from "contentful";
/* code - render contentful rich text  */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
/* end code - render contentful rich text  */

// helpers
import { getClient, getData } from "../../src/helpers/client";

// components
import Layout from "../../src/components/layout";
import SwiperCarousel from "../../src/components/carousel/swiper";
import Spinner from "../../src/components/spinner";

const dummyImages = [
  {
    imgSrc: `https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    imgSrc: `https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
];

export const getStaticPaths = async () => {
  const client = createClient(getClient());
  const blogs = await getData(client, "title");

  const paths = blogs.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const client = createClient(getClient());

  const blog = await client.getEntries({ 
    content_type: "title",
    "fields.slug": params.slug, 
  });

  return {
    props: {
      blog: blog.items[0],
      homepageData: await getData(client, "homepage"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      audio: await getData(client, "audio"),
    },
    revalidate: 1,
  };
}

export default function BlogDetailsPage({
  homepageData,
  bloggerDetails,
  blog,
  audio,
}) {
  const { title, videoEmbedId, location, body, images } = blog.fields;

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

  const blogDetailsBody = documentToReactComponents(body, options);
  /* end code - render contentful rich text  */
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;

  /* conditional spinner */
    if (
      !homepageData ||
      !blog ||
      !bloggerDetails ||
      !audio ||
      !blogDetailsBody
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
            <title>{title} - Markus Markus Viajero</title>
            <meta
              name="description"
              content={`Blog Details Page: ${title} Blog for fun viajeros`}
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex flex-col ">
              <div className="lg:w-4/6 mx-auto mt-28 md:mt-0 flex flex-col items-center">
                <div className="rounded-lg lg:h-372px md:h-410px sm:h-337px h-250px overflow-hidden w-full">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoEmbedId}?autoplay=0&loop=1&playlist=${videoEmbedId}&controls=1&showinfo=0&autohide=1&modestbranding=0&mute=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <div className="flex flex-col sm:flex-row lg:mt-2 mt-8 bg-white md:pt-0 pt-8 rounded-lg">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    {/* circle profile dummy pic svg */}
                    {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                   <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div> */}
                    {/* end circle profile dummy pic svg */}
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                        {location}
                      </h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base">{title}</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4">
                      {blogDetailsBody}
                    </p>
                    {/* <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
                  </div>
                </div>
                <div className="rounded-lg w-28rem h-60 overflow-hidden mt-10 md:self-end">
                  <SwiperCarousel
                    items={images}
                    imgClassName={`w-full h-full object-cover object-center`}
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
}
