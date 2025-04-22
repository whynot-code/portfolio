import React from 'react';
import Pricing from '../components/Pricing';
import MyServices from '../components/MyServices';
import Introduction from '../components/Introduction';
const About: React.FC = () => {
    return (
        <>
            <Introduction />
            <MyServices />
            <Pricing />
        </>
    );
};

export default About;