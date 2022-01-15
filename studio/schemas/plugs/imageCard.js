import { FaPhotoVideo } from "react-icons/fa";

export default {
  name: "imageCard",
  title: "Image Card",
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
  ],
  preview: {
    select: {
      description: "descripion",
    },
    prepare({ description = ""}) {
      return {
        title: "Image Card" + description ,
        media: FaPhotoVideo,
      };
    },
  },
};