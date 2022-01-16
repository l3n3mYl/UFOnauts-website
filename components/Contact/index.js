import React from 'react'
import classNames from 'classnames'
import { string, object } from 'prop-types'
import styles from './Contact.module.scss'
import Parallax from '../Animations/Parallax'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = ({ id, refer, pageData, className}) => {
  return (
    <div id={id} ref={refer} className={classNames(styles.Contact, className)}>
      <Parallax
        image={pageData.mainImage}
        blur={3}
      >
        <div className={styles.content}/>
        <h2>Contact Us</h2>
        <p className={styles.subtitle}>{pageData.subtitle}</p>
        <p className={styles.phone}><FontAwesomeIcon icon={faPhone} /> {pageData.phone}</p>
        <p className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
        <p className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
      </Parallax>
    </div>
  )
}

Contact.propTypes = {
  pageData: object.isRequired,
  refer: object.isRequired,
  id: string.isRequired,
  className: string
}

export default Contact
