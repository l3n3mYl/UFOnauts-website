import { FaEdit, FaEye } from 'react-icons/fa'
import { GrDocumentText, GrGallery } from 'react-icons/gr'
import { MdSettings, MdHome, MdInfoOutline, MdBusiness } from 'react-icons/md'
import S from '@sanity/desk-tool/structure-builder'

import PagePreview from '../components/previews/pagePreview/PagePreview'

export default () =>
S.list()
.title("G_W_M")
.items([
  S.listItem()
    .title("Site Settings")
    .child(
      S.editor()
        .id("siteSettings")
        .schemaType("siteSettings")
        .documentId("siteSettings")
    )
    .icon(MdSettings),
    S.listItem()
      .title("Company Info")
      .child(
        S.editor()
          .id("companyInfo")
          .schemaType("companyInfo")
          .documentId("companyInfo")
      )
    .icon(MdBusiness),
    S.listItem()
      .title("Pages")
      .child(
        S.list()
          .title("Pages")
          .items([
            S.listItem()
            .title("Home")
            .child(
              S.editor()
                .id("homePage")
                .schemaType("homePage")
                .documentId("homePage")
                .views([
                  S.view.form().icon(FaEdit),
                  S.view
                    .component(() => PagePreview({ slug: '/' }))
                    .icon(FaEye)
                    .title("Preview")
                ])
            )
            .icon(MdHome),
            S.listItem()
              .title("What We Do")
              .child(
                S.editor()
                  .id("whatWeDo")
                  .schemaType("whatWeDo")
                  .documentId("whatWeDo")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                      .component(() => PagePreview({ slug: '/' }))
                      .icon(FaEye)
                      .title("Preview")
                  ])
              )
            .icon(MdInfoOutline),
            S.listItem()
              .title("Testimonials")
              .child(
                S.editor()
                  .id("testimonials")
                  .schemaType("testimonials")
                  .documentId("testimonials")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                      .component(() => PagePreview({ slug: '/' }))
                      .icon(FaEye)
                      .title("Preview")
                  ])
              )
            .icon(GrDocumentText),
            S.listItem()
            .title("Gallery")
            .child(
              S.editor()
                .id("galleryPage")
                .schemaType("galleryPage")
                .documentId("galleryPage")
                .views([
                  S.view.form().icon(FaEdit),
                  S.view
                    .component(() => PagePreview({ slug: '/' }))
                    .icon(FaEye)
                    .title("Preview")
                ])
            )
          .icon(GrGallery),
          S.listItem()
            .title("Contact")
            .child(
              S.editor()
                .id("contactPage")
                .schemaType("contactPage")
                .documentId("contactPage")
                .views([
                  S.view.form().icon(FaEdit),
                  S.view
                    .component(() => PagePreview({ slug: '/' }))
                    .icon(FaEye)
                    .title("Preview")
                ])
            )
          .icon(GrGallery)
          ])
      )
    ])