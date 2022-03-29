// components
import Heading from "./bannerHeading";
import Subheading from "./bannerSubheading";

export default function BannerCaption({ heading, subheading }) {
  return (
    <>
      <Heading>{heading ? heading : `A Different Travel Experience`}</Heading>
      <Subheading>
        {subheading
          ? subheading
          : `“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes`}
      </Subheading>
    </>
  );
}
