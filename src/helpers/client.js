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

  if (contentTypeId === "title" || contentTypeId === "testimonial") {
    return response.items;
  }

  if (contentTypeId === "audio") {
    return response.items[0];
  }
};


const temp = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
    id: "2a90fETdtMwzY6aKMe2VM5",
    type: "Entry",
    createdAt: "2022-04-06T21:05:17.267Z",
    updatedAt: "2022-04-06T21:05:17.267Z",
    environment: {
      sys: { id: "master", type: "Link", linkType: "Environment" },
    },
    revision: 1,
    contentType: {
      sys: { type: "Link", linkType: "ContentType", id: "testimonial" },
    },
    locale: "en-US",
  },
  fields: {
    body: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    id: "343",
    user: {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
        id: "6cBZph5lU46qLOBERZIiph",
        type: "Entry",
        createdAt: "2022-04-05T05:30:02.079Z",
        updatedAt: "2022-04-06T20:30:34.835Z",
        environment: {
          sys: { id: "master", type: "Link", linkType: "Environment" },
        },
        revision: 3,
        contentType: {
          sys: { type: "Link", linkType: "ContentType", id: "users" },
        },
        locale: "en-US",
      },
      fields: {
        username: "Anonymous",
        email: "anonymous@email.com",
        work: "ghost writer",
      },
    },
    createdAt: "2022-04-07T00:00+08:00",
  },
};
