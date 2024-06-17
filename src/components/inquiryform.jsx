import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
 
 
import Form from './form';

const InquiryForm = () => {

 

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [showModal, setShowModal] = useState(false);

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);

        // Close the modal after form submission
        setShowModal(false);
        reset(); // Reset the form
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
            <a className="m-2 button" href="#" onClick={() => setShowModal(true)}>
                <span className='disable'>Enquire Now</span>
            </a>
        </>
    );
};

export default InquiryForm;
