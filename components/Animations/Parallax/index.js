import React from 'react'
import { object, number } from 'prop-types'
import { Parallax as ReactParallax } from 'react-parallax'
import imageUrlBuilder from '@sanity/image-url'

const Parallax = ({ image, children, strength, blur }) => {

  const imgUrlBuilder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  })

  return (
      <ReactParallax
        bgImage={imgUrlBuilder.image(image)}
        bgImageAlt="Background Image"
        strength={strength ? strength : 400}
        blur={blur ? blur : 0}
      >
        {children}
      </ReactParallax>
  )
}

Parallax.propTypes = {
  image: object.isRequired,
  children: object.isRequired,
  strength: number,
  blur: number
}

export default Parallax
