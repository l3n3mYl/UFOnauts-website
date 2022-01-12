import React from 'react'
import { object } from 'prop-types'
import { Parallax as ReactParallax } from 'react-parallax'
import imageUrlBuilder from '@sanity/image-url'

const Parallax = ({ image, children }) => {

  const imgUrlBuilder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  })

  return (
      <ReactParallax
        bgImage={imgUrlBuilder.image(image)}
        bgImageAlt="Background Image"
        strength={500}
      >
        {children}
      </ReactParallax>
  )
}

Parallax.propTypes = {
  image: object.isRequired,
  children: object.isRequired
}

export default Parallax
