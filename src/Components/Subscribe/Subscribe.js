import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className='subs'>
            <div>
                 <h1 className='p-2 text-primary m-2'>Subscribe and Get Extra 20% off</h1>
            </div>
            <div className="subscribe">
                <div>
                    <p className='p-3 White'>
                    Join our newsletter and discover new destinations to inspire your next journey. Plus, get 20% off at our online shop. Every week you'll receive expert advice, tips, the latest updates in travel news and much more.
                    </p>
                    <input className="p=3" type="email" placeholder="Email address"/>
                    <p className="p-3 White"> <small >I want emails from Lonely Planet with travel and product information, promotions, advertisements, third-party offers, and surveys. I can unsubscribe any time using the unsubscribe link at the end of all emails.  Contact Lonely Planet here. Lonely Planet Privacy Policy.</small> </p>
                    <button className='m-3 btn btn-danger'>Subscribe</button>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;