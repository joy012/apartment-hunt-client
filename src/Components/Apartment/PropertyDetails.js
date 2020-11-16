import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import apartmentdata from '../FakeData/apartmentData'
import ApartmentForm from './ApartmentForm';

const PropertyDetails = () => {
    const location = useLocation();
    const {id} = location.state || {};
    const apartment = apartmentdata[id];
    const {name, img, address, price, serviceCharge, sequrityDeposit,feature,flatSize, floor,roomCategory,facilities,addFacilities} = apartment || '';
    

    const [currentImg, setCurrentimg] = useState(img)
    const changeImg = (src)=>{
        setCurrentimg(src);
    }
    return (
        <section className = 'container'>
            <div className="row">
                <div className="col-md-8 py-4">
                    <div className="currentImg">
                        <img src={currentImg} alt='apartment' id="expandedImg"/>
                    </div>

                    <div className="row mt-2">
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/pnSXQ8S/Rectangle-407.png" alt="interior" onClick={()=>changeImg('https://i.ibb.co/pnSXQ8S/Rectangle-407.png')}/>
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/fq9W8rx/Rectangle-408.png" alt="interior" onClick={()=>changeImg('https://i.ibb.co/fq9W8rx/Rectangle-408.png')}/>
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/B2N1Z72/Rectangle-409.png" alt="interior" onClick={()=>changeImg('https://i.ibb.co/B2N1Z72/Rectangle-409.png')}/>
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/j3VRhw7/Rectangle-410.png" alt="interior" onClick={()=>changeImg('https://i.ibb.co/j3VRhw7/Rectangle-410.png')}/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="d-flex">
                            <h3 className='theme-text'>{name}</h3>
                            <b className='ml-auto theme-text'><h3>{price}</h3></b>
                        </div>
                        <p>{feature}</p> 

                        <h4 className='theme-text'>Price Details</h4>
                        <p>Rent/Month: {price} </p>
                        <p>Service Charge : {serviceCharge}</p>
                        <p>Security Deposit : {sequrityDeposit} </p>
                        <p>Flat Release Policy :  3 months earlier notice required</p>
                        
                        <h4 className='theme-text'>Property Details</h4>
                        <p> Address & Area : {address}</p>
                        <p> Flat Size : {flatSize}</p>
                        <p> Floor : {floor}</p>
                        <p> Room Category : {roomCategory}</p>
                        <p> Facilities : {facilities}</p>
                        <p>Additional Facilities : {addFacilities}</p>
                    </div>
                </div>
                <div className="col-md-4 px-3 mt-5">
                    <ApartmentForm></ApartmentForm>
                </div>
            </div>
            
        </section>
    );
};

export default PropertyDetails;


