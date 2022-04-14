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

  if (contentTypeId === "photoGalleryReference") {
    return response.items[0].fields.photoGalleryImages;
  }
};

const photoGalleryImages = [
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
      id: "3QRxc1ib6aW6XsIJTUXOBp",
      type: "Asset",
      createdAt: "2022-04-14T02:28:12.868Z",
      updatedAt: "2022-04-14T02:28:12.868Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "Top View Riverwater Waves",
      description: "Top View Riverwater Waves",
      file: {
        url: "//images.ctfassets.net/v3a112jrq7ei/3QRxc1ib6aW6XsIJTUXOBp/8dee906eea871089e80546c914267f24/pexels-adeline-man-11711904.jpg",
        details: { size: 5717283, image: { width: 6000, height: 4000 } },
        fileName: "pexels-adeline-man-11711904.jpg",
        contentType: "image/jpeg",
      },
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
      id: "6TddMllyIiihFOApIXdpjR",
      type: "Asset",
      createdAt: "2022-04-14T02:30:27.506Z",
      updatedAt: "2022-04-14T02:30:27.506Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "Castle View at Dawn",
      description: "Castle View at Dawn",
      file: {
        url: "//images.ctfassets.net/v3a112jrq7ei/6TddMllyIiihFOApIXdpjR/2e90883e29544555ae89f97b4a63fb01/pexels-brett-sayles-5033771.jpg",
        details: { size: 4065781, image: { width: 6045, height: 4022 } },
        fileName: "pexels-brett-sayles-5033771.jpg",
        contentType: "image/jpeg",
      },
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
      id: "71HQccMAER5UmQCnAeQotI",
      type: "Asset",
      createdAt: "2022-04-14T02:32:12.589Z",
      updatedAt: "2022-04-14T02:32:12.589Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "Drone View Sea Waves",
      description: "Drone View Sea Waves",
      file: {
        url: "//images.ctfassets.net/v3a112jrq7ei/71HQccMAER5UmQCnAeQotI/59dd134d6196d69fcf48bc36cf1f87e1/pexels-danilo-riba-10939645.jpg",
        details: { size: 5751096, image: { width: 5464, height: 3640 } },
        fileName: "pexels-danilo-riba-10939645.jpg",
        contentType: "image/jpeg",
      },
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "v3a112jrq7ei" } },
      id: "4pv3Qu1NZe4QXOYIhAYmYY",
      type: "Asset",
      createdAt: "2022-04-14T02:33:05.770Z",
      updatedAt: "2022-04-14T02:33:05.770Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "Portrait Mountain View Sea",
      description: "Portrait Mountain View Sea",
      file: {
        url: "//images.ctfassets.net/v3a112jrq7ei/4pv3Qu1NZe4QXOYIhAYmYY/839ac76923a80c17cc0e440a50ca4496/pexels-zane-6798128.jpg",
        details: { size: 1574337, image: { width: 2250, height: 4000 } },
        fileName: "pexels-zane-6798128.jpg",
        contentType: "image/jpeg",
      },
    },
  },
];
