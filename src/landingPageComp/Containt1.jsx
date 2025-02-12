import React, { useEffect } from 'react'
import { FaYoutube } from "react-icons/fa6";
import rental from '../image/rental-mobil-.jpeg'
import { Link, useNavigate } from 'react-router-dom';


const Containt1 = () => {
  const dataMy=localStorage.getItem('dataUser')
  
                const navigate = useNavigate();
      
    return (
        <div className='' id='home'>

        <div className='max-w-screen-xl  lg:mx-auto text-gray-900 md:mt-[70px] mt-[100px]  min-h-[600px] flex justify-between flex-col md:flex-row mx-4 '>
            <div className='w-full md:w-[45%] flex mx-2 flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-center md:text-start'>

                Fastest Rental Service Provider, Safest and most comfortable holiday solution                </h1>
                <p className='mt-8 text-center text-gray-500 md:text-start'>Jelajahi Kebebasan Berkendara! Pinjam kendaraan pilihan Anda dengan mudah dan cepat—mulai perjalanan impian Anda hari ini.</p>
                <div className='flex justify-center md:justify-start w-full gap-3  [&>button]:py-2 [&>button]:mt-8 [&>button]:border-2 [&>button]:rounded-lg [&>button]:border-cyan-600 '>

                    <button
                    onClick={()=>{
                        if(!dataMy){
                            navigate('/')
                        }else{
                        }
                    }}
                     className='px-5 text-white bg-cyan-600 border-cyan-600'>
                        <Link to='/dashUser'>
                        Get Started
                        </Link>
                    </button>
                    <button className='px-3 border-cyan-600 text-cyan-600'>
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
