import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../Contex/useAuth';
import swal from 'sweetalert';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';


const MyBooking = () => {
    const [bookingData, setBookingData] = useState([]);
    const [bookStatus, setBookStatus] = useState(1);
    const { user } = useAuth();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://glacial-meadow-20329.herokuapp.com/booking/${user.email}`)
            .then(res => {

                setBookingData(res.data);


            })
    }, [bookStatus]);

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure ?')
        if (procced) {
            axios.delete(`https://glacial-meadow-20329.herokuapp.com/deletebooking/${id}`)
                .then(res => {
                    console.log(res.data);
                    swal("Oh No!", "You have cancle your booking successfully!", "success");
                    setBookStatus(bookStatus + 1);

                })
        }

    }
    return (
        <div className='all-margin manage-tb'>
            <div className='px-5 tb-1 table-responsive'>
                <h1 className='tb py-3 ps-4 mb-3'>
                    My Booking
                </h1>
                <p className='ms-4   position-relative'>
                    Total Booking : {bookingData.length}
                </p>
                { 
                    bookingData.length === 0 ? <LoadingAnimation></LoadingAnimation> :

                    <table class="table table-borderless tb mt-3 py-5">
                        <thead class="">
                            <tr className=''>
                                <th className='pt-3 ps-5' scope="col">#</th>
                                <th scope="col">Packege Name</th>
                                <th scope="col">price</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookingData.map((data, index) => <tr key={data._id} className=''>

                                    <th className=' ps-5' scope="row">{index + 1}</th>
                                    <td>{data.packagename}</td>
                                    <td>$ {data.price}</td>
                                    <td>{data.duration}</td>
                                    <td>{data.date}</td>
                                    <td style={{ color: data.color }}>{data.status}</td>
                                    <td>
                                        <Button variant="outline-danger" className='rounded-pill d-flex align-items-center py-0 px-3' onClick={() => handleDelete(data._id)} >
                                            <i class="bi bi-trash fs-5  me-2"></i> Cancel
                                        </Button>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default MyBooking;