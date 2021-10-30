import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-start">
                        <h5 className='mb-4'>Contact us</h5>
                        <p>Dhanmondi Road, 1203, Dhaka</p>
                        <p>+8801943567485</p>
                        <p>help@TravelNow.com</p>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Services</h5>
                        <ul className='help-list'>
                            <li> <a href="">Apartments</a></li>
                            <li> <a href="">Resorts</a></li>
                            <li> <a href="">Villas</a></li>
                            <li> <a href="">Hostels</a></li>
                            <li> <a href="">Guest House</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Useful Link</h5>
                        <ul className='help-list'>
                            <li> <a href="">Terms & conditions</a></li>
                            <li> <a href="">Privacy & cookie statement</a></li>
                            <li> <a href="">Refunds & Returns</a></li>
                            <li> <a href="">Partner Help</a></li>
                            <li> <a href="">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Partner with us</h5>
                        <ul className='help-list'>
                            <li> <a href="">YCS partner portal</a></li>
                            <li> <a href="">Partner Hub</a></li>
                            <li> <a href="">Advertise on TravelNow</a></li>
                            <li> <a href="">Connectivity Partners</a></li>
                            <li> <a href="">Affiliates</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className='text-center'>TravelNow &copy; Syed Shakil Mahmud 2021 || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;