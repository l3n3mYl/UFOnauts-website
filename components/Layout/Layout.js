import React from 'react'
import styles from './Layout.module.scss'
import { node } from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className={styles.Content}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node
}

export default Layout
