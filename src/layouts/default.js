import React from 'react';
import Navbar from "../components/Navbar/Navbar.component"
import HeroSlider from "../components/HeroCarousal/HeroCarousal"
const  DefaultLayout = (props) => {

    return (
        <>
            <Navbar />
            <HeroSlider />
            {props.children}
        </> 
        
    );
};

export default DefaultLayout;