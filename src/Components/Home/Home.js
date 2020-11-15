import React from 'react';
import '../Css/Home.css'
import Footer from '../Footer/Footer';
import Header from './Header';
import HouseRent from './HouseRent';
import Navigation from './Navigation';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <HouseRent></HouseRent>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;