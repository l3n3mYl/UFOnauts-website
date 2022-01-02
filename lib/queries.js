import { groq } from 'next-sanity'

export const getHomePageDataQuery = groq`*[_type == "homePage"][0] {
  _id,
  title,
  subtitle,
  hero,
  body,
  openGraph
}`

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  openGraph
}`

export const getHomeDataQuery = groq`{
  "home": ${getHomePageDataQuery},
  "siteSettings": ${getSiteSettingsQuery}
}`