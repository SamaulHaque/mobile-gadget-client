import React, { useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useToken from '../hooks/useToken';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const [token] = useToken();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/dashboard'

   if(token){
    navigate(from, {replace: true});

   }

    return (
        <div className='mx-5'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='mb-2'><Link to='/dashboard'>My Orders</Link></li>
                        
                      {
                        isSeller && <>
                          <li className='mb-2'><Link to='/dashboard/add-product'>Add A Product</Link></li>
                        <li className='mb-2'><Link to='/dashboard/my-product'>My Product</Link></li>
                        </>
                      }
                            
                        
                        {
                            isAdmin && <>
                            <li className='mb-2'><Link to='/dashboard/allSeller'>All Seller</Link></li>
                            <li className='mb-2'><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                            <li className='mb-2'><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;