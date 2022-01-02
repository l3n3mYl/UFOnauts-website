// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent'
import openGraph from './objects/openGraph'
import home from './pages/home'
import itemGallery from './plugs/itemGallery'
import figure from './plugs/figure'
import grid from './plugs/grid'
import post from './post'
import location from './plugs/location'
import mainImage from './plugs/mainImage'
import video from './plugs/video'
import author from './author'
import siteSettings from './siteSettings'
import category from './category'
import companyInfo from './companyInfo'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    openGraph,
    home,
    itemGallery,
    figure,
    grid,
    post,
    location,
    mainImage,
    video,
    author,
    siteSettings,
    category,
    companyInfo  
  ])
})
