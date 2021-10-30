import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const PlaceOrder = () => {
    const {serviceId } = useParams();
    const [service, setService] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then( res => res.json())
        .then(data => setService(data));
    }, [serviceId])
    console.log(service);
    return (
        <div>
            <h2>Place is {service.name}</h2>
            <img src={service.img} alt="" />
            <h3>Details of {service.name} is given below : </h3>
            <p>{service.description}</p>
       </div>
    );
};

export default PlaceOrder;