import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBed, faBath,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const ApartmentCards = (props) => {
    const {name , address, price, img , charge} = props.apartment;
    return (
        <div className='col-md-4 mb-3'>
            <div className="card apartment-cards" >  
                <img className="card-img-top" src={img} alt="apartment"/> 
                <span class="card-body">
                    <h3 className="card-title text-secondary text-center">{name}</h3>
                    <p className="card-text text-secondary">{address}</p>
                    <span className='d-flex'>
                        <p  className=""> <FontAwesomeIcon  icon={faBed} /> 3 Bedrooms</p>
                        <p  className="ml-auto "> <FontAwesomeIcon  icon={faBath} /> 2 Bathroom</p>
                    </span>
                </span>
                <span className='d-flex px-3'>
                    <b><p  className="px-4 ">{price}</p></b>
                    <p  className="btn theme-bg  px-4 ml-auto">View details</p>
                </span>
            </div>
        </div>
    );
};

export default ApartmentCards;