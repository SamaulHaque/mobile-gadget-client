import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [signUpError, setSignUpError] = useState(null)
    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
   

    const handleSignUp = data => {
        createUser(data.email, data.password)
        .then(() => {
            toast.success('User Created Successfully')
            setSignUpError('')
            navigate('/')
            const userInfo = {
                displayName: data.name
            }

            updateUser(userInfo)
            .then(() => {
                saveUserToDb(data.name, data.email)
            })
            .catch(error => {
                console.error(error)
            })
        })
        .catch((error) => {
            console.error(error)
            setSignUpError(error.message)
        })
    }

    const saveUserToDb = (name, email) => {
        const user = {name, email};
        fetch('https://doctors-portal-server-five-kappa.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {

        })
    }

    
    const handleGoogleLogin = () => {

        const provider = new GoogleAuthProvider()

        signInWithGoogle(provider)
        .then(() => {})
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className='h-[480px] flex justify-center items-center my-20'>
            <div className='w-96 p-7 border'>
                <h3 className='text-3xl text-center mb-5'>Sign Up</h3>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name', {
                            required: 'Name is required'
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600 mt-2'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: 'Email is required'
                        })} className="input input-bordered w-full" />
                         {errors.email && <p className='text-red-600 mt-2'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: 'Password required',
                            minLength: {
                                value: 6,
                                message: "min length is 6 or more."
                              },
                              pattern:{
                                value:/(?=.*[A-Z].*[(?=.*[!@#$&*])/,
                                message:'Password must be One Upper case, One special character and one number.'
                              }
                        })}  className="input input-bordered w-full" />
                         {errors.password && <p className='text-red-600 mt-2'>{errors.password.message}</p>}
                    </div>


                    <input type="submit" value="Sign Up" className='btn btn-accent w-full mt-5' />
                    {signUpError && <p className='text-red-600 mt-1'>{signUpError}</p>}
                </form>
                <p className='mt-1 text-sm text-center'>Already Have an Account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;