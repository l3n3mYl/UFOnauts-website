export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "aims",
      title: "Aims",
      type: "aims",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
};