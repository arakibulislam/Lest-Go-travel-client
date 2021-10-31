import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
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
        <div className='py-3'>
            <Container className='my-5 px-lg-5 px-4  package-bg'>
                <h5 className='text-muted fw-bolder text-center pt-4'>
                OUR DESTINATION
                </h5>
                <h1 className='packege-text text-center pb-4'>
                    Find Your Peace Out There
                </h1>
                <div className='row'>

                    {
                        packegeData.map(data =>
                            <div key={data._id} className='col-lg-3 col-md-6 col-12 g-4'>
                                <Card className='p-card border-0'>
                                    <div className='overflow-hidden'>
                                        <Card.Img className='img-1 ' variant="top" src={data.img} />
                                    </div>
                                    <Card.Body className='text-center'>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>
                                            {data.description.slice(0, 100)}
                                        </Card.Text>
                                        <NavLink to={`/booking/${data._id} `}>
                                            <Button variant="outline-dark">Book Now</Button>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }




                </div>
            </Container>
        </div>
    );
};

export default Package;