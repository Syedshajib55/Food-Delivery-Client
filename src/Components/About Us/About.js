import React from 'react';
import './AboutUs.css'
import img from './free-travel-website-templates-1000x750.jpg';
const About = () => {
    return (
        <div className="">
            <h2 className="text-primary">About Us</h2>
            <div className='p-2'>
                <img src={img} alt="" />
            </div>
            <div className="p-2">
                
                <h2 className="mt-5">Welcome to TravelNow.com</h2>
                <p className="mt-5">TravelNow.com is a leading provider of hotel accommodation worldwide, offering booking services through its own network of localised websites.
                Hotels.com gives travellers one of the widest selections of accommodation on the net, including both independent and major chain hotels as well as self-catering in over hundreds of thousands properties worldwide. The company offers a one-stop shopping source for hotel pricing, amenities and availability.
                TravelNow.com, L.P. is part of the Expedia Group of travel companies.* TravelNow.com, L.P. headquarters are located at Dhanmondi Road, 1203, Dhaka, Bangladesh.</p>
            </div>
            
        </div>
    );
};

export default About;