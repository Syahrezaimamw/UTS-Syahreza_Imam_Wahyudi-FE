import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import img from '../image/photoProfile.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Corousell = () => {
    const swiperRef = useRef(null);
    const testimonials = [
        {
            name: "Edward Newgate",
            position: "Founder Circle",
            image: "path/to/image.jpg", 
            testimonial: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
        },
        {
            name: "Edward Newgate",
            position: "Founder Circle",
            image: "path/to/image.jpg", 
            testimonial: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
        },
    ];
    return (
      
        <div className="flex flex-col  items-center justify-center h-[600px] my-[25px] mt-[35px] " id='comments'>
            <div className="w-full max-w-4xl p-8 text-center text-white rounded-xl bg-gradient-to-tr from-cyan-800 to-cyan-300">
                <h2 className="mb-4 text-3xl font-semibold">What our customers are saying</h2>
                <div className='w-[130px] h-[3px] bg-white rounded-lg mx-auto'></div>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-between px-8 mt-8 cursor-pointer">
                                <div className='flex items-center text-start '>
                                    <img src={img} alt="" className='w-[140px]' />
                                    {/* <img src={item.image} alt={item.name} className="w-20 h-20 mb-4 rounded-full" /> */}
                                    <div className="text-start ms-3">
                                        <p className='text-xl fotn-semibold'>{item.name}</p>
                                        <p className='text-gray-300'>{item.position}</p>
                                    </div>

                                </div>
                                <div className='w-[50%] text-start'>
                                    <p className=''>
                                        <span>
                                        " { item.testimonial } "

                                        </span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex mt-12 space-x-8">
                <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className="px-4 py-2 font-bold text-cyan-600 active:text-cyan-900"
                >
                    <FaArrowLeft className='text-xl'/>
                </button>
                <button
                    onClick={() => swiperRef.current.slideNext()}
                    className="px-4 py-2 font-bold text-cyan-600 active:text-cyan-900"
                >
                    <FaArrowRight className='text-xl'/>
                </button>
            </div>
        </div>
    )
}

export default Corousell
