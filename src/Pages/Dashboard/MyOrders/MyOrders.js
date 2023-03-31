import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);

    const url = `https://mobile-gadget-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],

        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });


            const data = await res.json();
            return data;
        }
    })

    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }

    return (
        <div>
            <h2 className='text-3xl mb-3'>My Orders</h2>
            <div className="overflow-x-auto" data-aos="fade-up"
        data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.title}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.location}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                            ><button
                                                className='btn btn-sm btn-accent'
                                            >Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-secondary'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;