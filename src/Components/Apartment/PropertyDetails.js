import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApartmentForm from './ApartmentForm';

const PropertyDetails = () => {
    const { id } = useParams();
    const [apartments, setApartments] = useState([]);
    const house = apartments.length &&
        apartments.find(apartment => { return (apartment._id).toString() === id.toString() })
    const { service, location, price, image } = house;
    const [currentImg, setCurrentimg] = useState(`data:image/png;base64,${image.img}`)


    useEffect(() => {
        fetch('https://apartment-hunt-spa.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => {
                setApartments(data);
            })
    }, [id])

    const changeImg = (src) => {
        setCurrentimg(src);
    }


    return (
        <section className='container'>
            <div className="row">
                <div className="col-md-8 py-4">
                    <div className="currentImg">
                        <img src={currentImg} alt='apartment' id="expandedImg" />
                    </div>

                    <div className="row mt-2">
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/pnSXQ8S/Rectangle-407.png" alt="interior" onClick={() => changeImg('https://i.ibb.co/pnSXQ8S/Rectangle-407.png')} />
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/fq9W8rx/Rectangle-408.png" alt="interior" onClick={() => changeImg('https://i.ibb.co/fq9W8rx/Rectangle-408.png')} />
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/B2N1Z72/Rectangle-409.png" alt="interior" onClick={() => changeImg('https://i.ibb.co/B2N1Z72/Rectangle-409.png')} />
                        </div>
                        <div className="column tabImg">
                            <img src="https://i.ibb.co/j3VRhw7/Rectangle-410.png" alt="interior" onClick={() => changeImg('https://i.ibb.co/j3VRhw7/Rectangle-410.png')} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="d-flex">
                            <h3 className='theme-text'>{service}</h3>
                            <b className='ml-auto theme-text'><h3>${price}</h3></b>
                        </div>
                        <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

                        <h4 className='theme-text'>Price Details</h4>
                        <p>Rent/Month: ${price} </p>
                        <p>Service Charge : 5,000/= Tk per month</p>
                        <p>Security Deposit : 3 months rent </p>
                        <p>Flat Release Policy :  3 months earlier notice required</p>

                        <h4 className='theme-text'>Property Details</h4>
                        <p> Address & Area : {location}</p>
                        <p> Flat Size : 300 sq feet</p>
                        <p> Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                        <p> Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious,Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                        <p> Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                        <p>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility</p>
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


