import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'

import {
  getHomeDataQuery
} from './queries'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: 'f0ov75tq', //!IMPORTANt
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-01-02',
  ignoreBrowserTokenWarning: true
}

export const imageBuilder = source => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  apiVersion: '2022-01-02',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client

export async function getHomeData(preview) {
  const data = await getClient(preview).fetch(getHomeDataQuery)

  return data
}