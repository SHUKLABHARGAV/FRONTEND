import React from 'react'
import OurProducts from './components/OurProducts'
import Breadcrumb from './components/Breadcrumb'
import Footer from "./components/Footer";


const Ourproductweb = () => {
  return (
    <div>
     {/* Breadcrumb */}
     <Breadcrumb title="Product Gallery"
      page="Product Gallery" />
      {/* Breadcrumb */}
    <OurProducts/>
    <Footer/>
      
    </div>
  )
}

export default Ourproductweb
