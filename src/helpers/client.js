export const getClient = () => {
  return {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  };
};
 
export const getData = async (client, contentTypeId) => {
  const response = await client.getEntries({
    content_type: contentTypeId,
  });

  if (
    contentTypeId === "homepage" ||
    contentTypeId === "bloggerDetails" ||
    contentTypeId === "aboutpage"
  ) {
    return response.items[0].fields;
  }

  if (contentTypeId === "title") {
    return response.items;
  }

  if (contentTypeId === "audio") {
    return response.items[0];
  }
};

const temp = {
  nodeType: "hyperlink",
  content: [{ nodeType: "text", value: "subscribe ", marks: [], data: {} }],
  data: { uri: "/#cta" },
};