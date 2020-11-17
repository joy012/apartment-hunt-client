import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBed, faBath, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';



const ApartmentCards = (props) => {
    const {service , price, image, location, bed, bath, _id} = props.apartment;
    const history = useHistory();
    const viewDetails = (id) => {
        history.push({ 
            pathname: `/apartment/${id}`,
        });
    }
    return (
        <div className='col-lg-4 col-sm-6 mb-3'>
            <div className="card apartment-cards h-100" >  
                <img className="card-img-top" src={`data:image/png;base64,${image.img}`} alt="apartment"/> 
                <span className="card-body">
                    <h3 className="card-title">{service}</h3>
                    <p className="card-text "> <FontAwesomeIcon className='mr-2 mt-1' icon={faMapMarkerAlt} /> {location}</p>
                    <span className='d-flex'>
                        <p  className=""> <FontAwesomeIcon  icon={faBed} /> {bed} Bedrooms</p>
                        <p  className="ml-auto "> <FontAwesomeIcon  icon={faBath} /> {bath} Bathroom</p>
                    </span>
                </span>

                <span className='d-flex align-items-center px-3'>
                    <h4  className="theme-text">${price}</h4>
                    <p onClick={()=>viewDetails(_id)} className="btn theme-bg  px-3 ml-auto">View details</p>
                </span>
            </div>
        </div>
    );
};

export default ApartmentCards;