import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImg from '../../../images/error.png'

const PageNotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center login all-margin '>
            <img className='error-img' src={errorImg} alt="" />
            
            <NavLink className='nav-link mb-5' to="/home"><Button className='btn-danger'>Back Home</Button></NavLink>
        </div>
    );
};

export default PageNotFound;