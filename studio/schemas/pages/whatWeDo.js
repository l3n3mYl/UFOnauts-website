export default {
  name: "whatWeDo",
  title: "What We Do",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [{ type: "gallery" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "What We do",
      };
    },
  },
};