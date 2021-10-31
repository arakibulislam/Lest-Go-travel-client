import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Container className='bg-banner position-relative'>
            <div className=' text-center bg-banner-2'>
                <h1 className='text-banner'>
                    Eat, Sleep, And Travel
                </h1>
                <p className='w-50 mx-auto'>
                    Pack your bags. We’re going on vacation!

                    That’s exactly what an effective travel website should make you feel. It should activate the travel bug with vibrant imagery and vivid copy.
                </p>
                <Button className='btn btn-light py-3 px-5 banner-btn mt-4'> Book Now</Button>
            </div>
            <div className='position-relative'>
                <div className='  bg-white mx-4 banner-1'>
                    <div className='d-flex flex-lg-row flex-column justify-content-around pt-5 pb-3'>
                        <div className='text-center'>
                            <p>
                                <i className="fs-2 bi bi-geo-alt"></i>
                            </p>
                            <h5>
                                Location
                            </h5>
                            <p>
                                Sahara Desert
                            </p>
                        </div>
                        <div className='text-center'>
                            <p>
                            <i className="bi fs-2 bi-calendar-day"></i>
                            </p>
                            <h5>
                                Date
                            </h5>
                            <p>
                                30 Octobar, 2021
                            </p>
                        </div>
                        <div className='text-center'>
                            <p>
                            <i className="fs-2 bi bi-clock"></i>
                            </p>
                            <h5>
                            Trip Length
                            </h5>
                            <p>
                            14 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;