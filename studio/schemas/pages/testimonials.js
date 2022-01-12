export default {
  name: "testimonials",
  title: "Testimonials",
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
      name: 'bckImage',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: "gallery" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
      };
    },
  },
};