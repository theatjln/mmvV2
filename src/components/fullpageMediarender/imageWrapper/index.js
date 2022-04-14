import Image from "next/image"
import Link from "next/link"

import Wrapper from "../../wrapper";
import Overlay from "../../overlay";

export default function ImageWrapper({ image }) {
  return (
    <Wrapper style="image-wrapper relative hover:cursor-pointer focus:cursor-pointer h-full w-full">
      <Image
        src={`https:${image.fields.file.url}`}
        alt={image.fields.title}
        layout="fill"
      />
      <Overlay style="flex items-end">
        <div className="absolute w-full h-7 bg-black opacity-60"></div>

        <div className="caption-wrapper absolute w-full h-7 text-white text-xs text-center flex justify-between items-center">
          <p className="ml-5">{image.fields.title}</p>

          <Link href="/fullpage-images/#detailsContent" passHref>
            <a className="text-indigo-700 hover:text-indigo-500 focus:text-indigo-500 hover:font-display focus:font-display flex items-center mr-5 animate-bounce">
              <i className="fa-2x fa fa-chevron-down" />
            </a>
          </Link>
        </div>
      </Overlay>
    </Wrapper>
  );
}
