import React from 'react'
import styles from '../../../Styles/footer.module.css'
import { Container } from 'react-bootstrap'

function Section1() {
  return (
    <div className={styles.Footer}>
        <Container>
            <div className={styles.main_Footer}>
      <div>
        <img src='./Logo.jpg' alt='Logo' width='30px' height='30px'/>
      </div>
      <div className={styles.footer_quick_links}>
            <h2 className={styles.footer_quick_links_header}>Quick Links</h2>
            <a href='/contact-us' className={styles.quick_links}>Contact</a>
            <a href='#' className={styles.quick_links}>About</a>
      </div>
      <div className={styles.footer_quick_links}>
        <h2 className={styles.footer_quick_links_header}>Contact </h2>
        <a href='tel:8806328180' className={styles.quick_links}>+91 8806328180</a>
      </div>
      </div>
      </Container>
    </div>
  )
}

export default Section1
