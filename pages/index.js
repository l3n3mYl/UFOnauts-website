
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

import styles from './indexxx.module.scss'
import { useRef } from 'react'
import HomePage from '../components/HomePage'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'

const Index = ({ homePageData, whatWeDoPageData, testimonialsPageData, galleryPageData, contactPageData }) => {

  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getHomeDataQuery, {
    initialData: homePageData,
    enabled: router.query.preview !== null
  })

  const { home, siteSettings } = pageData
  const { title, subtitle, body } = home
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
     <HomePage refer={homeRef} id='Home' className={styles.rectum} home={home} />
     <WhatWeDo refer={whatWeDo} id='What We Do' whatWeDoPageData={whatWeDoPageData} />
     <Testimonials refer={testimonials} id='Testimonials' pageData={testimonialsPageData} />
     <Gallery refer={gallery} id='Gallery' pageData={galleryPageData} />
     <Contact refer={contact} id='Contact' pageData={contactPageData} />

     {/* <div ref={homeRef} id='Home' className={styles.rectum}>asd</div> */}
     {/* <div ref={whatWeDo} id='What We Do' className={styles.anotherRectum}></div> */}
     {/* <div ref={testimonials} id='Testimonials' className={styles.thirdRectum}></div> */}
     {/* <div ref={gallery} id='Gallery' className={styles.thirdRectum}></div> */}
     {/* <div ref={contact} id='Contact' className={styles.thirdRectum}></div> */}
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
