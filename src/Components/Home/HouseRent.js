import React, { useEffect, useState } from 'react';
import ApartmentCards from './ApartmentCards';

const HouseRent = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch('https://apartment-hunt-spa.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => {
                setApartments(data);
            })
    }, [])

    return (
        <section>
            <h5 className='text-center pt-5'>House Rent</h5>
            <h2 className='text-center theme-text'>Discover the latest Rent <br /> available today</h2>
            <div className="container my-5">
                <div className="row">
                    {
                        !apartments.length &&
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        apartments.map(apartment => <ApartmentCards apartment={apartment} key={apartment._id}> </ApartmentCards>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HouseRent;