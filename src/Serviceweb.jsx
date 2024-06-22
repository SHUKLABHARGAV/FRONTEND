import React, { useState } from 'react'
import Breadcrumb from "./components/Breadcrumb"
import Service from "./components/Service";
import Footer from "./components/Footer";
 import Popupf from './components/Popupform';
const Serviceweb = () => {
  
 
  return (
    <>
     
      {/* Breadcrumb */}
     <Breadcrumb title="Our Service"
      page="Service" />
      {/* Breadcrumb */}
   
         <Popupf/> 
 
          <Service/>
          <Footer/>
    </>
  )
}

export default Serviceweb
