    import React from 'react'
    import { useRef } from 'react';
    import emailjs from '@emailjs/browser';


    const Form = () => {

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


        return (
            <>


                <div className="wow fadeInUp" data-wow-delay="0.5s">
                    <form ref={inquiryForm  } onSubmit={sendEmail}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="to_name" id="user_name" placeholder="Your Name" required />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" name="from_name" class="form-control" id="user_email" placeholder="Your Email" required />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" name="companyname" className="form-control" id="subject" placeholder="companyname" required />
                                    <label for="companyname" name="companyname">Company name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" name="message" className="form-control" id="subject" placeholder="Subject"   />
                                    <label for="subject" name="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" name="message" id="message" 
                                        style={{ height: "150px" }}></textarea>
                                    <label for="message" name="message">Enquiry / Feedback</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                <div className="form-group">
                                <a className="btn b  px-4" style={{ backgroundColor:'#0b6ab2',color:'white'}}href="mailto:spin.ind443@gmail.com ">You can Upload your Image in our mail address  <i
                                    className="fa fa-envelope-open ms-2"></i></a>
                                <label for="attachment"></label>
                                {/* <input type="file" className="form-control-file" name="my_file" id="attachment"    /> */}
                            </div>
                                </div>
                            </div>
                        

                            <div className="col-12">
                                <button className="btn   py-3 px-5" value="Send" type="submit" style={{ backgroundColor: '#0b6ab2', color: 'white' }}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    export default Form
