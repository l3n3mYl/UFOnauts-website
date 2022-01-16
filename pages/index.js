import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { getHomeDataQuery } from '../lib/queries'
import Meta from '../components/Meta/Meta'
import { 
  getHomeData,
  getWhatWeDoData,
  usePreviewSubscription,
  getTestimonialsPageData,
  getGalleryPageData,
  getContactPageData
 } from '../lib/sanity'

import { useRef } from 'react'
import HomePage from '../components/HomePage'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

const Index = ({ homePageData, whatWeDoPageData, testimonialsPageData, galleryPageData, contactPageData }) => {

  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getHomeDataQuery, {
    initialData: homePageData,
    enabled: router.query.preview !== null
  })

  const { home, siteSettings } = pageData
  const { openGraph } = siteSettings
  
  const homeRef = useRef(null)
  const whatWeDo = useRef(null)
  const testimonials = useRef(null)
  const gallery = useRef(null)
  const contact = useRef(null)

  const allRefs = [homeRef, whatWeDo, testimonials, gallery, contact]

  return (
    <Layout refs={allRefs} title={siteSettings.openGraph.title}>
     <Meta {...openGraph} />
     <HomePage refer={homeRef} id='Home' pageData={home} />
     <WhatWeDo refer={whatWeDo} id='What We Do' pageData={whatWeDoPageData} />
     <Testimonials refer={testimonials} id='Testimonials' pageData={testimonialsPageData} />
     <Gallery refer={gallery} id='Gallery' pageData={galleryPageData} />
     <Contact refer={contact} id='Contact' pageData={contactPageData} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const homePageData = await getHomeData()
  const whatWeDoPageData = await getWhatWeDoData()
  const testimonialsPageData = await getTestimonialsPageData()
  const galleryPageData = await getGalleryPageData()
  const contactPageData = await getContactPageData()

  return {
    props: { 
      homePageData: homePageData,
      whatWeDoPageData: whatWeDoPageData,
      testimonialsPageData: testimonialsPageData,
      galleryPageData: galleryPageData,
      contactPageData: contactPageData
     },
    revalidate: 60
  }
}

export default Index
