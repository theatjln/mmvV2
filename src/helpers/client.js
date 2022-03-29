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
  videoUploadBackground: {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
      id: "57aXrEosxMjjFPR6hscmyb",
      type: "Asset",
      createdAt: "2022-03-26T04:15:45.323Z",
      updatedAt: "2022-03-26T04:15:45.323Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "header-vid-trimmed",
      description: "Video Background",
      file: {
        url: "//videos.ctfassets.net/v3a112jrq7ei/57aXrEosxMjjFPR6hscmyb/e4cb477c3e6331ea502b10418d954a92/header-vid-trimmed.mp4",
        details: { size: 15037991 },
        fileName: "header-vid-trimmed.mp4",
        contentType: "video/mp4",
      },
    },
  },
};
