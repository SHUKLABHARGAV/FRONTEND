import React from 'react';
import { Link } from 'react-router-dom';
 

const ServiceItem = ({ imgSrc, title, description,id}) => {
    

    
    const btnprimary = {
        backgroundColor: "#0b6ab2",
        color: 'white'

    };
    return (
//         import React from 'react';
// import { Link } from 'react-router-dom';

// const ServiceItem = ({ productId, imgSrc, title, description, btnprimary }) => {
//     return (
//         <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
//             <div className="service-item">
//                 <img className="img-fluid" src={imgSrc} alt={title} />
//                 <div className="service-img">
//                     <img className="img-fluid" src={imgSrc} alt={title} />
//                 </div>
//                 <div className="service-detail">
//                     <div className="service-title">
//                         <hr className="w-25" />
//                         <h3 className="mb-0">{title}</h3>
//                         <hr className="w-25" />
//                     </div>
//                     <div className="service-text">
//                         <p className="text-white mb-0" style={{ fontSize: '20px' }}>{description}</p>
//                     </div>
//                 </div>
//                 <Link className="btn btn-light" style={btnprimary} to={`/product/${productId}`}>Read More</Link>
//             </div>
//         </div>
//     );
// }

// export default ServiceItem;

        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
            <img className="img-fluid" src={imgSrc} alt={title} />
                <div className="service-img">
                    <img className="img-fluid" src={imgSrc} alt={title} />
                </div>
                <div className="service-detail">
                    <div className="service-title">
                        <hr className="w-25" />
                        <h3 className="mb-0">{title}</h3>
                        
                        <hr className="w-25" />
                    </div>
                    <div className="service-text">
                        <p className="text-white mb-0" style={{ fontSize: '20px' }}>{description}</p>
                    </div>  
                </div>
                <Link className="btn btn-light" style={btnprimary} to={`/productinfo/${id}`}>Read More</Link>
                {/* <a className=" btn btn-light" style={btnprimary}  href={id} >Read More</a> */}
            </div>
        </div>
    );
}

export default ServiceItem;
