import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Clients from './Clients';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Clients />
        </div>
    );
};

export default Home;