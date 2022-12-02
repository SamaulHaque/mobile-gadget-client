import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProduct = () => {
    
    const {user} = useContext(AuthContext);

    const url = `https://mobile-gadget-server.vercel.app/my-product?email=${user?.email}`

    const {data: products = [], refetch} = useQuery({
        queryKey: ['bookings', user?.email],

        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

  const handleAddToAdvertised = id => {
        // fetch(`https://mobile-gadget-server.vercel.app/my-product/${id}`)
        // .then(res => res.json())
        // .then(getData => {
        //         fetch(`https://mobile-gadget-server.vercel.app/advertises/${id}`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type' : 'application/json'
        //         },
        //         body: JSON.stringify(getData)
        //     })
        //     .then(res => res.json())
        //     .then(postData => {
        //         if(postData.acknowledged){
        //             toast.success('Added Successfully');
        //         }
        //         else{
        //             toast.error(postData.message)
        //         }
        //     })
        // })
  }

    const handleDeleteProduct =  id => {
        fetch(`https://mobile-gadget-server.vercel.app/my-product/${id}`, {
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
                toast.success(`This Product deleted successfully.`)
                
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-3'>My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Add to Advertised</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        products.map((product, i) => 
                            <tr key={product._id}>
                            <th>{i+1}</th>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.condition}</td>
                            <td>
                                <button className='btn btn-accent btn-sm'
                                onClick={()=>handleAddToAdvertised(product?._id)}
                                >Add to Advertised</button>
                            </td>
                            <td>
                                <button 
                                onClick={()=>handleDeleteProduct(product?._id) }
                                className='btn btn-error btn-sm'
                                >Delete</button>
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

export default MyProduct;