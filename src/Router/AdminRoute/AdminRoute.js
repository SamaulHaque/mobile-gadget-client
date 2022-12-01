import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if(loading || isAdminLoading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }

   if(user && isAdmin){
    return children;
   }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;