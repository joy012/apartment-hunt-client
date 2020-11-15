import React from 'react';
import apartment from '../FakeData/apartmentData'
import ApartmentCards from './ApartmentCards';

const HouseRent = () => {
    return (
        <section>
            <h5 className='text-center pt-5'>House Rent</h5>
            <h2 className='text-center theme-text'>Discover the latest Rent <br/> available today</h2>
            <div className="container my-5">
                <div className="row">
                    {
                        apartment.map(apartment => <ApartmentCards apartment={apartment} key={apartment.id}> </ApartmentCards>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HouseRent;