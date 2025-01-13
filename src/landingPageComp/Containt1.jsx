import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import rental from '../image/rental-mobil-.jpeg'


const Containt1 = () => {
    return (
        <div className='' id='home'>

        <div className='max-w-screen-xl  lg:mx-auto text-gray-900 mt-[70px]  min-h-[600px] flex justify-between flex-col md:flex-row mx-4 '>
            <div className='w-full md:w-[45%] flex mx-2 flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold'>

                Fastest Rental Service Provider, Safest and most comfortable holiday solution                </h1>
                <p className='mt-8 text-gray-500'>Jelajahi Kebebasan Berkendara! Pinjam kendaraan pilihan Anda dengan mudah dan cepat—mulai perjalanan impian Anda hari ini.</p>
                <div className='flex justify-start w-full gap-3 '>

                    <button className='px-5 py-2 mt-8 text-white border-2 rounded-lg bg-cyan-600 border-cyan-600'>
                        Get Started
                    </button>
                    <button className='px-3 py-2 mt-8 border-2 rounded-lg border-cyan-600 text-cyan-600'>
                        View Demo
                    </button>
                </div>
            </div>
            <div className=' w-full md:w-[50%]'>
                <img src={rental} alt="" />
            </div>

        </div>
        </div>
    )
}

export default Containt1
