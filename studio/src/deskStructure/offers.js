// import { FaEdit, FaEye } from 'react-icons/fa'
// import { GrDocumentText } from 'react-icons/gr'
// import S from '@sanity/desk-tool'
// import PagePreview from '../components/previews/pagePreview/PagePreview'

// export default S.listItem()
//   .title("Offer pages")
//   .child(
//     S.list()
//       .title("Offer pages")
//       .items([
//         S.listItem()
//           .title("Offer 1")
//           .child(
//             S.editor()
//               .id("offer1")
//               .schemaType("offer1")
//               .documentId("offer1")
//               .views([
//                 S.view.form().icon(FaEdit),
//                 S.view
//                   .component(() => PagePreview({ slug: '/offers/offer1'}))
//                   .icon(FaEye)
//                   .title("Preview")
//               ])
//           )
//           .icon(GrDocumentText)
//       ])
//   )
//   .icon(GrDocumentText)
