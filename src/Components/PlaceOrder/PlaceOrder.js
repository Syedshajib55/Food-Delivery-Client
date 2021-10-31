import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {serviceId } = useParams();
    const [service, setService] = useState([]);
    const {user} = useAuth();
    
    useEffect(()=>{
        fetch(`https://creepy-mansion-66832.herokuapp.com/services/${serviceId}`)
        .then( res => res.json())
        .then(data => setService(data));
    }, [serviceId])
    return (
        <div>
            <h2 className='m-5'>Travel to {service.name} and Get extra <span className='text-danger'>25%</span> Discount </h2>
            <img src={service.img} alt="" />
            <h3 className='m-5'>Details of {service.name} : </h3>
            <p>{service.description}</p>
            
            <form className="shipping-form p-5"
            // onSubmit={handleSubmit(onSubmit)}
             >
                <h3 className='text-primary'>Fiil Up the Form To Checkout</h3>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                <input className='btn btn-primary' type="submit" />
            </form>
            
       </div>
    );
};

export default PlaceOrder;