import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Contex/useAuth';
import Footer from '../../Footer/Footer';
import swal from 'sweetalert';

import './Booking.css'

const Booking = () => {
    const { packegeId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [packegeDetails, setPackegeDetails] = useState({});
    const { user } = useAuth();
    const history = useHistory();



    useEffect(() => {
        reset();
    }, [packegeDetails])

    useEffect(() => {
        axios.get(`https://glacial-meadow-20329.herokuapp.com/singlepackege/${packegeId}`)
            .then(res => {
                setPackegeDetails(res.data)
            })
    }, [])

    const onSubmit = data => {
        const bookingInfo = {
            status: "pending",
            color: "#B22222",
            ...data
        }
        axios.post('https://glacial-meadow-20329.herokuapp.com/booking', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Good job!", "You have successfully booked the packege!", "success");
                    history.push('/userbooking');
                }
            })
    }



    return (
        <div className='login all-margin'>
            <Container >
                <div style={{ backgroundImage: `url(${packegeDetails.img})` }} className='booking d-flex justify-content-center align-items-center py-5'>
                    <h1 className=' py-3 px-4'>
                        Tour Details
                    </h1>
                </div>
                <div className='row container-lg justify-content-between my-5 mx-auto'>
                    <div className='col-lg-8 col-12 mb-lg-0 mb-5  mx-auto'>
                        <div className='px-lg-4 px-0'>
                            <h1>
                                {packegeDetails.name}
                            </h1>
                            <img className='img-fluid tour-img mb-5 mt-4' src={packegeDetails.img} alt="" />
                            <h5>
                                Tour Description
                            </h5>
                            <p>
                                <small>{packegeDetails.description}</small>
                            </p>
                            <h4>
                                Book Now
                            </h4>
                            <div className=''>
                                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column '>
                                    <div className='d-flex flex-lg-row  flex-column'>
                                        <div className='w-100 me-lg-4 me-0'>
                                            <label>Name</label>
                                            <input {...register("username")} defaultValue={user.displayName} />

                                        </div>

                                        <div className='w-100'>
                                            <label>Email</label>
                                            <input {...register("email")} defaultValue={user.email} />
                                        </div>
                                    </div>

                                    <label>Package Name</label>
                                    <input {...register("packagename")} defaultValue={packegeDetails.name} />

                                    <div className='d-flex flex-lg-row  flex-column'>
                                        <div className='w-100 me-lg-4 me-0'>
                                            <label>Price</label>
                                            <input type="number" {...register("price")} defaultValue={packegeDetails.price} />
                                        </div>
                                        <div className='w-100'>
                                            <label>Date</label>
                                            <input type="date" {...register("date",{ required: true })} />
                                        </div>
                                    </div>

                                    <label>Duration</label>
                                    <input {...register("duration")} defaultValue={packegeDetails.duration} />
                                    <br />

                                    <input className='btn btn-outline-dark py-3 w-50 mx-auto' type="submit" />

                                </form>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 col-12 px-lg-4 px-0'>
                        <div className='tour-guide py-5 px-4 h-100 '>
                            <h1 className='mb-5'>
                                ${packegeDetails.price} <small className='fs-6'>/ person</small>
                            </h1>
                            <h4>
                                Tour Guide
                            </h4>
                            <div className='text-center'>
                                <img className='img-fluid rounded-circle my-4' src="https://kit.juliha.com/walkon/wp-content/uploads/sites/17/2021/06/travel-image-traveler-look-on-the-mountain-lake-tr-SVAQUBG_2-1536x1536.jpg" alt="" />
                                <h5>
                                    {packegeDetails.guide}
                                </h5>
                                <p>
                                    Tour Guide
                                </p>
                            </div>
                            <div className='my-5'>
                                <h5>
                                    Tour Details
                                </h5>
                                <p>
                                    {packegeDetails.location}
                                </p>
                                <p>
                                    {packegeDetails.duration}
                                </p>
                                <p>
                                    {packegeDetails.person}
                                </p>
                                <p>
                                    {packegeDetails.date}
                                </p>
                            </div>
                            <div className='my-5'>
                                <h4>
                                    Location
                                </h4>
                                <iframe className='w-100 rounded-3 my-3' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7302.067378268406!2d90.27384268303221!3d23.781814644453412!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635512016240!5m2!1sen!2sbd"  ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Booking;