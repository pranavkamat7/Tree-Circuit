import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../../Styles/home.module.css'

function Section2() {
  return (
    <Container>
    <div className={styles.section2_parent}>
        <div className={styles.section2_child}>
      <h3 className={styles.section2_title}>"Great development builds the bridge, but it’s brilliant marketing that brings the world across."</h3>
      </div>
    </div>
    </Container>
  )
}

export default Section2
