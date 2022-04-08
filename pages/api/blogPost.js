// sample code

import Connect from "../../src/helpers/contentful-client";

export default async function handler(req, res) {
  let env = await Connect();
  // console.log(`env: ${env}`); 

  // get blog posts from contentful
  if (req.method === "GET") {
    let entries = await env.getEntries({
      content_type: "title",
    });

    res.status(200).json({
      message: "blog post fetching success!",
      blogPosts: entries.items,
    });
  }
}
