import React from 'react';
import '../Css/Home.scss';

const ServiceCards = (props) => {
    const {name , details, img } = props.service;
    return (
        <div className="col-md-4 px-3 mt-3">
            <div className= 'service-cards d-flex flex-column justify-content-center p-4 h-100'>
               <img className="mx-auto mb-3" src={img} alt="service"/>    
                <h4 className= 'mx-auto mb-3 text-center'>{name}</h4> 
                <p className= 'mx-auto text-center' >{details}</p>
            </div>
        </div>
    );
};

export default ServiceCards;