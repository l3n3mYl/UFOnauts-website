
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { getHomeDataQuery } from '../lib/queries'
import Meta from '../components/Meta/Meta'
import { 
  getHomeData,
  getWhatWeDoData,
  usePreviewSubscription,
  getTestimonialsPageData
 } from '../lib/sanity'

import styles from './indexxx.module.scss'
import { useRef } from 'react'
import HomePage from '../components/HomePage'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'

const Index = ({ homePageData, whatWeDoPageData, testimonialsPageData }) => {
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
     {/* <div ref={homeRef} id='Home' className={styles.rectum}>asd</div> */}
     {/* <div ref={whatWeDo} id='What We Do' className={styles.anotherRectum}></div> */}
     {/* <div ref={testimonials} id='Testimonials' className={styles.thirdRectum}></div> */}
     <div ref={gallery} id='Gallery' className={styles.thirdRectum}></div>
     <div ref={contact} id='Contact' className={styles.thirdRectum}></div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const homePageData = await getHomeData()
  const whatWeDoPageData = await getWhatWeDoData()
  const testimonialsPageData = await getTestimonialsPageData()

  return {
    props: { 
      homePageData: homePageData,
      whatWeDoPageData: whatWeDoPageData,
      testimonialsPageData: testimonialsPageData
     },
    revalidate: 60
  }
}

export default Index
