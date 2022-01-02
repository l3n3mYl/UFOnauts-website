
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { getHomeDataQuery } from '../lib/queries'
import Meta from '../components/Meta/Meta'
import { getHomeData, usePreviewSubscription } from '../lib/sanity'

const Index = ({ homePageData }) => {
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getHomeDataQuery, {
    initialData: homePageData,
    enabled: router.query.preview !== null
  })

  const { home, siteSettings } = pageData
  // const { title, subtitle, body } = home
  const { openGraph } = siteSettings

  return (
    <Layout>
     <Meta {...openGraph} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const homePageData = await getHomeData()

  return {
    props: { 
      homePageData: homePageData
     },
    revalidate: 60
  }
}

export default Index
