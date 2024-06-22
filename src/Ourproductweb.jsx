import React, { useState } from 'react'
import OurProducts from './components/OurProducts'
import Breadcrumb from './components/Breadcrumb'
import Footer from "./components/Footer";
 
import Popupf from "./components/Popupform"
 



const Ourproductweb = () => {

  return (
    <div>
     {/* Breadcrumb */}
     <Breadcrumb title="Product Gallery"
      page="Product Gallery" />
      {/* Breadcrumb */}
 
          <Popupf/>
  
    <OurProducts/>
    <Footer/>
      
    </div>
  )
}

export default Ourproductweb
