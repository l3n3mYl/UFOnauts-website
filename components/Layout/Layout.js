import React from 'react'
import styles from './Layout.module.scss'
import Navbar from '../Navbar'
import { node } from 'prop-types'

const Layout = ({ children, refs }) => {

  return (
    <div className={styles.Content}>
      <Navbar refs={refs} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node
}

export default Layout
