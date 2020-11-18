import React from 'react';
import { connect } from 'react-redux';
//import service from '../FakeData/servicesData'
import { addService } from '../Redux/Actions/ServiceAction';
import ServiceCards from './ServiceCards';

const Services = (props) => {
const {service} = props; // hare we inplement redux. we receive data from porps which is in servide reducer

    return (
        <section  className ='my-5 pt-4 w-75 mx-auto '>
            <h5 className='text-center pt-5'>Services</h5>
            <h2 className='text-center theme-text mb-5'>We're an agency tailored to all <br/>
            clients' needs that always delivers</h2>
            <div className="row">
                {
                    service.map(service => <ServiceCards service={service} key={service.id}> </ServiceCards>)
                }
            </div>
        </section>
    );
};

const mapStateToProps = state =>{
    return{
        service: state.service
    }
}
const mapDispatchToProps = {
    addService : addService
}
export default connect(mapStateToProps, mapDispatchToProps)(Services); //--------------connect redux-------------