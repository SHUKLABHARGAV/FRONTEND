import React, { useState } from 'react'
 
import Carousel  from "./components/Carousel";
import About  from "./components/About";
import Counter from "./components/Counter";
import Service from "./components/Service";
import OurTeam from "./components/OurTeam";
 
import Footer from "./components/Footer";
import Testimonial from './components/Testimonial';
 
import Popupf from "./components/Popupform"
 

 

const Home = () => {
 

  return (
    <>
       
  <Popupf/> 
 
        <Carousel/>
        <About/>
        <Counter/>
        <Service/>
        <OurTeam/>
        <Testimonial/>
        <Footer/>
      
    </>
  )
}

export default Home
