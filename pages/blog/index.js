import Layout from "../../src/components/layout";
import Link from "next/link";

const BlogCard = () => (
  <Link href="/blog/dummy">
    <div className="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
      <div className="bg-gray-100 p-6 rounded-lg">
        {/*  <img
          className="h-64 sm:h-72 md:h-52 lg:h-64 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />  */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/Wm6OrHQchcQ?autoplay=0&loop=1&playlist=Wm6OrHQchcQ&controls=1&showinfo=0&autohide=1&modestbranding=0&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className="h-56 sm:h-72 md:h-40 lg:h-60 rounded w-full object-cover object-center mb-6"
        />
        <h2 className="text-lg text-indigo-500 font-semibold title-font mb-4">
          Chichen Itza
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche. &nbsp;
          <span className="text-indigo-600 font-display"> 
            {`...Read more`}
          </span>
        </p>
      </div>
    </div>
  </Link>
);

export default function BlogPage() {
  return (
    <Layout>
      <section className="text-gray-600 body-font md:top-0 top-40 relative md:mb-0 mb-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-200">
                Blogs
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </Layout>
  );
}
