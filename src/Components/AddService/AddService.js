import React from 'react';
import axios from 'axios';
import './AddService.css'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);

        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div className = "add-service">
            <h2>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")}placeholder="Description" />
                <input {...register("img")} placeholder="img URL" />
                <input className="btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddService;