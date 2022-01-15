import React from 'react'
import classNames from 'classnames'
import { object, string } from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import AnyImage from '../Handlers/ImageHandler'
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css'
import "swiper/css/pagination"

import styles from './Gallery.module.scss'
import BlockContent from '../Handlers/BlockContentHandler'

SwiperCore.use([Pagination]);

const Gallery = ({ id, refer, className, pageData }) => {
  return (
    <div id={id} ref={refer} className={classNames(styles.Gallery, className)}>
      <h2>Gallery</h2>
      <p className={styles.subtitle}>{pageData.subtitle}</p>
      <Swiper
        className={styles.carousel}
        loop={true}
        pagination={true}
        spaceBetween={50}
        breakpoints={{
          10: {
            slidesPerView: 1
          },
          500: {
            slidesPerView: 2
          },
          800: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }}
      >
        {pageData.photos.map(photo => {
          return <SwiperSlide key={photo._key} className={styles.swiperSlide}>
            <AnyImage src={photo.image} className={styles.photo} />
            <div className={styles.effect}>
              <BlockContent className={styles.imageTxt} blocks={photo.description} />
            </div>
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
