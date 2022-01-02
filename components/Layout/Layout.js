import React from 'react'
import styles from './Layout.module.scss'
import Navbar from '../Navbar'
import { node } from 'prop-types'

const Layout = ({ children }) => {

  const navbarPlaceholder = 'Galerija'

  return (
    <div className={styles.Content}>
      <Navbar title={navbarPlaceholder} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node
}

export default Layout
