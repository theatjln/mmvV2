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

const entry_h = {
  nodeType: "entry-hyperlink",
  data: {
    target: {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
        id: "3yEDCDvfzLJgYeNlM5z5nx",
        type: "Entry",
        createdAt: "2022-02-07T18:32:01.421Z",
        updatedAt: "2022-03-18T09:10:39.863Z",
        environment: {
          sys: { id: "master", type: "Link", linkType: "Environment" },
        },
        revision: 18,
        contentType: {
          sys: { type: "Link", linkType: "ContentType", id: "title" },
        },
        locale: "en-US",
      },
      fields: {
        title: "South America",
        slug: "south-america",
        categories: ["recent", "south america"],
        body: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "heading-4",
              content: [
                {
                  nodeType: "text",
                  value: "Lorem ipsum dolor sit amet consect",
                  marks: [{ type: "bold" }],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "etur adipisicing elit. Recusandae culpa quis quibusdam aliquid natus id qui, sapiente illum consequatur nostrum blanditiis illo? Nesciunt ducimus earum, deleniti veniam sed fuga atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa quis quibusdam aliquid natus id qui, sapiente illum consequatur nostrum blanditiis illo? Nesciunt ducimus earum, deleniti veniam sed fuga atque.",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse dolorem voluptatibus ea natus maxime cumque, illum modi fuga adipisci voluptas pariatur illo accusamus officiis itaque possimus molestias voluptatem! Repudiandae.\n\n",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
        author: {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "17co8ZUK51vRweNLmI1ITE",
          },
        },
        publishDate: "2022-02-08T00:00+08:00",
        videoEmbedId: "kFhky0cD1Dk",
        summary:
          " Nesciunt ducimus earum, deleniti veniam sed fuga atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. R",
        location: "South America",
        images: [
          {
            metadata: { tags: [] },
            sys: {
              space: {
                sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" },
              },
              id: "510npqe81wY3LLdWk2yVyT",
              type: "Asset",
              createdAt: "2022-02-18T20:57:31.478Z",
              updatedAt: "2022-02-18T20:57:31.478Z",
              environment: {
                sys: { id: "master", type: "Link", linkType: "Environment" },
              },
              revision: 1,
              locale: "en-US",
            },
            fields: {
              title: "north-america-pexels-pixabay-417054",
              description: "",
              file: {
                url: "//images.ctfassets.net/v3a112jrq7ei/510npqe81wY3LLdWk2yVyT/ef5052f9ec4b11461c59f24373b24877/pexels-pixabay-356966.jpg",
                details: {
                  size: 3622700,
                  image: { width: 4438, height: 2961 },
                },
                fileName: "pexels-pixabay-356966.jpg",
                contentType: "image/jpeg",
              },
            },
          },
          {
            metadata: { tags: [] },
            sys: {
              space: {
                sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" },
              },
              id: "2Td1zGXWY8GgppcJhodpBf",
              type: "Asset",
              createdAt: "2022-02-18T20:54:17.932Z",
              updatedAt: "2022-02-18T20:54:17.932Z",
              environment: {
                sys: { id: "master", type: "Link", linkType: "Environment" },
              },
              revision: 1,
              locale: "en-US",
            },
            fields: {
              title: "north-america-pexels-pixabay-417054",
              description: "",
              file: {
                url: "//images.ctfassets.net/v3a112jrq7ei/2Td1zGXWY8GgppcJhodpBf/865401c8749efe895ca9ddca036eda82/north-america-pexels-pixabay-417054.jpg",
                details: { size: 570167, image: { width: 3543, height: 1772 } },
                fileName: "north-america-pexels-pixabay-417054.jpg",
                contentType: "image/jpeg",
              },
            },
          },
          {
            metadata: { tags: [] },
            sys: {
              space: {
                sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" },
              },
              id: "1WQGshiyY51sniJyyaTrST",
              type: "Asset",
              createdAt: "2022-02-18T20:52:34.715Z",
              updatedAt: "2022-02-18T20:52:34.715Z",
              environment: {
                sys: { id: "master", type: "Link", linkType: "Environment" },
              },
              revision: 1,
              locale: "en-US",
            },
            fields: {
              title: "central-america-2-pexels-roberto-nickson-2661176",
              description: "",
              file: {
                url: "//images.ctfassets.net/v3a112jrq7ei/1WQGshiyY51sniJyyaTrST/8013cb2b18865bcd4c593a296e211bb1/central-america-2-pexels-roberto-nickson-2661176.jpg",
                details: {
                  size: 1113640,
                  image: { width: 5472, height: 3648 },
                },
                fileName:
                  "central-america-2-pexels-roberto-nickson-2661176.jpg",
                contentType: "image/jpeg",
              },
            },
          },
        ],
      },
    },
  },
  content: [
    { nodeType: "text", value: "south america link", marks: [], data: {} },
  ],
};

const asset_h = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
    id: "6OWimZnG8LXVgIdIsA9t6g",
    type: "Asset",
    createdAt: "2022-04-13T06:27:16.320Z",
    updatedAt: "2022-04-13T06:27:16.320Z",
    environment: {
      sys: { id: "master", type: "Link", linkType: "Environment" },
    },
    revision: 1,
    locale: "en-US",
  },
  fields: {
    title: "pexels-adeline-man-11711904",
    description: "",
    file: {
      url: "//images.ctfassets.net/v3a112jrq7ei/6OWimZnG8LXVgIdIsA9t6g/206efcbda787ed8f804fdfaf8a3b168d/pexels-adeline-man-11711904.jpg",
      details: { size: 5717283, image: { width: 6000, height: 4000 } },
      fileName: "pexels-adeline-man-11711904.jpg",
      contentType: "image/jpeg",
    },
  },
};
