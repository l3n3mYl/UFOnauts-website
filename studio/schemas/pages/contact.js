export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    },
    {
      name: "phone",
      title: "Phone",
      type: "string"
    },
    {
      name: "location",
      title: "Location",
      description: "Use google maps to redirect the end-user to your wanted location",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string"
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string"
    },
    {
      name: 'mainImage',
      title: 'Background Image',
      type: 'mainImage'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Page"
      }
    }
  }
}