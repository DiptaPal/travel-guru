import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import bgImage from '../../assets/Rectangle1.png'


const Home = () => {
    const places = useLoaderData();
    const [active, isActive] = useState(true);
    const [place, setPlace] = useState([]);
    const [placeID, setPlaceID] = useState();

    const handleCard = (id) => {
        fetch(`https://travel-guru-server-ten-indol.vercel.app/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
        isActive(false)
        setPlaceID(id)
    }
    const { name, about } = place;
    return (
        <div className='relative'>
            <div>
                <img src={bgImage}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="" />
                <div className='relative bg-gray-900 bg-opacity-75 pb-52'>
                    <div>
                        <Navbar></Navbar>
                    </div>
                    <div className='container mx-auto'>
                        <div className='text-white grid grid-cols-12 gap-0 xl:gap-12 mt-10 xl:mt-[19vh]'>
                            <div className='col-span-12 xl:col-span-4'>
                                {
                                    active ?
                                        <>
                                            <h1 className='text-7xl font-bold text-left'>
                                                Welcome to <br />
                                                <span className='text-yellow-500'>Travel Guru</span>
                                            </h1>
                                            <p className='text-xl mt-8 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero necessitatibus beatae, dolore, similique harum porro laboriosam vel pariatur dignissimos nostrum sed fugiat quod eligendi deserunt!</p>
                                        </>
                                        :
                                        <>
                                            <h1 className='text-7xl font-bold text-yellow-500 text-left'>{name}</h1>
                                            <p className='text-xl mt-8 text-justify text-clip overflow-hidden'>{about?.slice(0, 200) + '...'}</p>
                                            <Link to={`./booking/${placeID}`}>
                                                <button className='bg-yellow-500 text-black py-2 px-6 rounded-md  mt-8 flex items-center'>Booking <span className='pl-4'><FaArrowRight></FaArrowRight></span></button>
                                            </Link>
                                        </>
                                }
                            </div>
                            <div className='col-span-12 xl:col-span-8 mt-10 xl:mt-0'>
                                <div className=''>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                        {
                                            places.map(place =>
                                                <SwiperSlide onClick={() =>
                                                    handleCard(place.image.id)
                                                } key={place.image.no}>
                                                    <img className='border-2 border-yellow-500 rounded-3xl cursor-pointer' src={place.image.url} alt="" />
                                                    <p className='absolute bottom-8 left-3 sm:left-8 text-sm md:text-xl text-center font-semibold'>{place.name}</p>
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;