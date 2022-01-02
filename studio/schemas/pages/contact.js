export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Contact"
      }
    }
  }
}