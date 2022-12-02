import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: seller = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }  
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successfully.')
                refetch();
            }
        })
    }

    const handleDeleteUser =  id => {
        fetch(`http://localhost:5000/seller/${id}`, {
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
                toast.success(`This Seller deleted successfully.`)
                
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-3'>All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((user, i) => <tr key={user._id}>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.email}</td>

                            <td>{user.role !== 'admin' && <button 
                            onClick={() => handleMakeAdmin(user._id)}
                            className='btn btn-sm btn-secondary'>Make Admin</button>}
                            </td>

                            <td><button
                            onClick={()=>handleDeleteUser(user?._id)}
                            className='btn btn-sm btn-error'
                            >Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;