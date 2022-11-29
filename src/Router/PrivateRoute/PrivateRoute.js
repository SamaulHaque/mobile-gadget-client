import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }

   if(user){
    return children;
   }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;