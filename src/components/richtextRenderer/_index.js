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

// components

export default function RichtextRenderer({ children }) {
  /* code - render contentful rich text  */
  const H4 = ({ children }) => (
    <>
      <h4 className="text-xl md:text-3xl text-indigo-700">{children}</h4>
      <br />
    </>
  );

  const P = ({ children }) => (
    <>
      <p className="">{children}</p>
      <br />
    </>
  );

  const options = { 
    renderNode: {
      [BLOCKS.HEADING_4]: (children) => <H4>{children}</H4>,
      [BLOCKS.PARAGRAPH]: (children) => <P>{children}</P>,
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
    },
  };

  const text = documentToReactComponents(children, options);

  return <div>{text}</div>;
}
