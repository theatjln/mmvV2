import TestimonialItem from "../testimonialItem";

export default function TestimonialList({ testimonials }) {
  return (
    <div className="flex flex-wrap -m-4">
      {testimonials.map((testimonial) => (
        <TestimonialItem testimonial={testimonial} key={testimonial.sys.id} />
      ))}
    </div>
  );
}
  