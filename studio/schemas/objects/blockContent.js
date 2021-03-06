import React from 'react'

import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
} from "react-icons/fa"

const displayFontRender = (props) => {
  return <span style={{ fontSize: "46px", fontWeight: "bold" }}>
      {props.children}
    </span>
}
const baseLargeFontRender = (props) => {
  return <span style={{ fontSize: "20px" }}>
    {props.children}
  </span>
}
const baseMediumFontRender = (props) => {
  return <span style={{ fontSize: "18px" }}>
    {props.children}
  </span>
}
const baseSmallFontRender = (props) => {
  return <span style={{ fontSize: "14px" }}>
    {props.children}
  </span>
}

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        {
          title: "Display",
          value: "display",
          blockEditor: { render: displayFontRender },
        },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        {
          title: "Large",
          value: "baseLarge",
          blockEditor: { render: baseLargeFontRender },
        },
        {
          title: "Medium",
          value: "baseMedium",
          blockEditor: { render: baseMediumFontRender }
        },
        {
          title: "Small",
          value: "small",
          blockEditor: { render: baseSmallFontRender }
        }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong"},
          { title: "Emphasis", value: "em" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Button",
            name: "button",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkSquareAlt
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"]
                  })
              },
              {
                title: "Open in new tab",
                name: "balnk",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean"
              }
            ]
          },
          {
            title: "External Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkAlt
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"]
                  })
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "figure"
    },
    {
      type: "grid"
    },
    {
      type: "video"
    },
    {
      type: "itemGallery"
    }
  ]
}