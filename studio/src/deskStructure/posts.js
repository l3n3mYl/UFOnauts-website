import S from '@sanity/desk-tool/structure-builder'

import SocialPreview from "part:social-preview/component"
import config from '../../config'
import {
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon
} from "react-icons/go"
import { FaEdit, FaEye } from "react-icons/fa"
import { GiMoebiusTriagle as BlogIcon } from "react-icons/gi"
import PostPreview from "../components/previews/postPreview/PostPreview"
import { toPlainText } from "part:social-preview/utils"

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon
}

export default S.listItem()
  .title("Post")
  .icon(BlogIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published posts")
          .schemaType("post")
          .icon(BlogIcon)
          .child(
            S.documentList("post")
              .title("Published Posts")
              .menuItems(S.documentTypeList("post").getMenuItems())
              .filter(
                '_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
              )
              .child((documentId) => 
                S.document()
                  .documentId(documentId)
                  .schemaType("post")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                      .component(PostPreview)
                      .icon(FaEye)
                      .title("Web Preview"),
                    S.view
                      .component(
                        SocialPreview({
                          preparationFunction: (
                            {
                              title,
                              excerpt,
                              openGraph,
                              mainImage,
                              slug
                            }
                          ) => {
                            return {
                              title: openGraph?.title || title || 'Untitled',
                              description: excerpt || toPlainText(openGraph?.description || []),
                              siteUrl: `${config.siteUrl}/blog/${slug.current}`,
                              ogImage: openGraph?.image || mainImage
                            }
                          }
                        })
                      )
                      .title("Social & SEO")
                  ])
              )
          ),
        S.documentTypeListItem("post").title("All posts").icon(AllIcon),
        S.listItem()
          .title("Post by category")
          .child(
            S.documentTypeList("category")
              .title("Post by category")
              .child((catId) => 
                S.documentList()
                  .schemaType("post")
                  .title("post")
                  .filter('_type == "post" && $catId in categories[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("category").title("Categories")
      ])
  )