import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Contex/useAuth';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';


const ManageAll = () => {
    const {user} = useAuth();
    const [bookingData, setBookingData] = useState([]);
    const [bookStatus, setBookStatus] = useState(1);
    useEffect(() => {
        axios.get('https://glacial-meadow-20329.herokuapp.com/booking')
            .then(res => {
                setBookingData(res.data);
            })
    }, [bookStatus]);

    const handleStatus = id => {
        axios.put(`https://glacial-meadow-20329.herokuapp.com/status/${id}`)
            .then(res => {
                console.log(res.data);
                swal("Great!", "You have Approved the booking!", "success");
                setBookStatus(bookStatus + 1);
            })
    }

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure ?')
        if (procced) {
            axios.delete(`https://glacial-meadow-20329.herokuapp.com/deletebooking/${id}`)
                .then(res => {
                    console.log(res.data);
                    swal("Oh No!", "You cancle the booking successfully!", "success");
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
            {
                bookingData.length === 0 ? <LoadingAnimation></LoadingAnimation> :
                <table class="table table-borderless tb">
                <thead class=" p-4">
                    <tr className='p-5'>
                        <th className='pt-3 ps-4' scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Packege Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingData.map((data, index) => <tr key={data._id} className=''>
                            <th className='ps-4' scope="row">{index + 1}</th>
                            <td><img className='user-img-1 me-2 rounded-circle' src={user.photoURL} alt="" />{data.username}</td>
                            <td>{data.packagename}</td>                           
                            <td>$ {data.price}</td>
                            <td>{data.date}</td>
                            <td style={{ color: data.color }}>{data.status}</td>
                            <td>
                                {
                                    data?.status === 'pending' && <Button className='btn btn-success me-2' onClick={() => handleStatus(data._id)} >
                                    <i class="bi bi-check-circle-fill text-white"></i>
                                </Button>
                                }
                                <Button className='btn btn-danger' onClick={() => handleDelete(data._id)} >
                                    <i class="bi bi-trash-fill  text-white"></i>
                                </Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>}
        </div>

    );
};

export default ManageAll;