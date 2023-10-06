import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, Logout} = useContext(AuthContext);
    const [open, setOpen] = useState(false)

    const logOut = () =>{
        Logout()
        .then(() =>{
            toast.info("Logout Successful!", {autoClose: 700})
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto brightness-100 z-50 py-5'>
            <nav className="flex flex-wrap items-center justify-between w-full py-2 md:py-0 px-4 text-lg text-gray-700 bg-transparent">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className='h-12' />
                    </Link>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 text-white cursor-pointer lg:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setOpen(!open)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <div className={`top-0 w-full lg:flex lg:items-center lg:w-auto ${open ? 'static':'hidden'}`} id="menu">
                    <ul className="w-full pt-4 text-base text-gray-700 lg:flex lg:justify-between lg:items-center lg:pt-0 gap-4">
                        <li>
                            <div className='w-60 flex items-center mx-auto lh:mx-0 bg-transparent border-2 px-2 rounded-md' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                                <HiOutlineMagnifyingGlass className='text-2xl text-white'></HiOutlineMagnifyingGlass>
                                <input className='pl-2 py-1.5 w-full block border-none outline-none rounded-sm bg-transparent text-white placeholder:text-white' type="text" placeholder='Search your Destination...' />
                            </div>
                        </li>
                        <li>
                            <Link className="block hover:text-purple-400 text-white" to="#">News</Link>
                        </li>
                        <li>
                            <Link className="block hover:text-purple-400 text-white" to="#">Destination</Link>
                        </li>
                        <li>
                            <Link className="block hover:text-purple-400 text-white" to="#">Blog</Link>
                        </li>
                        <li>
                            <Link className="block hover:text-purple-400 text-white" to="#">Contact</Link>
                        </li>
                        <li>
                            <div className='block pt-3 lg:pt-0'>
                                {
                                    user?.displayName ?  
                                    <button onClick={logOut} >
                                        <Link to='/login' title='Logout' className="rounded-md hover:bg-red-500 py-1.5 px-6 text-black bg-yellow-500">{user?.displayName}</Link>
                                    </button> : 
                                    <Link className="rounded-md hover:text-purple-400 py-1.5 px-6 text-black bg-yellow-500" to="/login">Login</Link>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;