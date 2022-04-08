import Connect from "./connect";

export async function getTestimonials() {
   let env = await Connect();
   let entries = await env.getEntries({
     content_type: "testimonial",
   });

    return entries.items;
}