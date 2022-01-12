import React from 'react'
import classNames from 'classnames'
import { string, object } from 'prop-types'
import styles from './HomePage.module.scss'
import AnyImage from '../Handlers/ImageHandler'


const HomePage = ({ home, refer, id, className }) => {

  return (
    <div ref={refer} id={id} className={classNames(styles.HomePage, className)}>
      <AnyImage className={styles.responsiveImage} src={home.image} />
      <div className={styles.quote}>
        <p className={styles.title}>{home.title}</p>
        <p className={styles.subtitle}>{home.subtitle}</p>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  home: object.isRequired,
  refer: object.isRequired,
  id: string.isRequired,
  className: string
}

export default HomePage
