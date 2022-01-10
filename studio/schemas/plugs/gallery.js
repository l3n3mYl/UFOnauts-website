import { FaPhotoVideo } from "react-icons/fa";

export default {
  name: "gallery",
  title: "Gallery",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      preview: {
        select: {
          image: "image",
        },
        prepare({ image }) {
          return {
            media: image,
          };
        },
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      title: "title",
      name: "title",
      type: "string"
    },
  ],
  preview: {
    select: {
      description: "descripion",
    },
    prepare({ description = ""}) {
      return {
        title: "Gallery " + description ,
        media: FaPhotoVideo,
      };
    },
  },
};