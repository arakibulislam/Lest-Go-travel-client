import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const ManageAll = () => {
    const [bookingData, setBookingData] = useState([]);
    const [bookStatus, setBookStatus] = useState(1);
    useEffect(() => {
        axios.get('http://localhost:5000/booking')
            .then(res => {
                setBookingData(res.data);
            })
    }, [bookStatus]);

    const handleStatus = id => {
        axios.put(`http://localhost:5000/status/${id}`)
            .then(res => {
                console.log(res.data);
                setBookStatus(bookStatus + 1);
            })
    }

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure ?')
        if (procced) {
            axios.delete(`http://localhost:5000/deletebooking/${id}`)
                .then(res => {
                    console.log(res.data);
                    setBookStatus(bookStatus + 1);
                })
        }
    }

    return (

        <div className='px-5 manage-tb table-responsive all-margin'>
            <h1 className='tb py-3 ps-4 mb-3'>
                All Booking
            </h1>
            <p className='ms-4'>
                Total Booking : {bookingData.length}
            </p>
            <table class="table table-borderless tb">
                <thead class=" p-4">
                    <tr className='p-5'>
                        <th className='pt-3 ps-4' scope="col">#</th>
                        <th scope="col">Packege Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">email</th>
                        <th scope="col">price</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingData.map((data, index) => <tr key={data._id} className=''>
                            <th className='ps-4' scope="row">{index + 1}</th>
                            <td>{data.packagename}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>$ {data.price}</td>
                            <td style={{ color: data.color }}>{data.status}</td>
                            <td>
                                <Button className='btn btn-success me-2' onClick={() => handleStatus(data._id)} >
                                    <i class="bi bi-check-circle-fill text-white"></i>
                                </Button>
                                <Button className='btn btn-danger' onClick={() => handleDelete(data._id)} >
                                    <i class="bi bi-trash-fill  text-white"></i>
                                </Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default ManageAll;