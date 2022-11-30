import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loginError, setLoginError] = useState('')
    const {logIn, signInWithGoogle} = useContext(AuthContext)
 

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        setLoginError('')

        logIn(data.email, data.password)
        .then(() => {
            navigate(from, {replace: true});
        })
        .catch((error) => {
            console.error(error)
            setLoginError(error.message)
        })
    }


    const handleGoogleLogin = () => {

        const provider = new GoogleAuthProvider()

        signInWithGoogle(provider)
        .then(() => {
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className='h-[480px] flex justify-center items-center my-20'>
            <div className='w-96 p-7 border'>
                <h3 className='text-3xl text-center mb-5'>Login</h3>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: "Email Address is Required." })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", {

                            required: "Password is Required.",
                           
                        })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                        
                    </div>


                    <input type="submit" value="Login" className='btn btn-accent w-full mt-5' />
                    {loginError && <p className='text-red-600 mt-1'>{loginError}</p>}
                </form>
                <p className='mt-1 text-sm text-center'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;