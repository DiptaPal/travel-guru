import React,{ useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const {user, handleGoogle, handleFacebook, createUser, updateName } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState();

    const handleSubmit = event =>{
        let fullName;
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmpassword.value;
        if(password !== confirmPassword){
            setError("Password does not match");
        }
        fullName = firstName +' '+ lastName;

        createUser(email, password)
        .then(result => {
            toast('Registration Success!', {autoClose: 700})
            handleUpdateUser(fullName);
            console.log(result.user);
            form.reset();
        })
        .catch(error => {
            setError(error.message)
        })
         
    }

    const handleUpdateUser = (name) =>{
        updateName({displayName: name})
    }


    const singInWithGoogle = () =>{
        handleGoogle()
        .then(result => {
            toast.success("Login success!", {autoClose: 700})
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.massage)
        })
    }

    const signInWithFacebook = () =>{
        handleFacebook()
        .then(result => {
            toast.success("Login success!", {autoClose: 700})
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.massage)
        })
    }
    return (
        <div>
            <div className='bg-gray-700' >
                <Navbar></Navbar>
            </div>
            <div className='mt-10'>
                <div className="w-full max-w-lg p-8 space-y-3 mx-auto  text-gray-800 text-left">
                    <div className='border rounded-md border-gray-400 p-8 space-y-3'>
                        <h1 className="text-2xl font-bold">Login</h1>
                        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <input type="text" name="firstname" id="firstname" placeholder="First Name" className="w-full outline-none py-3 border-b-2 border-gray-400 text-gray-800 focus:border-yellow-500 placeholder:text-black" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="w-full outline-none py-3 border-b-2 border-gray-400 text-gray-800 focus:border-yellow-500 placeholder:text-black" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="email" name="email" id="email" placeholder="Username or email" className="w-full outline-none py-3 border-b-2 border-gray-400 text-gray-800 focus:border-yellow-500 placeholder:text-black" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full outline-none py-3 border-b-2 border-gray-400 text-gray-800 focus:border-yellow-500 placeholder:text-black" required/>
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" className="w-full outline-none py-3 border-b-2 border-gray-400 text-gray-800 focus:border-yellow-500 placeholder:text-black" required/>
                            </div>
                            <div>
                                <p className='text-red-500 text-sm text-center'>{error}</p>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm text-black bg-yellow-500 font-semibold">Register</button>
                            <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                                <Link to="/login" className="ml-1 underline text-yellow-500">Login</Link>
                            </p>
                        </form>
                    </div>
                    <div className="flex items-center pt-4 space-x-1 px-4">
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        <p className="px-3 text-sm text-gray-600">Or</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    </div>
                    <div>
                        <button onClick={signInWithFacebook} aria-label="Log in with Google" className="p-3 rounded-sm w-full">
                            <div className='flex border rounded-full border-gray-300  py-2 px-3 items-center'>
                                <FaFacebook className='text-blue-600 text-3xl'></FaFacebook>
                                <div className='w-full text-center'>
                                    <p className='font-semibold'>Continue with Facebook</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={singInWithGoogle} aria-label="Log in with Google" className="p-3 rounded-sm w-full">
                            <div className='flex border rounded-full border-gray-300  py-2 px-3 items-center'>
                                <FcGoogle className='text-blue-600 text-3xl'></FcGoogle>
                                <div className='w-full text-center'>
                                    <p className='font-semibold'>Continue with Facebook</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;