import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);


    const handleAddProduct = data => {
            const productInfo = {
                productName: data.name,
                price: data.price,
                condition: data.condition,
                mobile: data.mobile,
                email: data.email,
                location: data.location,
                category: data.category,
                purchaseDate: data.purchase

            }

            fetch('http://localhost:5000/add-product', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(productInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Product added Successfully');
                    navigate('/dashboard/my-product') 
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <div className='w-96 mx-5'>
            <h2 className='text-3xl mb-3'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register('name', {
                        required: 'Name is required'
                    })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600 mt-2'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register('price', {
                        required: 'Price is required'
                    })} className="input input-bordered w-full" />
                    {errors.price && <p className='text-red-600 mt-2'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <input type="text" {...register('condition', {
                        required: 'condition is required'
                    })} className="input input-bordered w-full" />
                    {errors.condition && <p className='text-red-600 mt-2'>{errors.condition.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text" {...register('mobile', {
                        required: 'mobile number is required'
                    })} className="input input-bordered w-full" />
                    {errors.mobile && <p className='text-red-600 mt-2'>{errors.mobile.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input defaultValue={user?.email}  type="email" 
                    {...register('email', {
                        required: 'Email is required'
                    })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 mt-2'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register('location', {
                        required: 'location is required'
                    })} className="input input-bordered w-full" />
                    {errors.location && <p className='text-red-600 mt-2'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" {...register('category', {
                        required: 'category is required'
                    })} className="input input-bordered w-full" />
                    {errors.category && <p className='text-red-600 mt-2'>{errors.category.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Purchase Year</span>
                    </label>
                    <input type="text" {...register('purchase', {
                        required: 'purchase is required'
                    })} className="input input-bordered w-full" />
                    {errors.purchase && <p className='text-red-600 mt-2'>{errors.purchase.message}</p>}
                </div>

                

                <input type="submit" value="Add Product" className='btn btn-accent w-full mt-5' />
            </form>
        </div>
    );
};

export default AddProduct;