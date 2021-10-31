import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import imgOne from '../../../images/pic_Asset-2.png'
import imgTwo from '../../../images/pic_Asset-3.png'
import imgThree from '../../../images/pic_Asset-4.png'

const About = () => {
    return (
        <Container>
            <div className='d-flex flex-lg-row flex-column justify-content-around align-items-start about mb-5 pb-4 mt-lg-0 mt-5'>
                <div className='d-flex justify-content-start my-lg-0 my-3 align-items-center '>
                    <div className=' me-4'>
                        <img className='img ' src={imgOne} alt="" />
                    </div>
                    <div>
                        <h5>
                            Hiking Track
                        </h5>
                        <Button variant="outline-dark">
                            120 Track
                        </Button>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-start my-lg-0 my-3'>
                    <div className=' me-4' >
                        <img className='img ' src={imgTwo} alt="" />
                    </div>
                    <div>
                        <h5>
                            Camping Spot
                        </h5>
                        <Button variant="outline-dark">
                            96 Spot
                        </Button>
                    </div>
                </div>
                <div className='d-flex justify-content-start align-items-center  my-lg-0 my-3'>
                    <div className='me-4'>
                        <img className='img ' src={imgThree} alt="" />
                    </div>
                    <div>
                        <h5>
                            Photo Spot
                        </h5>
                        <Button variant="outline-dark">
                            235 Spot
                        </Button>
                    </div>
                </div>
            </div>
            <div className='row align-items-center py-5'>
                <div className='col-lg-6 col-12'>
                    <h5 className='text-muted fw-bolder text-start pt-4'>
                        ABOUT LET'S GO
                    </h5>
                    <h1 className='packege-text text-start pb-4'>
                        Explore Mysterious Places With Us
                    </h1>
                    <p>
                        <small className='text-muted'>
                        Whether your idea of home is a luxury villa, a cosy cottage, a bungalow with a private pool or a jungle stay, we've hand-picked stays for every mood.
                        </small>
                    </p>
                    <Button className='btn btn-dark rounded-pill py-3 px-5  mt-4'> Learn More</Button>
                </div>
                <div className='col-lg-6 col-12'>
                    <Card className='border-0'>
                        <Card.Img className='rounded-pill' variant="top " src="https://kit.juliha.com/walkon/wp-content/uploads/sites/17/2021/06/ari-he-idIUCsynuS4-unsplash-1536x1152.jpeg" />
                    </Card>
                </div>
            </div>
        </Container>


    );
};

export default About;