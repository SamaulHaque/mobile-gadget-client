import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation()

    if(loading || isSellerLoading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }

   if(user && isSeller){
    return children;
   }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;