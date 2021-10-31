import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Contex/useAuth';


const PrivatRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <Spinner animation="grow" variant="light" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }}>
                </Redirect>
            }
        >
        </Route>
    );
};

export default PrivatRoute;