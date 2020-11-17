import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
      //  <!-- footer starts -->
        <footer  className="theme-bg">
            <div className="container">
                <div className="row ">
                   
                    <div className="col-md-5 pt-5 d-flex ">
                    <FontAwesomeIcon className='mr-2 mt-1' size="2x" icon={faMapMarkerAlt} /> 
                    <p > H#340 (4th Floor), Road #24, <br/>
                    New DOHS, Mohakhali, Dhaka, Bangladesh<br/>
                    Phone: 018XXXXXXXX<br/>
                    E-mail: info@company.com </p>
                    </div>
    
                    <div className="col-md-7 ">
                        <div className="row">
                            <div className="col-md-4 pt-5 list-unstyled">
                                
                                <h5>Company</h5>
                                <li>About</li>
                                <li>Site Map</li>
                                <li>Support Center</li>
                                <li>Terms Conditions</li>
                                <li>Submit Listing</li>
                            </div>
                            <div className="col-md-4 pt-5 list-unstyled">
                                <h5>Quick Links</h5>
                                <li>Sales</li>
                                <li>Contact</li>
                                <li>Terms Conditions</li>
                                <li>Our blog</li>
                            </div>
                            <div className="col-md-4 pt-5">
                                <h5>About Us </h5>
                                We are the top real estate 
                                agency in Sydney, with agents 
                                available to answer any 
                                question 24/7.
                                <div className='d-flex mt-4'>
                                    <FontAwesomeIcon className='mr-2' size="2x" icon={faFacebook} />
                                    <FontAwesomeIcon className='mr-2'size="2x" icon={faInstagram} />
                                    <FontAwesomeIcon className='mr-2'size="2x" icon={faLinkedin} />
                                    <FontAwesomeIcon className='mr-2'size="2x" icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className="py-3 text-center mb-0">©Team-69 2020, a Programming Hero initiative.</p>
        </footer>
   // <!-- footer ends -->
    );
};

export default Footer;