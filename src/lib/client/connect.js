import { createClient } from "contentful-management";

export default async function Connect() {
  let client = await createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
  });
  let space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  return await space.getEnvironment("master");
}
