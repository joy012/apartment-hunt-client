import React from 'react';
import servicedata from '../FakeData/servicesData'
import ServiceCards from './ServiceCards';

const Services = () => {

    return (
        <section  className ='my-5 pt-4 w-75 mx-auto '>
            <h5 className='text-center pt-5'>Services</h5>
            <h2 className='text-center theme-text mb-5'>We're an agency tailored to all <br/>
            clients' needs that always delivers</h2>
            <div className="row">
                {
                    servicedata.map(service => <ServiceCards service={service} key={service.id}> </ServiceCards>)
                }
            </div>
        </section>
    );
};

export default Services;