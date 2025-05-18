import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import styles from '../../Styles/contact.module.css';

function Section1() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_208ck0t',
      'template_ctod75q',
      formRef.current,
      'lOQv0ZWcruummT5_S'
    ).then(
      () => {
        alert("Message Sent Successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };

  return (
    <Container className={`${styles.contact_section}`}>
      <div className={styles.contact_card}>
        <h2 className={styles.contact_heading}>Get in Touch</h2>
        <p className={styles.contact_subtext}>We’d love to hear from you. Fill out the form and we’ll be in touch soon!</p>
        <Form ref={formRef} onSubmit={sendEmail} className={styles.contact_form}>
          <Form.Group className={styles.form_group} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" required />
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" required />
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." name="message" required />
          </Form.Group>

          <div className={styles.button_wrapper}>
            <Button type="submit" className={styles.submit_button}>Send Message</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Section1;
