import { groq } from 'next-sanity'

export const getHomePageDataQuery = groq`*[_type == "homePage"][0] {
  _id,
  title,
  subtitle,
  hero,
  image,
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

export const getWhatWeDoDataQuery = groq`*[_type == "whatWeDo"][0] {
  _id,
  offerings
}`

export const getTestimonialsDataQuery = groq`*[_type == "testimonials"][0] {
  _id,
  title,
  bckImage,
  description,
  testimonials
}`

export const getGalleryPageDataQuery = groq`*[_type == "galleryPage"][0] {
  _id,
  subtitle,
  photos
}`