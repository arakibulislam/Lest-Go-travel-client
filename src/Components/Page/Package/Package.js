import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Package = () => {
    const [packegeData, setPackegeData] = useState([]);

    useEffect(() => {
        axios.get('https://glacial-meadow-20329.herokuapp.com/packege')
            .then(res => {
                setPackegeData(res.data)
            })
    }, [])



    return (
        <div id="packege" className='py-3'>
            <Container className='my-5 px-lg-5 px-4  package-bg'>
                <h5 className='text-muted fw-bolder text-center pt-4'>
                    OUR DESTINATION
                </h5>
                <h1 className='packege-text text-center pb-4 '>
                    Find Your Peace Out There
                </h1>
                {
                    packegeData.length === 0 ? <div className='d-flex justify-content-center align-items-center'><Spinner className='spinner' animation="grow" variant="warning" /><h1 className='text-warning'>Loading....</h1></div> :

                    <div className='row'>

                        {
                            packegeData.map(data =>
                                <div key={data._id} className='col-lg-3 col-md-6 col-12 g-4'>
                                    <Card className='p-card border-0'>
                                        <div className='overflow-hidden'>
                                            <Card.Img className='img-1 ' variant="top" src={data.img} />
                                        </div>
                                        <Card.Body className=''>
                                            <div className='d-flex justify-content-between'>
                                                <Card.Text>
                                                    <b>${data.price}</b>/ <small>person</small>
                                                </Card.Text>
                                                <Card.Text>
                                                    <small>{data.duration}</small>
                                                </Card.Text>
                                            </div>
                                            <Card.Title className='fs-4 fw-bold text-muted mt-3 mb-4'> <i className="bi bi-geo-alt me-2 fs-4"></i>{data.name}</Card.Title>
                                            <Card.Text className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <img className='rounded-circle user-img ' src={data.guideImg} alt="" />
                                                    <span className='text-muted mx-2'><b>{data.guide}</b></span>
                                                </div>
                                                <NavLink to={`/booking/${data._id} `}>
                                                    <Button variant="outline-dark">Book Now</Button>
                                                </NavLink>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>
                }
            </Container>
        </div>
    );
};

export default Package;