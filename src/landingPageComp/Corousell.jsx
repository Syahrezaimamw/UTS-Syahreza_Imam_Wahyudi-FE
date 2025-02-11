import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img from '../image/photoProfile.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import permpuan from '../image/foto prempuan.jpg'
const Corousell = () => {
    const swiperRef = useRef(null);
    const testimonials = [
        {
            name: "Edward Newgate",
            position: "Founder Circle",
            image: img,
            testimonial: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
        },
        {
            name: "Natalie Houster",
            position: "Manager Toyota",
            image: permpuan,
            testimonial:'I am very satisfied with the ease of the vehicle loan process at PT Pinjemin Vehicle. The process was fast, clear and very professional. The vehicle was also in excellent condition, making my experience even more comfortable. Thank you for the best service!'
        },
    ];
    return (
      
        <div className="flex flex-col  items-center justify-center my-20 sm:my-10 h-[600px] md:my-[25px] md:mt-[35px] " id='comments'>
            <div className="w-full max-w-4xl p-8 text-center text-white md:rounded-xl bg-gradient-to-tr from-cyan-800 to-cyan-300">
                <h2 className="mb-4 text-3xl font-semibold">What our customers are saying</h2>
                <div className='w-[130px] h-[3px] bg-white rounded-lg mx-auto'></div>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={false}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-between mt-8 cursor-pointer md:flex-row md:px-8">
                                <div className='flex flex-col items-center md:flex-row text-start '>
                                    <div  className='w-[130px] border-[5px] border-white h-[130px] rounded-full flex items-center justify-center overflow-hidden'>
                                        
                                    <img src={item.image} alt="" />
                                    </div>
                                    {/* <img src={item.image} alt={item.name} className="w-20 h-20 mb-4 rounded-full" /> */}
                                    <div className="text-center md:text-start ms-3">
                                        <p className='text-xl fotn-semibold'>{item.name}</p>
                                        <p className='text-gray-300'>{item.position}</p>
                                    </div>

                                </div>
                                <div className='md:w-[50%] w-full text-center mt-5 md:mt-0 md:text-start'>
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
