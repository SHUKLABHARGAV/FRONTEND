import React from 'react'
import Breadcrumb from "./components/Breadcrumb"
import Productserviceinfo from './components/productserviceinfo'; 
import Footer from "./components/Footer";
const Serviceinfo = () => {
  return (
    <>
      {/* Breadcrumb */}
     <Breadcrumb title="Our Service"
      page="Service" />
      {/* Breadcrumb */}
          <Productserviceinfo/>
          <Footer/>
    </>
  )
}

export default Serviceinfo
