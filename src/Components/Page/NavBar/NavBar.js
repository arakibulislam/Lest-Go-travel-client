import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../Contex/useAuth';
import logo from '../../../images/logo.png'

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [changeHeader, setChangeHeader] = useState(false);
    const [bookingData, setBookingData] = useState([]);


    useEffect(() => {
        axios.get(`https://glacial-meadow-20329.herokuapp.com/booking/${user.email}`)
            .then(res => {
                
                setBookingData(res.data);
            })
    }, [bookingData]);

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }


    window.addEventListener('scroll', onChangeHeader)
    return (
        <div className={changeHeader ? "bg-white fixed-top shadow-sm" : "bg-transparent fixed-top "}>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand >
                    <NavHashLink className='nav-link fw-bold' to="/home#home">  <img className='' src={logo} alt="" /></NavHashLink>
                      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-lg-auto  d-flex align-items-lg-center align-items-start ms-lg-0">
                            <NavHashLink className='nav-link fw-bold' to="/home#header">Home</NavHashLink>
                            <NavHashLink className='nav-link fw-bold' to="/home#packege">Packege</NavHashLink>
                            <NavHashLink className='nav-link fw-bold' to="/home#blogs">Blogs</NavHashLink>
                            <NavHashLink className='nav-link fw-bold' to="/home#moments">Moments</NavHashLink>
                            
                            <NavLink className='nav-link fw-bold position-relative me-5' to="/userbooking">
                                Booking
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {bookingData.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>

                            <Dropdown>
                                <Dropdown.Toggle className='bg-transparent border-0 d-flex align-items-end' id="dropdown-basic">
                                    <img className='user-img me-2 rounded-circle' src={user.photoURL} alt="" />
                                    <p className='text-dark ms-3 mt-3'>{user.displayName}</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='border-0 drop p-4 me-5'>
                                    <div className='  text-center '>
                                        <img className=' me-2 rounded-circle mb-3' src={user.photoURL} alt="" />
                                        <p >
                                            {user.displayName}
                                        </p>
                                        <hr />
                                    </div>
                                    <div className='text-start'>
                                        <NavDropdown.Item >
                                            <NavLink className='nav-link' to="/admin">Admin</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <NavLink className='nav-link' to="/packege">Our Packeges</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <NavLink className='nav-link' to="/blogs">Our Blogs</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink className='nav-link' to="/moments">All Moments</NavLink>
                                        </NavDropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            {!user?.email ? <NavLink className='nav-link me-2' to="/login"><i className="fas fa-user me-2"></i>Log In</NavLink> : <Button variant="outline-dark" onClick={logOut}><i className="fas fa-sign-out-alt me-2"></i>Logout</Button>}
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav className='d-flex align-items-lg-center align-items-start ms-lg-0 '>
                            {!user?.email ? <NavLink className='nav-link' to="/login"><i className="fas fa-user me-2"></i>Log In</NavLink> : <Button className='bg-transparent border-0' onClick={logOut}><i className="text-dark bi bi-box-arrow-right fw-bolder fs-2 me-5"></i></Button>}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default NavBar;