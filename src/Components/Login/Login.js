import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Contex/useAuth';
import search from '../../images/search.png'



const Login = () => {
    const {loginWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {

            })
    }



    return (
        <div className='overflow-hidden'>
            <div className='d-flex flex-column justify-content-center align-items-center login '>
            <h1 className='fw-bolder mb-5'>Login With Google</h1>
                <div className="links">
                    <Button variant="outline-dark" onClick={handelGoogleLogin} className='google d-flex justify-content-center align-items-center px-5 py-4'> <img className='me-3' src={search} alt="" /> <span className='fs-5 '>Google</span></Button>
                </div>
        </div>
        </div>
    );
};

export default Login;