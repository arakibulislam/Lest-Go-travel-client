import React from 'react';
import { Button, Container } from 'react-bootstrap';
import imgOne from '../../../images/pic_Asset-2.png'
import imgTwo from '../../../images/pic_Asset-3.png'
import imgThree from '../../../images/pic_Asset-4.png'

const About = () => {
    return (
        <Container className='d-flex flex-lg-row flex-column justify-content-around align-items-start about mb-5 pb-4 mt-lg-0 mt-5'>
            <div className='d-flex justify-content-start my-lg-0 my-3 align-items-center '>
                <div className=' me-4'>
                    <img className='img '  src={imgOne} alt="" />
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
                    <img  className='img ' src={imgThree} alt="" />
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
        </Container>


    );
};

export default About;