import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div className="service pb-3 border rounded border-success">
            <h3>Travel {name}</h3>
            <img className="mt-2" src={img} alt="" />
            <p className="px-5 mx-5">{description.slice(0,300)}...</p>
            <Link to={`/placeOrder/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;