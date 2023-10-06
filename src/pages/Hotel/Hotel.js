import React from 'react';
import { FaStar } from "react-icons/fa";
const Hotel = ({hotel}) => {
    const {hotel_image, title, guests, bedrooms, beds, baths, facilities, features, stars, price, total_price} = hotel;
    return (
        <div className='grid grid-cols-12 gap-4 mt-10 pb-4 sm:pb-0 bg-gray-500 sm:bg-transparent rounded-md'>
            <div className='col-span-12 sm:col-span-5 mx-auto sm:mx-0'>
                <img src={hotel_image} className='bg-cover' alt="" />
            </div>
            <div className='col-span-12 sm:col-span-7 text-start max-w-sm mx-auto sm:mx-0 flex flex-col justify-center gap-5 p-2 sm:p-0'>
                <h4 className='text-xl font-semibold'>{title}</h4>
                <div className='text-base text-slate-700'>
                    <div className='flex items-center gap-8'>
                        <p>{guests} guests</p>
                        <p>{bedrooms} bedrooms</p>
                        <p>{beds} beds</p>
                        <p>{baths} baths</p>
                    </div>
                    <p>{facilities}</p>
                    <p>{features}</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex items-center'><FaStar className='mr-2 text-orange-500'></FaStar> {stars}</div>
                    <div><span>${price}/</span>night</div>
                    <div>${total_price}total</div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;