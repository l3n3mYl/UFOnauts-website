import React from 'react'
import classNames from 'classnames'
import { string, object } from 'prop-types'
import styles from './HomePage.module.scss'
import Parallax from '../Animations/Parallax'


const HomePage = ({ home, refer, id, className }) => {

  return (
    <div ref={refer} id={id} className={classNames(styles.HomePage, className)}>
      <Parallax 
        image={home.image} 
        strength={250}
      >
        <div className={styles.quote}/>
        <p className={styles.title}>{home.title}</p>
        <p className={styles.subtitle}>{home.subtitle}</p>
      </Parallax>
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
