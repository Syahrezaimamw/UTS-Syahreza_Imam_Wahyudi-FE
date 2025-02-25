import React, { useEffect, useState } from 'react'
import { FaRegFileAlt, FaRegFileArchive, FaRegUser } from 'react-icons/fa';
import { FaBars, FaCar,  FaRegRectangleList, FaX } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import img from '../image/logo.png'

const DashUser = ({children,showSide,showProfile,title}) => {
    const dataku=JSON.parse(localStorage.getItem('dataUser'))
    const data = [
           
            {
                name: 'Kendaraan',
                ic: <FaCar />,
                to: '/dashUser'
            },
          
            {
                name: 'Peminjaman',
                ic: <FaRegFileArchive />,
                to: '/peminjamanUser'
            },
            {
                name: 'Pengembalian',
                ic: <FaRegFileAlt />,
                to: '/pengembalianUser'
            },
            {
                name: 'History Request',
                ic: <FaRegRectangleList />,
                to: '/historyUser'
            },
    
        ]
          const navigate = useNavigate();
        const dataMy=localStorage.getItem('dataUser')
        useEffect(()=>{
            if(!dataMy){
                navigate('/')
            }else{
            }
        },[])
        const[modal,setModal]=useState(false)
    return (
        <>
            <nav className="fixed top-0 z-50 w-full h-[69px] bg-white/[99] border-b border-gray-900 ">
            {modal?
            <div className='absolute px-4 py-3 bg-white border-2 rounded-lg shadow-xl top-20 right-4'>
              <div className='flex justify-end w-full'>

                <FaX onClick={()=>setModal(false)} className='text-sm cursor-pointer hover:text-red-900 text-end'/>
              </div>
                <div className='flex gap-2 '>
                    <h1 className='font-semibold w-[68px]'>Username  </h1>
                    <span className='font-semibold'>:</span>
                    <h1> {" "+dataku.nama}</h1>
                </div>
                <div className='flex gap-2 mt-1'>
                <h1 className='font-semibold w-[68px]'>Email </h1>
                <span className='font-semibold'>:</span>
                    <h1> {" "+dataku.email}</h1>
                </div>
                <div className='flex gap-2 mt-1'>
                <h1 className='font-semibold w-[68px]'>NO-KTP </h1>
                <span className='font-semibold'>:</span>
                    <h1> {" "+dataku.no_ktp}</h1>
                </div>
                <div className='flex justify-end w-full mt-2 font-semibold text-red-600 cursor-pointer hover:underline'>
                    <p className='text-sm' onClick={()=>{
                        localStorage.removeItem('dataUser')
                        window.location.href='/UTS-Syahreza_Imam_Wahyudi-FE'
                    }}>Log Out</p>
                </div>
            </div>
        :<></>}
                <div className="h-full px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center justify-start lg:ps-4 rtl:justify-end">

                            <button
                                // onClick={handleShowSide}
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                            >
                                <FaBars />

                            </button>

                            <img
                                src={img}
                                className="hidden sm:block w-[25px] bg-red-900 me-3"
                            />
                            <span className="self-center hidden text-xl font-bold text-gray-800 sm:block sm:text-2xl whitespace-nowrap">
                                Pinjemin
                            </span>
                        </div>


                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                    onClick={()=>setModal(true)}
                                        type="button"
                                        className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        // onClick={() => handleshowProfile()}
                                    >
                                        <div>

                                        <FaRegUser className='w-10' />
                                        </div>
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
                                            {/* {dataAdmin ? dataAdmin.nama : '--'} */}
                                        </p>
                                        <p
                                            className="text-sm font-medium text-gray-900 truncate "
                                            role="none"
                                        >
                                            {/* {dataAdmin ? dataAdmin.email : '--'} */}

                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        {
                                            data.map((a, i) => (

                                                <li key={i}>
                                                    <Link
                                                        to={a.to}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-300 hover:bg-gray-600 "

                                                    >
                                                        {a.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        

                                        <li className='cursor-pointer' onClick={(a, i) => {
                                        }}>
                                            <a

                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-300 hover:bg-gray-600 "

                                            >
                                                Logout
                                            </a>

                                        </li>


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
                                <li key={i} className='cursor-pointer'>
                                    <Link to={a.to}>
                                        <div className={`${a.name == title ? 'bg-white shadow-lg py-2.5 ' : ''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                            <span className={`${a.name == title ? 'bg-cyan-500  group-hover:text-white' : 'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-cyan-500 group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}><i className={`${a.name == title ? 'text-white  ' : 'text-gray-900 group-hover:text-white '}`}>{a.ic}</i></span>
                                            <span className={` ${a.name == title ? 'text-black' : 'text-gray-600 group-hover:text-black'} font-semibold  m7-3`}>{a.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                   
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

export default DashUser
