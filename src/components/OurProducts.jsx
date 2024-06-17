import React, { useState, useEffect } from 'react'
import DynamicImage from './Dynamicproducts';
import '../components/product.css'
import InquiryForm from './inquiryform';
import ServiceItem from './Serviceproduct';


const OurProducts = (props) => {

  const [products, setProducts] = useState([]);

   

  useEffect(() => {

    
    const fetchProducts = async () => {
      // const Api = "https://elegant-respect-d8392b3457.strapiapp.com/admin/"
      // 'http://localhost:1337/api/products?populate=*'
      try {
        //  Api = "https://elegant-respect-d8392b3457.strapiapp.com/admin/"
        await fetch('https://elegant-respect-d8392b3457.strapiapp.com/api/products?populate=*', {
          method: "GET"
        }).then((rsp) => rsp.json()).then((resp) => {
          
          const data=Array.isArray(resp?.data) && resp.data.map((item, index) =>{
            const {id, attributes:{Title, Image ,Description}} = item
              return {id,description:Description,title:Title,imageUrl:`https://elegant-respect-d8392b3457.media.strapiapp.com/${Image.data[0].attributes.url}`}
          })
          setProducts(data)
          console.log('====================================');
          console.log(data);
          console.log('====================================');
        })
 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/products.json ')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='App' >
        <div className="row gy-5 gx-4">
                    {products.map((service, index) => (
                <DynamicImage
                    key={index}
                    imgSrc={service.imageUrl}
                    title={service.title}
                    description={service.description}
                    id={service.id}
                    btnStyle={service.btnStyle}
                />
            ))}
            </div>
    
 
 

    </div>
  )
}

export default OurProducts
