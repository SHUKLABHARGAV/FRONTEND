import React from 'react'
import Breadcrumb from "./components/Breadcrumb"
 
import Footer from "./components/Footer";
import Testimonial from './components/Testimonial';
const Reviews = () => {
  return (
    <>
      {/* Breadcrumb */}
     <Breadcrumb title="Reviews"
      page="Reviews" />
      {/* Breadcrumb */}
          <Testimonial/>
          <Footer/>
    </>
  )
}

export default Reviews
