import styles from './WhatWeDo.module.scss'
import React from 'react'
import AnyImage from '../Handlers/ImageHandler'
import classNames from 'classnames'
import BlockContent from '../Handlers/BlockContentHandler'
import { string, object } from 'prop-types'

const WhatWeDo = ({ className, whatWeDoPageData, refer, id }) => {
  console.log(whatWeDoPageData)
  return (
    <div ref={refer} id={id} className={classNames(styles.WhatWeDo, className)}>
      <h2 className={styles.sectionName}>{whatWeDoPageData.title}</h2>
      <BlockContent className={styles.description} blocks={whatWeDoPageData.description} />
      {
        whatWeDoPageData.offerings.map(item => {
          return <div className={styles.itemCard} key={item._key}>
            <AnyImage className={styles.image} image={item.image} />
            <div className={styles.info}>
              <h2 className={styles.title}>{item.title}</h2>
              <BlockContent className={styles.description} blocks={item.description} />
            </div>
          </div>
        })
      }
    </div>
  )
}

WhatWeDo.propTypes = {
  refer: object.isRequired,
  whatWeDoPageData: object.isRequired,
  id: string.isRequired,
  className: string,
}

export default WhatWeDo
