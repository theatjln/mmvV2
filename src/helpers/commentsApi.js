import { createClient as createClientApi } from "contentful-management";

/* export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
}; */

/*   const createComment = (
    username = null,
    email = null,
    body,
    blogPostSlug,
    parentId = null,
  ) => {
    const clientCM = createClientApi({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });
    clientCM.getSpace(process.env.CONTENTFUL_SPACE_ID);
  };
 */