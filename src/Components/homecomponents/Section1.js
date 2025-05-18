import React from 'react';
import styles from '../../Styles/home.module.css';
import { Carousel } from 'react-bootstrap';

import pic1 from '../../Images/homeImages/pic1.jpg';
import pic2 from '../../Images/homeImages/pic2.jpg';
import pic3 from '../../Images/homeImages/pic3.jpg';

function Section1() {
  return (
<Carousel pause={false}>
      <Carousel.Item interval={3000}>
        <div className={styles.split_slide_container}>
          <div className={styles.text_section}>
            <h1>Empowering Brands with</h1>
            <h2>Digital Marketing & Software Solutions</h2>
            <p>
              We craft engaging strategies and cutting-edge technologies that drive real business growth.
            </p>
          </div>
          <div className={styles.video_section}>
            <img src={pic1} alt='Slide 1' className={styles.slider_image} />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className={styles.split_slide_container}>
          <div className={styles.text_section}>
            <h1>Innovative Design Meets</h1>
            <h2>Scalable Technology</h2>
            <p>
              Our team transforms ideas into beautifully engineered digital products.
            </p>
          </div>
          <div className={styles.video_section}>
            <img src={pic2} alt='Slide 2' className={styles.slider_image} />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className={styles.split_slide_container}>
          <div className={styles.text_section}>
            <h1>Your Vision,</h1>
            <h2>Our Execution</h2>
            <p>
              We partner with you every step of the way to ensure your brand excels online.
            </p>
          </div>
          <div className={styles.video_section}>
            <img src={pic3} alt='Slide 3' className={styles.slider_image} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Section1;
