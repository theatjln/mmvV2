// modules
import Link from "next/link";
import Image from "next/image";

// components
import RichtextRenderer from "../richTextRenderer";

// helpers

export default function AboutExcerpt(props) {
  const { name, interests, profilePicture, excerpt } = props;

  return (
    <section className="about-excerpt relative text-gray-600 body-font bg-white">
      <div className="container md:px-10 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row xl:mt-24">
            <div className="sm:w-1/3 flex flex-col items-center md:text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                {/* profilePicture.fields.file.url */}
                <Image
                  alt="profile"
                  src={`https:${profilePicture.fields.file.url}`}
                  height={200}
                  width={200}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 leading-relaxed">
                  {name}
                </h2>
                <div className="w-12 h-1 bg-indigo-700 rounded mt-2 mb-4"></div>
                <p className="font-display">
                  Interests:
                  <h2 className="mt-4 text-gray-900 text-lg">
                    {interests.map((interest) => interest + ", ")}
                  </h2>
                </p>
              </div>
            </div>
            <div className="mt-20 md:mt-4 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t  pt-4 sm:mt-0 md:text-center text-left">
              <span className="leading-relaxed mb-4">
                <RichtextRenderer>{excerpt}</RichtextRenderer>
              </span>
              <Link href="/about">
                <a className="text-indigo-800 inline-flex items-center hover:font-display hover:text-xl leading-relaxed text-base">
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
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
