import React from "react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const NewsletterWrapper = () => {
  return (
    <section className="wrapper relative w-full h-auto text-center mb-12" id="subscribe">
      <p className="text-3xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
        Want product news and updates?
      </p>
      <p className="text-xl font-normal leading-normal mt-0 mb-2 text-gray-500">
        Sign up to our newsletter to stay up to date.
      </p> 
      <NewsletterSubscribe />
    </section>
  );
};

export default NewsletterWrapper;
