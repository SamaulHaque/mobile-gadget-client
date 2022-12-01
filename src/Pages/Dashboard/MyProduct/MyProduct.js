import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProduct = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/my-product?email=${user?.email}`

    const {data: products = []} = useQuery({
        queryKey: ['bookings', user?.email],

        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
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
                            <td></td>
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