import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Doctors from '../Doctors/Doctors.js';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;