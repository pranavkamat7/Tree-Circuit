import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import styles from '../../Styles/contact.module.css'

function Section1() {
     const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_208ck0t',
      'template_ctod75q',
      formRef.current,
      'lOQv0ZWcruummT5_S'
    )
    .then(
      (result) => {
        alert("Message Sent Successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };
  return (
    <Container className="my-5">
        <div className={styles.contact_parent}>
      {/* <h2>Contact Us</h2> */}
      <Form ref={formRef} onSubmit={sendEmail} className={styles.contact_main}>
        <Form.Group className={styles.label_input} controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" required />
        </Form.Group>

        <Form.Group className={styles.label_input} controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
        </Form.Group>

        <Form.Group className={styles.label_input} controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" required />
        </Form.Group>
    <div className={styles.button_parent}>
        <Button className={styles.contact_button} type="submit">
          Send Message
        </Button>
        </div>
      </Form>
      </div>
    </Container>
  )
}

export default Section1
