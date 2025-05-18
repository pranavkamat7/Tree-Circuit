import React from 'react';
import styles from '../../Styles/about.module.css';
import img2 from "../../Images/homeImages/img2.png"; // Replace with your team image

function About() {
  return (
    <div className={styles.about_section}>
      <div className={styles.container}>
        <div className={styles.text_area}>
          <h1 className={styles.heading}>About Us</h1>
          <h2 className={styles.subheading}>Where Creativity Meets Code</h2>
          <p className={styles.description}>
            We are a passionate collective of digital marketing strategists, software engineers,
            and creative problem-solvers. Our mission is to empower brands through innovative 
            technology and compelling storytelling. From conceptual design to scalable software 
            architecture, we bring your vision to life with precision and flair.
          </p>

          <p className={styles.description}>
            At our core, we believe in collaboration, quality, and continuous improvement. 
            Every project we undertake is a new opportunity to push boundaries, elevate user 
            experience, and deliver measurable results. With a diverse team that thrives on challenges, 
            we turn ambitious ideas into reality.
          </p>

          <div className={styles.highlights}>
            <div className={styles.point}>
              💡 <span>Creative Campaigns that Drive Real Impact</span>
            </div>
            <div className={styles.point}>
              🧠 <span>Expert Engineers & Visionary Designers</span>
            </div>
            <div className={styles.point}>
              🚀 <span>Scalable, Future-Proof Digital Solutions</span>
            </div>
            <div className={styles.point}>
              🤝 <span>Client-Centered Approach with Transparent Communication</span>
            </div>
            <div className={styles.point}>
              🔍 <span>Data-Driven Strategies Backed by Research & Analytics</span>
            </div>
            <div className={styles.point}>
              🌐 <span>Global Perspective with Local Understanding</span>
            </div>
          </div>
        </div>

        <div className={styles.image_area}>
          <img src={img2} alt="Our Team" className={styles.team_image} />
        </div>
      </div>
    </div>
  );
}

export default About;
