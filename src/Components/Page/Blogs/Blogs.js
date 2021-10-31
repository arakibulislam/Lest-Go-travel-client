import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';

const Blogs = () => {

    const [blogData, setblogData] = useState([]);

    useEffect(() => {
        axios.get('https://glacial-meadow-20329.herokuapp.com/blogs')
            .then(res => {
                setblogData(res.data)
            })
    }, [])
    return (
        <div id="blogs" className='py-3'>
            <Container className='my-5 px-lg-5 px-4  package-bg'>
                <h5 className='text-muted fw-bolder text-center pt-4'>
                    BLOG & NEWS
                </h5>
                <h1 className='packege-text text-center pb-4'>
                    A Little Story From Us
                </h1>
                {blogData.length === 0 ? <div className='d-flex justify-content-center align-items-center'><Spinner className='spinner' animation="grow" variant="warning" /><h1 className='text-warning'>Loading....</h1></div> :
                    <div className='row'>
                        {
                            blogData.map(data =>
                                <div key={data._id} className='col-lg-4 col-md-6 col-12 g-4'>
                                    <Card className='p-card border-0'>
                                        <div className='overflow-hidden'>
                                            <Card.Img className='img-1 ' variant="top" src={data.img} />
                                        </div>
                                        <Card.Body className=''>

                                            <div className='d-flex justify-content-between'>
                                                <Card.Text>
                                                    <b><i className="bi bi-person-lines-fill me-2"></i>{data.name}</b>
                                                </Card.Text>
                                                <Card.Text>
                                                    <i className="bi bi-calendar-month me-1"></i> {data.date}
                                                </Card.Text>
                                            </div>
                                            <Card.Title className='fs-5 fw-bold text-muted '> {data.title.slice(0, 20)}</Card.Title>

                                            <Card.Text>
                                                {data.description.slice(0, 100)}
                                            </Card.Text>
                                            <Button className='border-0 bg-white text-dark p-0 fw-bold'> Read More<i className="bi bi-arrow-right-circle ms-2"></i></Button>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>}
            </Container>
        </div>
    );
};

export default Blogs;