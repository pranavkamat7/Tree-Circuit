import React from 'react'
import styles from '../../../Styles/footer.module.css'
import { Container } from 'react-bootstrap'

function Section1() {
  return (
  <div className={styles.Footer}>
      <Container>
        <div className={styles.main_Footer}>
          <div>
            <img src='./Logo.jpg' alt='Logo' width='50px' height='50px' />
          </div>
          <div className={styles.footer_quick_links}>
            <h2 className={styles.footer_quick_links_header}>Quick Links</h2>
            <a href='/contact-us' className={styles.quick_links}>Contact</a>
            <a href='/about' className={styles.quick_links}>About</a>
            <a href='/our-team' className={styles.quick_links}>Our Team</a>
          </div>
          <div className={styles.footer_quick_links}>
            <h2 className={styles.footer_quick_links_header}>Contact </h2>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=treecircuitteam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quick_links}
            >
              treecircuitteam@gmail.com
            </a>


            <a href='tel:8806328180' className={styles.quick_links}>+91 8806328180</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Section1
