import React from 'react'
import styles from '../../Styles/home.module.css'
import img1 from '../../Images/homeImages/Development.png'
import img2 from '../../Images/homeImages/Digital Marketing.jpg'
import { Carousel } from 'react-bootstrap'
function Section1() {
  return (
     <Carousel fade interval={3000}>
      <Carousel.Item>
        <img src={img1}  alt='Webdevelopment' className={styles.slider_image}/>
        <Carousel.Caption className={styles.carousal_caption_slide1}>
          {/* <h3 className={styles.slider_header}>Web Development</h3> */}
          <p className={styles.slider_para1}>We craft stunning websites that not only look great but drive real results.</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}  alt='Webdevelopment' className={styles.slider_image}/>
        <Carousel.Caption className={styles.carousal_caption_slide2}>
          {/* <h3 className={styles.slider_header}>Digital Marketing</h3> */}
           <p className={styles.slider_para2}>Our digital marketing strategies boost your online presence and connect you with the right audience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Section1
