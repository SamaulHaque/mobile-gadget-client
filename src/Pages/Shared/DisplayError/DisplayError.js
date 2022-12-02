import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate('/login')
        })
        .then(error => {
            console.error(error)
        })
    }
    const error = useRouteError();
    return (
        <div className='m-5'>
           <p className='text-red-600'>Something went wrong!!</p> 
           <p className='text-red-600'>{error.statusText || error.message}</p>
           <h4 className='text-3xl'>Please <Link className='text-blue-600'><button onClick={handleLogOut}>Sign out</button></Link> and log back in.</h4>
        </div>
    );
};

export default DisplayError;