import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddPackege = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = data => {
        axios.post('http://localhost:5000/packege', data)
            .then(res => {
                if (res.data.acknowledged) {
                    swal("Packege Added!", "Pacaege added to the Website!", "success");
                    reset();
                } else {
                    swal("Unsuccessful !", "Packege is not added to the Website!", "error");
                }
            })
    }


    return (
        <div className='register '>
            <div className='container'>
                <div className='px-5 pb-5 row justify-content-around align-items-center all-margin'>
                    <h1 className='tb py-3 ps-4  mb-4'>
                        Add Packege
                    </h1>

                    <form className='' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <input {...register("name", { required: true })} placeholder="Package Name" />
                        {errors.name && <span>This field is required</span>}
                        <br />
                        <div className='d-flex'>
                            <select {...register("type")} className='me-2'>
                                <option value="Regular">Regular</option>
                                <option value="Special">Special</option>
                                <option value="Notun Biya Boise">Notun Biya Boise</option>
                            </select>
                            {errors.type && <span>This field is required</span>}
                            <input {...register("location", { required: true })} placeholder="Location" />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className='d-flex'>
                            <input className='me-2' type="number" {...register("price", { required: true })} placeholder="Price" />
                            {errors.price && <span>This field is required</span>}
                            <input {...register("person", { required: true })} placeholder="Person" />
                            {errors.duration && <span>This field is required</span>}
                        </div>
                        <input {...register("description", { required: true })} placeholder="Description" />
                        {errors.description && <span>This field is required</span>}
                        <br />
                        <div className='d-flex'>
                            <input className='me-2' {...register("duration", { required: true })} placeholder="Duration" />
                            {errors.description && <span>This field is required</span>}
                            <input {...register("date", { required: true })} placeholder="Date" />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className='d-flex'>
                            <input className='me-2' {...register("guide", { required: true })} placeholder="Tour Guide" />
                            {errors.description && <span>This field is required</span>}
                            <input {...register("guideImg", { required: true })} placeholder="Tour Guide Image" />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <input {...register("img", { required: true })} placeholder='Image url' />
                        {errors.img && <span>This field is required</span>}
                        <br /><br />
                        <input className='btn btn-dark py-3 w-50 ' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackege;