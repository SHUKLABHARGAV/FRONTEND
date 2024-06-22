import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
import 'reactjs-popup/dist/index.css';
 
import Form from './form';

const Popupform = () => {

 
    const inquiryForm = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ilhnyc', 'template_vakqw3n', inquiryForm.current, 'Wz0a-upaGN6c2IWxE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [showModal, setShowModal] = useState(true);
    const [open, setOpen] = useState(true);

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);

        // Close the modal after form submission
        setShowModal(false);
   
  // Reset the form
    };

    return (
        <>   
       

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enquiry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
 
                 
                    <Form/>
          
            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Popup  open={open} onClose={()=>setOpen(false)}   >
            <div onFocus={showModal}>
              
            </div>
            </Popup>
        </>
    );
};

export default Popupform;
