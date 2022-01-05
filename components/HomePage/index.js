import React from 'react'
import classNames from 'classnames'
import { string, object } from 'prop-types'
import styles from './HomePage.module.scss'
import AnyImage from '../Handlers/ImageHandler'


const HomePage = ({ home, refer, id, className }) => {

  return (
    <div ref={refer} id={id} className={classNames(styles.HomePage, className)}>
        <AnyImage className={styles.responsiveImage} src={home.image} />
      <p>{home.title}</p>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const homePageData = await get
// }

HomePage.propTypes = {
  home: object.isRequired,
  refer: object.isRequired,
  id: string.isRequired,
  className: string
}

export default HomePage
