// modules
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../../src/helpers/client";

// components
import Layout from "../../src/components/layout";
import SwiperCarousel from "../../src/components/carousel/swiper";
import Spinner from "../../src/components/spinner";
import RichtextRenderer from "../../src/components/richTextRenderer";
import Hr from "../../src/components/shapes/hr";
import Wrapper from "../../src/components/wrapper";

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
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;
  const bgVideo = `https:${homepageData.videoUploadBackground.fields.file.url}`;
  const blogImages = images.map((data) => {
    return { imgSrc: `https:${data.fields.file.url}` };
  });

  /* conditional spinner */
  if (!homepageData || !blog || !bloggerDetails || !audio || !body)
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
          <title>{title} - Markus Markus Viajero</title>
          <meta
            name="description"
            content={`Blog Details Page: ${title} Blog for fun viajeros`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* blog details content wrapper */}
        <section className="lg:w-4/6 mx-auto md:mt-0 flex flex-col text-gray-600 body-font relative items-center h-full p-5 md:p-10">
          {/* youtube vid wrapper */}
          <div className="youtube-vid-wrapper rounded-lg lg:h-372px md:h-410px sm:h-337px h-250px overflow-hidden w-full my-10 mt-16">
            {/* youtube vid */}
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
            {/* end youtube vid */}
          </div>
          {/* end youtube vid wrapper */}

          {/* blog text & content wrapper */}
          <div className="flex flex-col sm:flex-row w-full bg-white rounded-lg md:p-8 mb-10">
            {/* left side of card */}
            <div className="flex flex-col text-start md:text-center px-5 mb-5 md:mb-0 md:w-1/3">
              {/* location */}
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                {location}
              </h2>
              {/* end location */}

              {/* aesthetics hr */}
              <Hr />
              {/* end aesthetics hr */}

              {/* blog title */}
              <p className="text-base">{title}</p>
              {/* emd blog title */}
            </div>
            {/* end left side of card */}

            {/* right side of card */}
            <div className="blog-content-wrapper border-gray-200 flex justify-center items-center md:px-5 px-4 md:w-2/3">
              {/*   <p className="leading-relaxed text-lg mb-4">{blogDetailsBody}</p> */}
              <RichtextRenderer>{body}</RichtextRenderer>
            </div>
            {/* end right side of the card */}
          </div>
          {/* end blog text & content wrapper */}

          {/* carousel wrapper */}
          {/* <Wrapper style="rounded-lg w-full h-56 sm:h-64 md:h-full overflow-hidden mb-10 flex items-center justify-center"> */}
          <Wrapper style="flex w-full h-56 sm:h-64 md:h-96">
            <SwiperCarousel
              items={blogImages}
              isImg={true}
              label={``}
              isSlug={true}
            />
          </Wrapper>
        </section>
        {/* blog details content wrapper */}
      </Layout>
    );
}
