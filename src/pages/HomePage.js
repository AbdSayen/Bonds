import React from 'react';
import Chooseus from '../components/ChooseUs';
import Home from '../components/Home';
import Info from '../components/Info';

const Homepage = () => {
    return (
        <div>
            <Home />
            <Chooseus />
            <Info />
        </div>
    );
}

export default Homepage;