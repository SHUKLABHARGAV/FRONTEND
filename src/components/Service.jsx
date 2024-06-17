import React,{useState,useEffect} from 'react'
import img1 from "./img/product 6.jpeg"
import img2 from "./img/product 3.jpeg"
import img3 from "./img/product 7.jpeg"
import ServiceItem from "./Serviceproduct"
import DynamicImage from './Dynamicproducts';

const Service = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {


        const fetchProducts = async () => {
            try {
                await fetch('https://elegant-respect-d8392b3457.strapiapp.com/api/services?populate=*', {
                    method: "GET"
                }).then((rsp) => rsp.json()).then((resp) => {
                    console.log(resp);

                    const data = Array.isArray(resp?.data) && resp.data.map((item, index) => {
                        const { id, attributes: { productTitle, productimg, productdesc } } = item
                        return { id, description: productdesc, title: productTitle
                            , imageUrl: `https://elegant-respect-d8392b3457.media.strapiapp.com/${productimg.data[0].attributes.url}` }
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
    const primary = {
        color: "#0b6ab2",

    };
 
    return (

        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p className="fw-medium text-uppercase   mb-2" style={primary}>Our Services</p>
                        <h1 className="display-5 mb-4">We Provide Best Industrial Services</h1>
                    </div>
                    <div className="row gy-5 gx-4">
                    {products.map((service, index) => (
                <ServiceItem
                    key={index}
                    imgSrc={service.imageUrl}
                    title={service.title}
                    description={service.description}
                    id={service.id}
                    btnStyle={service.btnStyle}
                />
            ))}
                     
                        {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src={img1} alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src={img1} alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">TFO SPINDLE</h3>
                                <hr className="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0" style={{fontSize:'20px'}}>TFO spindles are engineered for precise and balanced operation, minimizing vibration and ensuring uniform yarn tension and quality.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" style={btnprimary} href="n">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid"  src={img2} alt="" />
                        <div className="service-img">
                            <img className="img-fluid"  src={img2} alt="" />
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">INSERT BOSTER</h3>
                                <hr class="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0" style={{fontSize:'20px'}}>Insert boosters help maintain consistent tension and twist in the yarn, resulting in higher-quality finished products with fewer defects.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" style={btnprimary} href="n">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid"  src={img3} alt="" />
                        <div className="service-img">
                            <img className="img-fluid"  src={img3} alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25" />
                                <h3 className="mb-0">Spindel Manufacturing</h3>
                                <hr class="w-25" />
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0" style={{fontSize:'20px'}}>Quality spindles are produced using advanced CNC/PLC machinery and precision engineering to ensure accurate dimensions and flawless performance.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" style={btnprimary} href="6">Read More</a>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
