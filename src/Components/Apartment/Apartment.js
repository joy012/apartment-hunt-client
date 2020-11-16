import React from 'react';
import SubHeader from './SubHeader';
import '../Css/Apartment.css'
import PropertyDetails from './PropertyDetails';
import Navigation from '../Home/Navigation';


const Apartment = () => {
    return (
        <main>
            <Navigation></Navigation>
            <SubHeader></SubHeader>
            <PropertyDetails></PropertyDetails>
        </main>
    );
};

export default Apartment;