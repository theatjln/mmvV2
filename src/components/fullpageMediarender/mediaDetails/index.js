import Link from "next/link";

import Wrapper from "../../wrapper";

export default function MediaDetails({ image }) {
  return (
    <Wrapper style="media details-wrapper w-full px-5 h-auto mb-10">
      <Wrapper style="w-full h-auto px-5 pt-10 pb-5 shadow-xl rounded-lg">
        <h4 className="w-full leading-10" id="detailsContent">
          Details
        </h4>
        <p className="mt-5 flex flex-col leading-10">
          <span className="text-xs font-bold">Title:</span>
          <span>{image.fields.title}</span>
        </p>
        <p className="mt-5 flex flex-col leading-10">
          <span className="text-xs font-bold">Description:</span>
          <span>{image.fields.description}</span>
        </p>
        <p className="mt-5 flex flex-col leading-10">
          <Link href={`https:${image.fields.file.url}`} passHref>
            <a
              target="_blank"
              className="text-indigo-700 hover:text-indigo-500 focus:text-indigo-500 hover:font-display focus:font-display flex items-center"
            >
              View Actual Size
              <i className="ml-3 fa fa-long-arrow-right" />
            </a>
          </Link>
        </p>
      </Wrapper>
    </Wrapper>
  );
}
