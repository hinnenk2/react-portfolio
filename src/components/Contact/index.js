import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import emailjs from "emailjs-com";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { name, email, subject, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          sendEmail(e)
          handleShow()
          console.log(e.target.message)
          setFormState({ name: '', email: '', subject: '', message: '' });
          e.target.reset()
          
         }
      };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
            setErrorMessage('Invalid email');
            } else { 
            setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
            } else {
               setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            }
    };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_aj3gfi7', e.target, 'user_zs4TMIym9RgkXAzkAAKEz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

  
    return (

        <> 
        <Container>
        <Form id="contact-form" onSubmit={handleSubmit}>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" defaultValue={name} onBlur={handleChange} size="lg" type="name" placeholder="Enter name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" defaultValue={email} onBlur={handleChange} size="lg" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formEmailSubject">
                <Form.Label>Email Subject</Form.Label>
                <Form.Control name="subject" defaultValue={subject} onBlur={handleChange} size="lg" type="text" placeholder="Enter subject" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>


            <Form.Group controlId="formEmailMessage">
                <Form.Label>Leave me a message</Form.Label>
                <Form.Control name="message" defaultValue={message} onBlur={handleChange} as="textarea" rows={3} />
            </Form.Group>

            {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
            )}

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Nav variant="tabs" className="justify-content-end" style={{ width: "100%" }}>

                <Nav.Link 
                
                href="https://github.com/hinnenk2"
                target="_blank"
                >GitHub
                </Nav.Link>
                <Nav.Link 
                href="https://www.linkedin.com/in/ian-hinnenkamp-4a1a2398/"
                target="_blank"
                >Linkedin
                </Nav.Link>
                <Nav.Link 
                href="mailto:ianhinnenkamp@gmail.com"
                >ianhinnenkamp@gmail.com
                </Nav.Link>
            </Nav>

            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Your message has been sent!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your message 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
             </Modal>
        </Container>
        </>                
    )
}
    
export default ContactForm;