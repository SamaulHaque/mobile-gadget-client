import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { data: buyers = [], refetch} = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://mobile-gadget-server.vercel.app/buyer');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer =  id => {
        fetch(`https://mobile-gadget-server.vercel.app/buyer/${id}`, {
            method:'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                window.confirm('Want to delete?')
                toast.success(`This Buyer deleted successfully.`)
                
            }
        })
        
    }

    return (
        <div>
            <h2 className='text-3xl mb-3'>All Buyer</h2>
            <div className="overflow-x-auto" data-aos="fade-up"
        data-aos-easing="ease-out-cubic" data-aos-duration="1000">
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
                                <td><button 
                                onClick={()=> handleDeleteBuyer(buyer?._id)}
                                className='btn btn-sm btn-error'>
                                Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;