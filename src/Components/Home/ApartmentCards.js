import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBed, faBath,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';



const ApartmentCards = (props) => {
    const {name , address, price, img , charge, id} = props.apartment;
    const history = useHistory();
    const viewDetails = (id) => {
        history.push({ 
            pathname: '/apartment',
            state: { 
                id: id
            }
        });
    }
    return (
        <div className='col-lg-4 col-sm-6 mb-3'>
            <div className="card apartment-cards h-100" >  
                <img className="card-img-top" src={img} alt="apartment"/> 
                <span className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text ">{address}</p>
                    <span className='d-flex'>
                        <p  className=""> <FontAwesomeIcon  icon={faBed} /> 3 Bedrooms</p>
                        <p  className="ml-auto "> <FontAwesomeIcon  icon={faBath} /> 2 Bathroom</p>
                    </span>
                </span>

                <span className='d-flex align-items-center px-3'>
                    <h4  className="theme-text">{price}</h4>
                    <p onClick={()=>viewDetails(id)} className="btn theme-bg  px-3 ml-auto">View details</p>
                </span>
            </div>
        </div>
    );
};

export default ApartmentCards;