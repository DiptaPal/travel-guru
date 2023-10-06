import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import Navbar from '../Navbar/Navbar';

const Hotels = () => {
    const rooms = useLoaderData()
    return (
        <div>
            <div className='bg-gray-700' >
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12 container mx-auto mt-10'>
                <div className='col-span-12 xl:col-span-6'>
                    <div className='text-start'>
                        <p>252 stays Apr 13-17 3 guests</p>
                        <p className='text-3xl font-bold'>Stay in Cox’s Bazar</p>
                    </div>
                    <div>
                        {
                            rooms.hotels.map(hotel => <Hotel
                                key={hotel.id}
                                hotel={hotel}
                            ></Hotel>)
                        }
                    </div>
                </div>
                <div className='col-span-12 xl:col-span-6'>
                    <div>
                        <iframe className='w-[60%] h-[300px] xl:w-[75%] xl:h-[700px] m-auto mt-10 rounded-md' id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;