import React from 'react';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import useAuth from '../../../Contex/useAuth';
import AddBlogs from '../AddBlogs/AddBlogs';
import AddPackege from '../AddPackege/AddPackege';
import ManageAll from '../ManageAll/ManageAll';
import MyBooking from '../MyBooking/MyBooking';
import './Admin.css'

const Admin = () => {
    const [control, setControl] = useState("myBooking");
    const { user } = useAuth();
    const [sidenav, setSidenav] = useState(true);

    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    }

    // auto hide 
    window.addEventListener('resize', () => {
        if (window.innerWidth < 994) {
            setSidenav(false)
        } else {
            setSidenav(true)
        }
    })
    return (

        <div className='row'>
            <div className='col-2 '>
                <div className=''>
                    {sidenav && (
                        <nav className="d-flex position-fixed flex-column sidenav bg-secondary vh-100 px-4">
                            <div className="d-flex flex-column align-items-center flex-wrap mt-5 pt-5">
                                <div className="mt-4">
                                    <img
                                        src={user?.photoURL}
                                        className="mx-auto  rounded-circle"
                                        alt={user?.displayName}
                                    />
                                </div>
                                <div className="pt-4">
                                    <span className=" fs-5 text-white">{user?.displayName}</span>
                                </div>
                            </div>
                            <div className="mt-5 mb-4">
                                <ul className="me-4">
                                    <li onClick={()=> setControl('myBooking')} className="d-flex align-items-center ">
                                        <Nav.Link className="p-3 "  >
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 text-white btn btn-outline-dark border-0">
                                                    My Booking
                                                </span>
                                            </div>
                                        </Nav.Link>
                                    </li>
                                    <li onClick={()=> setControl('manageAll')} className="d-flex align-items-center">
                                        <Nav.Link className="p-3 "  >
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 text-white btn btn-outline-dark border-0">
                                                    Manage All
                                                </span>
                                            </div>
                                        </Nav.Link>
                                    </li>
                                    <li onClick={()=> setControl('addPackege')} className="d-flex align-items-center">
                                        <Nav.Link className="p-3 "  >
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 text-white btn btn-outline-dark border-0">
                                                   Add Packege
                                                </span>
                                            </div>
                                        </Nav.Link>
                                    </li>
                                    <li onClick={()=> setControl('addBlogs')} className="d-flex align-items-center">
                                        <Nav.Link className="p-3 "  >
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 text-white btn btn-outline-dark border-0">
                                                   Add Blogs
                                                </span>
                                            </div>
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    )}

                    {/* //menu icons  */}
                    <div className="position-fixed  sidenav-icon" onClick={handlenav}>
                        <i className="bi bi-arrow-right-circle fs-1 fw-bolder text-dark"></i>
                    </div>
                </div>
            </div>
            <div className='col-lg-10 col-12'>
                {control === "myBooking" && <MyBooking></MyBooking>}
                {control === "manageAll" && <ManageAll></ManageAll>}
                {control === "addPackege" && <AddPackege></AddPackege>}
                {control === "addBlogs" && <AddBlogs></AddBlogs>}
            </div>
        </div>
    );
};

export default Admin;