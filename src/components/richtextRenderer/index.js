//modules
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  ITALIC,
  UNDERLINE,
  CODE,
} from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

import BlogCard from "../blogCard";

export default function RichtextRenderer({ children }) {
  // console.log(`children: ${JSON.stringify(children)} \n`);

  // const Bold = ({ children }) => <p className="font-bold">{children}</p>;
  // const Italic = ({ children }) => <p className="italic">{children}</p>;

  const Text = ({ children }) => (
    <p className="align-center">
      {children}
      <br />
      <br />
    </p>
  );

  const H1 = ({ children }) => (
    <h1 className="align-center">
      {children}
      <br />
      <br />
    </h1>
  );

  const H2 = ({ children }) => (
    <h2 className="align-center">
      {children}
      <br />
      <br />
    </h2>
  );

  const H3 = ({ children }) => (
    <h3 className="align-center">
      {children}
      <br />
      <br />
    </h3>
  );
  const H4 = ({ children }) => (
    <h4 className="align-center">
      {children}
      <br />
      <br />
    </h4>
  );
  const H5 = ({ children }) => (
    <h5 className="align-center">
      {children}
      <br />
      <br />
    </h5>
  );
  const H6 = ({ children }) => (
    <h6 className="align-center">
      {children}
      <br />
      <br />
    </h6>
  );
  const HR = ({ children }) => (
    <span className="align-center">
      <hr />
      <br />
    </span>
  );

  const LIST_ITEM = ({ children }) => <li className="ml-5">{children}</li>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.HR]: (node, children) => <HR>{children}</HR>,
      [BLOCKS.LIST_ITEM]: (node, children) => <LIST_ITEM>{children}</LIST_ITEM>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return <BlogCard blog={node.data.target.fields} />;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <Link href={`https://${node.data.target.fields.file.url}`} passHref>
            <div className="embed-asset relative w-60 h-40 flex my-3 hover:cursor-pointer">
              <Image
                src={`https://${node.data.target.fields.file.url}`}
                className=""
                layout="fill"
                alt="embed-asset-picture"
              />
            </div>
          </Link>
        );
      },
      [INLINES.EMBEDDED_ASSET]: (node) => {
        return (
          <Link href={`https://${node.data.target.fields.file.url}`} passHref>
            <div className="embed-asset relative w-60 h-40 flex my-3 hover:cursor-pointer">
              <Image
                src={`https://${node.data.target.fields.file.url}`}
                className=""
                layout="fill"
                alt="embed-asset-picture"
              />
            </div>
          </Link>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            className="text-indigo-800 hover:cursor-pointer hover:text-indigo-500 font-extrabold"
          >
            {children}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link href={`/blog/${node.data.target.fields.slug}`} passHref>
            <a className="text-indigo-800 hover:cursor-pointer hover:text-indigo-500 font-extrabold">
              {children}
            </a>
          </Link>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return (
          <Link href={`https:${node.data.target.fields.file.url}`} passHref>
            <a className="text-indigo-800 hover:cursor-pointer hover:text-indigo-500 font-extrabold">
              {children}
            </a>
          </Link>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        return <BlogCard blog={node.data.target.fields} />;
      },
    },
  };

  const richText = documentToReactComponents(children, options);

  return <div className="rendered-richtext">{richText}</div>;
  // return <div className=""></div>
}
