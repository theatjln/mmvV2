// modules
import Link from "next/link";
import Image from "next/image";
/* code - render contentful rich text  */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
/* end code - render contentful rich text  */

// helpers

export default function AboutExcerpt(props) {
  const { name, interests, profilePicture, excerpt } = props;

  /* code - render contentful rich text  */
  const H4 = ({ children }) => (
    <>
      <h4 className="font-bold text-xl md:text-3xl">{children}</h4>
      <br />
    </>
  );

  const P = ({ children }) => (
    <>
      <p className="text-sm md:text-base">{children}</p>
      <br />
    </>
  );

  const MYLINK = ({ children }) => (
    <a className="text-indigo-800 hover:cursor-pointer hover:font-display">
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

  const aboutpageExcerpt = documentToReactComponents(excerpt, options);
  /* end code - render contentful rich text  */
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-10 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row xl:mt-24">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
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
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed mb-4">{aboutpageExcerpt}</p>
              <Link href="/about">
                <a className="text-indigo-800 inline-flex items-center hover:font-display hover:text-xl leading-relaxed text-lg">
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
