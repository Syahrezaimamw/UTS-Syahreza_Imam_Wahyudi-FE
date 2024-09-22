import React from 'react'
import { useState } from 'react';
import { FaRegFileAlt, FaRegFileArchive, FaRegUser, FaRegUserCircle } from 'react-icons/fa';
import {  FaHouse, FaBars } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import img from '../image/logo.jpg'
import { Link } from 'react-router-dom';

const Dashboard = ({children,title}) => {
    const [showProfile, setShowProfile] = useState(false)
    const [showSide, setShowSide] = useState(false)

    function handleshowProfile() {
        setShowProfile(showProfile ? false : true)
    }
    function handleShowSide() {
        setShowSide(showSide ? false : true)

    }

    const data = [
        {
            name: 'Home',
            ic: <FaHouse />,
            to: '/home'
        },
        {
            name: 'Kendaraan',
            ic: <FaCar />,
            to: '/kendaraan'
        },
        {
            name: 'Peminjaman',
            ic: <FaRegFileArchive />,
            to: '/peminjaman'
        },
        {
            name: 'Pengembalian',
            ic: <FaRegFileAlt/>,
            to: '/pengembalian'
        },
        {
            name: 'Sign in',
            ic: <FaRegUserCircle />,
            to: '/login'
        },
        {
            name: 'Sign up',
            ic: <FaRegUser />,
            to: '/register'
        },
    ]


    return (
        <>
            <nav className="fixed top-0 z-50 w-full h-[69px] bg-white/[99] border-b border-gray-900 ">
                <div className="h-full px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">

                            {/* humberger */}
                            <button
                                onClick={handleShowSide}
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                            >
                                <FaBars />

                            </button>

                                <img
                                    src={img}
                                    className="relative h-[40px] bg-red-900 me-3"
                                />
                                <span className="self-center text-xl font-bold text-gray-800 sm:text-2xl whitespace-nowrap">
                                    Pinjemin
                                </span>
                        </div>


                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        onClick={() => handleshowProfile()}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />
                                    </button>
                                </div>
                                <div
                                    className={`${showProfile ? 'absolute block' : 'hidden'} z-50 my-4 text-base list-none bg-gray-200 divide-y divide-gray-800 rounded shadow right-4 top-11 `}
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p
                                            className="text-sm text-gray-900 "
                                            role="none"
                                        >
                                            Neil Sims
                                        </p>
                                        <p
                                            className="text-sm font-medium text-gray-900 truncate "
                                            role="none"
                                        >
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        {
                                            data.map((a,i)=>(
                                                
                                        <li key={i}>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 hover:text-white"
                                                role="menuitem"
                                            >
                                                {a.name}
                                            </a>
                                        </li>
                                            ))
                                        }
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`${showSide ? '-translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r sm:translate-x-0 dark:bg-gray-800 border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full  px-4 pt-20 flex flex-col justify-between pb-4 overflow-y-auto bg-white/[99]">
                    <ul className="space-y-2 font-medium ">
                        {
                            data.map((a, i) => (
                                <li  key={i} className='cursor-pointer'>
                                    <Link to={a.to}>
                                    <div className={`${a.name == title ? 'bg-white shadow-lg py-2.5 ':''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                        <span className={`${a.name == title?'bg-cyan-400  group-hover:text-white':'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-cyan-400 group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}><i className={`${a.name == title?'text-white  ':'text-gray-900 group-hover:text-white '}`}>{a.ic}</i></span>
                                        <span className={` ${a.name == title?'text-black':'text-gray-600 group-hover:text-black'} font-semibold  m7-3`}>{a.name}</span>
                                    </div>
                                    </Link>
                                </li>
                            ))
                        }



                    </ul>
                    <div className='px-4 py-4 text-white rounded-lg bg-gradient-to-l from-blue-400 to-cyan-300'>
                        <div className='flex items-center justify-center bg-white rounded-lg size-8'>s</div>
                        <p className='mt-2 font-bold'>Contact To Me ?</p>
                        <button className='w-full h-[35px] mt-2 font-semibold text-gray-600 bg-white rounded-lg'>Send</button>
                        
                    </div>
                </div>
            </aside>




            <div className="p-4 mt-3 sm:ml-64">
                <div className="p-4 border-gray-200 rounded-lg mt-14">


{children}

                </div>
            </div>
        </>

    )
}

export default Dashboard
