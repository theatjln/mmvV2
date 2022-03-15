import Layout from "../../src/components/layout";
import Link from "next/link"

const BlogCard = () => (
  <Link href="/blog/dummy">
    <div className="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-60 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        {/*  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          SUBTITLE
        </h3> */}
        <h2 className="text-lg text-indigo-500 font-semibold title-font mb-4">
          Chichen Itza
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
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
          {/*   <p className="lg:w-1/2 w-full leading-relaxed text-indigo-200">
              {` Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.`}
            </p> */}
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
