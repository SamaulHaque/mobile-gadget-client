import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const { data: buyers = [],} = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyer');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h2 className='text-3xl mb-3'>All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Status</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.accountType}</td>
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;