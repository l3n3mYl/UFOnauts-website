import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { array } from 'prop-types'

const Navbar = ({ refs }) => {
  let listener = null
  const [scrollState, setScrollState] = useState("top")
  const [title, setTitle] = useState('Home')

  useEffect(() => {
    listener = document.addEventListener("scroll", _ => {
      var scrolled = document.scrollingElement.scrollTop
      for(let i in refs) {
        if(refs[i].current.offsetTop <= scrolled + 10) {
          setTitle(refs[i].current.id)
        }
      }
      if(scrolled >= 120) {
        if(!scrollState !== "highlight") {
          setScrollState("highlight")
        }
      } else {
        if(scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <header className={styles.Header}>
      <p className={styles.smallLogo}>Company Name</p>
      <input type="checkbox" id={styles.menuToggle} className={styles.menuToggle} />
      <nav className={scrollState === "highlight" ? styles.highlightScrollbar : ''}>
        <p className={styles.bigLogo}>Company Logo</p>
        <ul>
          {
            refs.map((ref) => (
              ref.current && 
              <li key={ref.current.id} onClick={() => {ref.current.scrollIntoView()}}>
                <a className={title === ref.current.id ? styles.highlight : ''} >{ref.current.id}</a>
              </li>
            ))
          }
        </ul>
      </nav>
      <label htmlFor={styles.menuToggle} className={styles.label}>
        <span />
      </label>
    </header>
  )
}

Navbar.propTypes = {
  refs: array.isRequired
}

export default Navbar
