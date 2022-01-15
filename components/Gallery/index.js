import React from 'react'
import classNames from 'classnames'
import { object, string } from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import AnyImage from '../Handlers/ImageHandler'
import 'swiper/css'

import styles from './Gallery.module.scss'

const Gallery = ({ id, refer, className, pageData }) => {
  return (
    <div id={id} ref={refer} className={classNames(styles.Gallery, className)}>
      <h2>Gallery</h2>
      <p>{pageData.subtitle}</p>
      <Swiper
        className={styles.carousel}
        loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              width: 300
            },
            800: {
              slidesPerView: 2
            },
            1218: {
              slidesPerView: 3
            }
        }}
      >
        {pageData.photos.map(photo => {
          return <SwiperSlide key={photo._key} className={styles.swiperSlide}>
            <AnyImage image={photo} className={styles.photo} />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

Gallery.propTypes = {
  pageData: object.isRequired,
  refer: object.isRequired,
  id: string.isRequired,
  className: string
}

export default Gallery
