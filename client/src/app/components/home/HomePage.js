import React from 'react';
import HomePage1 from './HomePage1/HomePage1';
import AllProducts from './AllProducts/AllProducts';
import Slider from './YeniDeneme/Slider';
import FeaturedProducts from './featured/FeaturedProducts';

const HomePage = () => {

    return (
        <div className="pb-5">
            <div className="carousel_el">
                <Slider/>
            </div>
            <HomePage1/>
            <AllProducts /> 
            <FeaturedProducts/>        
        </div>
    )
}
export default HomePage;