// modules
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../../src/helpers/client";

// components
import Layout from "../../src/components/layout";
import BlogList from "../../src/components/blogList";
import Spinner from "../../src/components/spinner";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      blogs: await getData(client, "title"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      audio: await getData(client, "audio"),
    },
  };
}

export default function BlogPage({
  homepageData,
  blogs,
  bloggerDetails,
  audio,
}) {
  const audioSrc = `https:${audio.fields.src.fields.file.url}`; 

  /* conditional spinner */
   if (!homepageData || !blogs || !bloggerDetails || !audio)
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
           <title>Vblog - Markus Markus Viajero</title>
           <meta
             name="description"
             content="Blog Page: Blog for fun viajeros"
           />
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <section className="text-gray-600 body-font md:top-0 top-40 relative md:mb-0 mb-20">
           <div className="text-start w-full absolute left-4 top-0 md:top-40">
             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-200">
               Vlog
             </h1>
             <div className="h-1 w-20 bg-indigo-500 rounded"></div>
           </div>
           <div className="container px-5 py-24 max-w-none">
             {/* <div className="flex flex-wrap w-full mb-10">
               <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-200">
                   VBlog
                 </h1>
                 <div className="h-1 w-20 bg-indigo-500 rounded"></div>
               </div>
             </div> */}
             <div className="flex flex-col items-center w-full">
               <BlogList blogs={blogs} />
             </div>
           </div>
         </section>
       </Layout>
     );
}
