import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
// import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
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
                    <ul className="menu p-4 w-80  text-base-content">
                        <li className='mb-2'><Link to='/dashboard'>My Orders</Link></li>
                        {/* {
                            isAdmin && <>
                                <li className='mb-2'><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li className='mb-2'><Link to='/dashboard/add-doctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/manage-doctors'>Manage Doctors</Link></li>
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;