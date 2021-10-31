import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Contex/useAuth';
import swal from 'sweetalert';


const MyBooking = () => {
    const [bookingData, setBookingData] = useState([]);
    const [bookStatus, setBookStatus] = useState(1);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/booking/${user.email}`)
            .then(res => {

                setBookingData(res.data);
            })
    }, [bookStatus]);

    const handleDelete = id => {

        axios.delete(`http://localhost:5000/deletebooking/${id}`)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Are you sure?",
                    text: "Once Cancel, you will not be able to recover this Booking",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("! Your Booking has been Cancled!", {
                                icon: "success",
                            });
                            setBookStatus(bookStatus + 1);
                        } else {
                            swal("Your Booking is safe!");
                        }
                    });
                
            })

    }
    return (
        <div className='all-margin manage-tb '>
            <div className='px-5 tb-1 table-responsive'>
                <h1 className='tb py-3 ps-4 mb-3'>
                    My Booking
                </h1>
                <p className='ms-4'>
                    Total Booking : {bookingData.length}
                </p>
                <table class="table table-borderless tb mt-3 py-5">
                    <thead class="">
                        <tr className=''>
                            <th className='pt-3 ps-5' scope="col">#</th>
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
                                <th className=' ps-5' scope="row">{index + 1}</th>
                                <td>{data.packagename}</td>
                                <td>$ {data.price}</td>
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
    );
};

export default MyBooking;