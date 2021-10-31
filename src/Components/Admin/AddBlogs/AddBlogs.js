import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';

const AddBlogs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = data => {
        axios.post('https://glacial-meadow-20329.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.acknowledged) {
                    swal("Blog Added!", "Blog added to the Website!", "success");
                    reset();
                } else {
                    swal("Unsuccessful !", "Blog is not added to the Website!", "error");
                }
                // console.log(res.data);
            })
    }


    return (
        <div className='register '>
            <div className='container'>
                <div className='px-5 pb-5 row justify-content-around align-items-center all-margin'>
                    <h1 className='tb py-3 ps-4  mb-4'>
                        Add Blog
                    </h1>

                    <form className="row" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        {/* title and description  */}
                        <div className="d-flex flex-column col-lg-6 col-12">
                            <label>Blog Title</label>
                            <input {...register("title", { required: true })} />
                            {errors.title && <span className='text-danger'>This field is required *</span>}
                            <label>Blog Description</label>
                            <textarea {...register("description", { required: true })} cols='50' rows="12"></textarea>
                            {errors.description && <span className='text-danger'>This field is required *</span>}
                        </div>

                        <div className="d-flex flex-column col-lg-6 col-12">

                            <label>Writer Name</label>
                            <input {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required *</span>}

                            <label>Image URL</label>
                            <input {...register("img", { required: true })} />
                            {errors.img && <span className='text-danger'>This field is required *</span>}

                            <label>Date</label>
                            <input type="date" {...register("date", { required: true })} />

                            <input className='btn btn-dark py-3 mt-5 ' type="submit" />

                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddBlogs;