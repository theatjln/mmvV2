import Connect from "../../src/helpers/contentful-client";

export default async function handler(req, res) {
  let env = await Connect();

  if (req.method === "POST") {
    console.log(`POST: ${JSON.stringify(req.body)}`);

    const { message, name, email, work } = req.body;
    const messageField = { message: { "en-US": message } };
    const usernameField = { username: { "en-US": name } };
    const emailField = { email: { "en-US": email } };
    const workField = { work: { "en-US": work } };
    const willDisplayField = { willDisplay: { "en-US": false } };
    const createdAtField = {
      createdAt: { "en-US": new Date() },
    };

    const newTestimonialEntry = await env
      .createEntry("testimonial", {
        fields: {
          ...messageField,
          ...usernameField,
          ...emailField,
          ...workField,
          ...willDisplayField,
          ...createdAtField,
        },
      })
      .then((entry) => entry.publish())
      .catch(console.error);

    res.status(201).json({
      message: "Testimonial sent!",
    });
  }
}
