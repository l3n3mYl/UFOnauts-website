import React from 'react'
import classNames from 'classnames'
import { string, object } from 'prop-types'
import styles from './Testimonials.module.scss'
import BlockContent from '../Handlers/BlockContentHandler'
import AnyImage from '../Handlers/ImageHandler'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Parallax from '../Animations/Parallax'

const Testimonials = ({ pageData, id, refer, className }) => {

  return (
    <div id={id} ref={refer} >
      <Parallax image={pageData.bckImage} >
        <div className={classNames(styles.Testimonials, className)}>
          <h2>{pageData.title}</h2>
          <BlockContent className={styles.subtitle} blocks={pageData.description} />
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
            {pageData.testimonials.map(item => {
              return <SwiperSlide key={item._key} className={styles.card}>
                <AnyImage className={styles.cardImage} src={item.image} />
                <BlockContent className={styles.cardText} blocks={item.description} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </Parallax>
    </div> 
      
  )
}

Testimonials.propTypes = {
  pageData: object.isRequired,
  refer: object.isRequired,
  id: string.isRequired,
  className: string
}

export default Testimonials
