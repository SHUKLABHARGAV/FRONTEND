import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
 
import 'reactjs-popup/dist/index.css';
 
import Form from './form';

const Popupform = () => {

 

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
        reset(); // Reset the form
    };

    return (
        <>      <Popup  open={open} onClose={()=>setOpen(false)}   >
       

            <Modal show={showModal} onHide={() => setShowModal(true)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enquiry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
           <Form/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShowModal(true)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <a className="m-2 button" href="#" onClick={() => setShowModal(true)}>
                <span className='disable'>Enquire Now</span>
            </a> */}
            </Popup>
        </>
    );
};

export default Popupform;
