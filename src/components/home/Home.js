import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Clients from './Clients';
import Hero from './Hero';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Hero />
            <BusinessSummary />
            <Reviews />
            <Clients />
        </div>
    );
};

export default Home;