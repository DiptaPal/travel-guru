import React, { useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../Navbar/Navbar';
import bgImage from '../../assets/Rectangle1.png'

const Booking = () => {
    const place = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const location = useLocation();
    const navigate = useNavigate()

    return (
        <div className='relative'>
            <div>
                <img src={bgImage}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="" />
                <div className='relative bg-gray-900 bg-opacity-75 pb-60'>
                    <div>
                        <Navbar></Navbar>
                    </div>
                    <div className='container mx-auto'>
                        <div className='text-white grid grid-cols-12 gap-0 xl:gap-12 mt-20 xl:mt-[20vh]'>
                            <div className='col-span-12 lg:col-span-5'>
                                <h1 className='text-7xl font-bold text-yellow-500 text-center lg:text-left'>{place?.name}</h1>
                                <p className='text-xl mt-8 text-justify text-clip overflow-hidden'>{place?.about}</p>

                            </div>
                            <div className='col-span-12 lg:col-span-7 mt-10 lg:mt-0'>
                                <div className="max-w-lg mx-auto bg-white rounded-md flex flex-col p-6 sm:p-10 text-gray-800">
                                    <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <label htmlFor="origin" className="text-sm">Origin</label>
                                                </div>
                                                <input type="text" name="origin" id="origin" className="w-full px-3 py-3 font-semibold border rounded-md border-gray-300 bg-gray-200 text-gray-800" defaultValue="Dhaka" required />
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <label htmlFor="password" className="text-sm">Destination</label>
                                                </div>
                                                <input type="text" name="destination" id="destination" className="w-full px-3 py-3 font-semibold border rounded-md border-gray-300 bg-gray-200 text-gray-800" defaultValue={place.name} required />
                                            </div>
                                            <div className='flex gap-4'>
                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <label htmlFor="origin" className="text-sm">From</label>
                                                    </div>
                                                    <div className='flex w-full px-3 py-3 font-semibold border rounded-md border-gray-300 bg-gray-200'>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={(date) => setStartDate(date)}
                                                            selectsStart
                                                            startDate={startDate}
                                                            endDate={endDate}
                                                            minDate={startDate}
                                                            className="w-full h-full font-bold outline-none text-lg bg-gray-200 text-gray-800"
                                                        />
                                                        <FiCalendar className='text-2xl ml-1'></FiCalendar>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <label htmlFor="password" className="text-sm">To</label>
                                                    </div>
                                                    <div className='flex w-full px-3 py-3 font-semibold border rounded-md border-gray-300 bg-gray-200'>
                                                        <DatePicker
                                                            selected={endDate}
                                                            onChange={(date) => setEndDate(date)}
                                                            selectsEnd
                                                            startDate={startDate}
                                                            endDate={endDate}
                                                            minDate={startDate}
                                                            className="w-full h-full font-bold outline-none text-lg bg-gray-200 text-gray-800"
                                                        />
                                                        <FiCalendar className='text-2xl ml-1'></FiCalendar>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div>

                                                <Link to={`/hotel/${place._id}`}>
                                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-500 text-black">Start Booking</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;