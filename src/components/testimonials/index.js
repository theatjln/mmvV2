// modules

// components
import PageContent from "../pageContent";
import TestimonialList from "./testimonialList";

export default function Testimonials({ testimonials }) { 
  return (
    <PageContent>
      <h1 className="text-3xl font-medium title-font mb-12 text-center">
        Testimonials
      </h1>
      <TestimonialList testimonials={testimonials} />
    </PageContent>
  );
}

{
  /*  <section className="text-gray-600 body-font">
   <div className="container px-5 py-24 lg:px-20 mx-auto">
    

   </div> 
 </section> */
}
