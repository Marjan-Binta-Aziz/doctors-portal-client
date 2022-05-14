import React from 'react';
import Banner from './Banner';
import Exceptional from '../../Pages/Appointment/Exceptional';
import InfoCard from './InfoCard';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;