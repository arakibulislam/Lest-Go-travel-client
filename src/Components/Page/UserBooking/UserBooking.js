import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Contex/useAuth';

const UserBooking = () => {
    const [bookingData, setBookingData] = useState([]);
    const [bookStatus, setBookStatus] = useState(1);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://glacial-meadow-20329.herokuapp.com/booking/${user.email}`)
            .then(res => {

                setBookingData(res.data);
            })
    }, [bookStatus]);

    const handleDelete = id => {
        axios.delete(`https://glacial-meadow-20329.herokuapp.com/deletebooking/${id}`)
            .then(res => {
                console.log(res.data);
                setBookStatus(bookStatus + 1);
            })
    }
    return (
        <div className='manage-tb'>
            <div className='all-margin  container'>

                <div className='px-5 tb-1 table-responsive'>
                    <h1 className='tb py-3 ps-4 mb-5'>
                        My Booking
                    </h1>
                    <table class="table table-borderless tb mt-5">
                        <thead class=" p-4">
                            <tr className='p-5'>
                                <th scope="col">#</th>
                                <th scope="col">Packege Name</th>
                                <th scope="col">price</th>
                                <th scope="col">Duration</th>
                                <th scope="col">status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingData.map((data, index) => <tr key={data._id} className=''>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.packagename}</td>
                                    <td>{data.price}</td>
                                    <td>{data.duration}</td>
                                    <td style={{color: data.color}}>{data.status}</td>
                                    <td>
                                        <Button variant="outline-danger" className='rounded-pill d-flex align-items-center py-0 px-3' onClick={() => handleDelete(data._id)} >
                                            <i class="bi bi-trash fs-5  me-2"></i> Cancel
                                        </Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserBooking;