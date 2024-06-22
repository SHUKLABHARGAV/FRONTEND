import React, { useState } from 'react'
import './Popup.css';
import InquiryForm from './inquiryform';
const popup =  () => {
    const [showModal, setShowModal] = useState(false);
    setShowModal(false);
 
 
        return (
            <div className="popup">
      <button onClick={closePopup}>Close</button>
      <div className="popup-inner">
        <h2>Welcome to Our Website!</h2>
        <p>This is a popup message.</p>
      </div>
    </div>
        )
}

export default popup
